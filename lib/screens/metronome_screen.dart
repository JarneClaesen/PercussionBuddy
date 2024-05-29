import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:metronome/metronome.dart';

class MetronomeScreen extends StatefulWidget {
  @override
  _MetronomeScreenState createState() => _MetronomeScreenState();
}

class _MetronomeScreenState extends State<MetronomeScreen> with SingleTickerProviderStateMixin {
  final _metronomePlugin = Metronome();
  bool isPlaying = false;
  int bpm = 120;
  int volume = 50;

  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: (60000 / bpm).round()),
    );
    _animation = Tween<double>(begin: -100.0, end: 100.0).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    )..addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        _controller.reverse();
      } else if (status == AnimationStatus.dismissed) {
        _controller.forward();
      }
    });

    _metronomePlugin.init(
      'assets/audio/dry-wood-block.wav',
      bpm: bpm,
      volume: volume,
    );
    _metronomePlugin.onListenTick((_) {
      if (kDebugMode) {
        print('tick');
      }
      if (isPlaying) {
        _controller.forward();
      }
    });
  }

  @override
  void dispose() {
    _metronomePlugin.destroy();
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Metronome'),
      ),
      body: Container(
        padding: const EdgeInsets.all(10),
        child: Column(
          children: [
            Center(
              child: AnimatedBuilder(
                animation: _animation,
                builder: (context, child) {
                  return Transform.translate(
                    offset: Offset(_animation.value, 0),
                    child: Container(
                      width: 20,
                      height: 20,
                      color: Colors.black,
                    ),
                  );
                },
              ),
            ),
            SizedBox(height: 20),
            Text(
              'BPM: $bpm',
              style: const TextStyle(fontSize: 20),
            ),
            Slider(
              value: bpm.toDouble(),
              min: 30,
              max: 300,
              divisions: 270,
              onChangeEnd: (val) {
                _metronomePlugin.setBPM(bpm);
                _controller.duration = Duration(milliseconds: (60000 / bpm).round());
              },
              onChanged: (val) {
                bpm = val.toInt();
                setState(() {});
              },
            ),
            Text(
              'Volume: $volume%',
              style: const TextStyle(fontSize: 20),
            ),
            Slider(
              value: volume.toDouble(),
              min: 0,
              max: 100,
              divisions: 100,
              onChangeEnd: (val) {
                _metronomePlugin.setVolume(volume);
              },
              onChanged: (val) {
                volume = val.toInt();
                setState(() {});
              },
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          if (isPlaying) {
            _metronomePlugin.pause();
            _controller.stop();
            isPlaying = false;
          } else {
            _metronomePlugin.setVolume(volume);
            _metronomePlugin.play(bpm);
            _controller.forward();
            isPlaying = true;
          }
          setState(() {});
        },
        child: Icon(isPlaying ? Icons.pause : Icons.play_arrow),
      ),
    );
  }
}
