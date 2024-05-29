import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:pwa_install/pwa_install.dart';
import 'providers/composition_provider.dart';
import 'providers/instrument_provider.dart';
import 'providers/theme_provider.dart'; // Import the ThemeProvider
import 'screens/home_screen.dart';

void main() {
  PWAInstall().setup(installCallback: () {
    debugPrint('APP INSTALLED!');
  });
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => CompositionProvider()..loadCompositions()),
        ChangeNotifierProvider(create: (context) => InstrumentProvider()..loadInstruments()),
        ChangeNotifierProvider(create: (context) => ThemeProvider()), // Add ThemeProvider
      ],
      child: Consumer<ThemeProvider>(
        builder: (context, themeProvider, child) {
          return MaterialApp(
            title: 'Percussion Buddy',
            theme: ThemeData(
              colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
              useMaterial3: true, // Optional: Use Material 3 design
            ),
            darkTheme: ThemeData(
              colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue, brightness: Brightness.dark),
              useMaterial3: true, // Optional: Use Material 3 design
            ),
            themeMode: themeProvider.themeMode, // Use the theme mode from the provider
            home: HomeScreen(),
          );
        },
      ),
    );
  }
}
