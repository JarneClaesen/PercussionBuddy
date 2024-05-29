import 'package:flutter/material.dart';

class FlagWidget extends StatelessWidget {
  final String imagePath;
  final double width;
  final double height;
  final double borderRadius;

  FlagWidget({
    required this.imagePath,
    this.width = 24.0,
    this.height = 24.0,
    this.borderRadius = 8.0,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(borderRadius),
        image: DecorationImage(
          image: AssetImage(imagePath),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}

class FranceFlag extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FlagWidget(
        imagePath: 'assets/flags/france.png',
        width: 18.0,
        height: 18.0,
        borderRadius: 6.0
    );
  }
}

class GermanyFlag extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FlagWidget(
      imagePath: 'assets/flags/germany.png',
      width: 24.0,
      height: 15.0,
      borderRadius: 100.0, // More rounded corners
    );
  }
}

class ItalyFlag extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FlagWidget(
        imagePath: 'assets/flags/italy.png',
        width: 22.0,
        height: 22.0,
        borderRadius: 80.0
    );
  }
}

class SpainFlag extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FlagWidget(
        imagePath: 'assets/flags/spain.png',
        width: 18.0,
        height: 18.0,
        borderRadius: 6.0
    );
  }
}
