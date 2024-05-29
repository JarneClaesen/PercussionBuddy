import 'package:flutter/material.dart';
import '../models/instrument.dart';
import '../services/instrument_service.dart';

class InstrumentProvider with ChangeNotifier {
  List<Instrument> _instruments = [];
  List<Instrument> _filteredInstruments = [];
  bool _isLoading = false;
  String _query = '';

  List<Instrument> get instruments => _filteredInstruments;
  bool get isLoading => _isLoading;
  String get query => _query;

  Future<void> loadInstruments() async {
    _isLoading = true;
    notifyListeners();

    try {
      _instruments = await InstrumentService().fetchInstruments();
      _filteredInstruments = _expandInstruments(_instruments);
    } catch (error) {
      // Handle error scenario
      print('Error loading instruments: $error');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void filterInstruments(String query) {
    _query = query;
    if (query.isEmpty) {
      _filteredInstruments = _expandInstruments(_instruments);
    } else {
      String lowerQuery = query.toLowerCase();
      List<Instrument> filteredInstruments = _instruments.where((instrument) {
        String lowerName = instrument.instrumentName.toLowerCase();
        String lowerDescription = instrument.description.toLowerCase();
        String lowerFrench = instrument.french.toLowerCase();
        String lowerGerman = instrument.german.toLowerCase();
        String lowerSpanish = instrument.spanish.toLowerCase();
        String lowerItalian = instrument.italian.toLowerCase();

        return lowerName.contains(lowerQuery) ||
            lowerDescription.contains(lowerQuery) ||
            lowerFrench.contains(lowerQuery) ||
            lowerGerman.contains(lowerQuery) ||
            lowerSpanish.contains(lowerQuery) ||
            lowerItalian.contains(lowerQuery);
      }).toList();

      // Sort the results based on the closeness of the match
      filteredInstruments.sort((a, b) {
        int aScore = _calculateMatchScore(a, lowerQuery);
        int bScore = _calculateMatchScore(b, lowerQuery);
        return bScore.compareTo(aScore); // Higher score means closer match
      });

      _filteredInstruments = _expandInstruments(filteredInstruments);
    }
    notifyListeners();
  }

  List<Instrument> _expandInstruments(List<Instrument> instruments) {
    List<Instrument> expandedInstruments = [];

    for (Instrument instrument in instruments) {
      if (!expandedInstruments.any((inst) => inst.instrumentName == instrument.instrumentName)) {
        expandedInstruments.add(instrument);
      }

      List<Map<String, String>> names = [
        {'name': instrument.french, 'original': instrument.instrumentName, 'french': instrument.french, 'german': instrument.german, 'spanish': instrument.spanish, 'italian': instrument.italian},
        {'name': instrument.german, 'original': instrument.instrumentName, 'french': instrument.french, 'german': instrument.german, 'spanish': instrument.spanish, 'italian': instrument.italian},
        {'name': instrument.spanish, 'original': instrument.instrumentName, 'french': instrument.french, 'german': instrument.german, 'spanish': instrument.spanish, 'italian': instrument.italian},
        {'name': instrument.italian, 'original': instrument.instrumentName, 'french': instrument.french, 'german': instrument.german, 'spanish': instrument.spanish, 'italian': instrument.italian},
      ];

      for (var name in names) {
        if (name['name']!.isNotEmpty && !name['name']!.contains('.') && name['name'] != instrument.instrumentName) {
          bool isDuplicate = expandedInstruments.any((inst) => inst.instrumentName == name['name']);
          if (!isDuplicate) {
            expandedInstruments.add(Instrument(
              instrumentName: name['name']!,
              description: instrument.description,
              french: name['french']!,
              german: name['german']!,
              spanish: name['spanish']!,
              italian: name['italian']!,
            ));
          }
        }
      }
    }

    return expandedInstruments;
  }

  int _calculateMatchScore(Instrument instrument, String lowerQuery) {
    int score = 0;
    String lowerName = instrument.instrumentName.toLowerCase();

    if (lowerName == lowerQuery) {
      score += 100; // Exact match bonus
    } else if (lowerName.startsWith(lowerQuery)) {
      score += 30; // Starts with query bonus
    } else if (lowerName.contains(lowerQuery)) {
      score += 20; // Substring match bonus
    }

    // Additional scoring based on matching in other fields
    if (instrument.description.toLowerCase().contains(lowerQuery)) score += 5;
    if (instrument.french.toLowerCase().contains(lowerQuery)) score += 10;
    if (instrument.german.toLowerCase().contains(lowerQuery)) score += 10;
    if (instrument.spanish.toLowerCase().contains(lowerQuery)) score += 10;
    if (instrument.italian.toLowerCase().contains(lowerQuery)) score += 10;

    // Additional scoring if the query is a whole word or part of a word in the name
    List<String> nameWords = lowerName.split(' ');
    for (String word in nameWords) {
      if (word == lowerQuery) {
        score += 25; // Whole word match bonus
      } else if (word.contains(lowerQuery)) {
        score += 15; // Part of a word match bonus
      }
    }

    return score;
  }
}
