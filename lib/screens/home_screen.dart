import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart'; // Import for kIsWeb
import 'package:provider/provider.dart';
import 'package:pwa_install/pwa_install.dart'; // Import for PWA install
import 'composition_list_screen.dart';
import 'instrument_list_screen.dart';
import 'metronome_screen.dart'; // Import the MetronomeScreen
import '../providers/theme_provider.dart'; // Import the ThemeProvider

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;
  bool _isInstallPromptEnabled = false;

  static List<Widget> _widgetOptions = <Widget>[
    CompositionListScreen(),
    InstrumentListScreen(),
    MetronomeScreen(), // Add MetronomeScreen to the list of options
  ];

  @override
  void initState() {
    super.initState();
    _checkInstallPrompt();
  }

  void _checkInstallPrompt() async {
    if (kIsWeb) {
      bool isInstallPromptEnabled = await PWAInstall().installPromptEnabled;
      setState(() {
        _isInstallPromptEnabled = isInstallPromptEnabled;
      });
    }
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Percussion Buddy'),
        actions: [
          if (kIsWeb && _isInstallPromptEnabled) // Only show the button on the web and if install prompt is enabled
            Padding(
              padding: const EdgeInsets.only(right: 16.0),
              child: IconButton(
                icon: Icon(Icons.download),
                onPressed: () async {
                  if (PWAInstall().installPromptEnabled) {
                    PWAInstall().promptInstall_();
                  } else {
                    debugPrint('Install prompt not enabled');
                  }
                },
              ),
            ),
          Padding(
            padding: const EdgeInsets.only(right: 16.0),
            child: IconButton(
              icon: Icon(Icons.brightness_6),
              onPressed: () {
                Provider.of<ThemeProvider>(context, listen: false).toggleTheme();
              },
            ),
          ),
        ],
      ),
      body: _widgetOptions.elementAt(_selectedIndex),
      bottomNavigationBar: NavigationBar(
        backgroundColor: Theme.of(context).colorScheme.surfaceContainerLowest,
        destinations: const <NavigationDestination>[
          NavigationDestination(
            icon: Icon(Icons.library_music),
            label: 'Compositions',
          ),
          NavigationDestination(
            icon: Icon(Icons.music_note),
            label: 'Instruments',
          ),
          NavigationDestination(
            icon: Icon(Icons.timer),
            label: 'Metronome', // Add label for Metronome
          ),
        ],
        selectedIndex: _selectedIndex,
        onDestinationSelected: _onItemTapped,
      ),
    );
  }
}
