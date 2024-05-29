import 'package:flutter/material.dart';
import '../models/instrument.dart';

class InstrumentDetailScreen extends StatelessWidget {
  final Instrument instrument;
  final Instrument originalInstrument;

  InstrumentDetailScreen({required this.instrument, required this.originalInstrument});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    // Filter out languages with a '.'
    List<Map<String, dynamic>> filteredLanguages = [
      {
        'label': 'French',
        'value': originalInstrument.french,
        'flag': 'assets/flags/france.png',
        'width': 24.0,
        'height': 24.0,
        'padding': EdgeInsets.only(left: 4, right: 20.0),
        'borderRadius': 8.0
      },
      {
        'label': 'German',
        'value': originalInstrument.german,
        'flag': 'assets/flags/germany.png',
        'width': 32.0,
        'height': 18.0,
        'padding': EdgeInsets.only(right: 16.0),
        'borderRadius': 80.0
      },
      {
        'label': 'Spanish',
        'value': originalInstrument.spanish,
        'flag': 'assets/flags/spain.png',
        'width': 24.0,
        'height': 24.0,
        'padding': EdgeInsets.only(left: 4, right: 20.0),
        'borderRadius': 8.0
      },
      {
        'label': 'Italian',
        'value': originalInstrument.italian,
        'flag': 'assets/flags/italy.png',
        'width': 28.0,
        'height': 22.0,
        'padding': EdgeInsets.only(left: 2, right: 18.0),
        'borderRadius': 100.0
      },
    ].where((language) => !(language['value'] as String).contains('.')).toList();

    return Scaffold(
      appBar: AppBar(
        title: Text(instrument.instrumentName),
      ),
      body: Container(
        decoration: BoxDecoration(
          color: colorScheme.background, // Use background color from the theme
        ),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: ListView(
            children: [
              Container(
                padding: const EdgeInsets.only(left: 8.0, right: 8.0, bottom: 16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      instrument.instrumentName,
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                        color: colorScheme.onBackground, // Use onBackground color
                      ),
                    ),
                    SizedBox(height: 8),
                    Text(
                      instrument.description,
                      style: TextStyle(
                        fontSize: 18,
                        color: colorScheme.onBackground, // Use onBackground color
                      ),
                    ),
                    if (instrument.instrumentName != originalInstrument.instrumentName)
                      SizedBox(height: 8),
                    if (instrument.instrumentName != originalInstrument.instrumentName)
                      Text(
                        'Original Name: ${originalInstrument.instrumentName}',
                        style: TextStyle(
                          fontSize: 16,
                          color: colorScheme.onSurfaceVariant, // Use onSurfaceVariant color
                        ),
                      ),
                  ],
                ),
              ),
              SizedBox(height: 20),
              ...filteredLanguages.map((language) => Container(
                decoration: BoxDecoration(
                  color: colorScheme.surface, // Use surface color from the theme
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(
                    color: colorScheme.outline, // Use outline color from the theme
                  ),
                ),
                margin: const EdgeInsets.only(bottom: 8.0),
                padding: const EdgeInsets.all(16.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center, // Center the icon vertically
                  children: [
                    Padding(
                      padding: language['padding'], // Add individual padding for each flag
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(language['borderRadius']),
                        child: Image.asset(
                          language['flag']!,
                          width: language['width'],
                          height: language['height'],
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            language['label']!,
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: colorScheme.onSurface, // Use onSurface color
                            ),
                          ),
                          Text(
                            language['value']!,
                            style: TextStyle(
                              fontSize: 16,
                              color: colorScheme.onSurface, // Use onSurface color
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              )).toList(),
            ],
          ),
        ),
      ),
    );
  }
}
