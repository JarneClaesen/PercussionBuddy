import 'package:flutter/material.dart';
import '../models/composition.dart';
import '../services/composition_service.dart';

class CompositionProvider with ChangeNotifier {
  List<Composition> _compositions = [];
  List<Composition> _filteredCompositions = [];

  List<Composition> get compositions => _filteredCompositions;

  Future<void> loadCompositions() async {
    _compositions = await CompositionService().fetchCompositions();
    _filteredCompositions = _compositions;
    notifyListeners();
  }

  void filterCompositions(String query) {
    if (query.isEmpty) {
      _filteredCompositions = _compositions;
    } else {
      String lowerQuery = query.toLowerCase();
      List<Composition> filteredCompositions = _compositions.where((composition) {
        String lowerComposer = composition.composer.toLowerCase();
        String lowerTitle = composition.title.toLowerCase();

        // Split the composer's name into parts
        List<String> composerParts = lowerComposer.split(',').map((part) => part.trim()).toList();
        String lastName = composerParts[0];
        String firstName = composerParts.length > 1 ? composerParts[1] : '';

        return lowerComposer.contains(lowerQuery) || lowerTitle.contains(lowerQuery) ||
            lastName.contains(lowerQuery) || firstName.contains(lowerQuery);
      }).toList();

      // Sort the results based on the closeness of the match
      filteredCompositions.sort((a, b) {
        int aScore = _calculateMatchScore(a, lowerQuery);
        int bScore = _calculateMatchScore(b, lowerQuery);
        return bScore.compareTo(aScore); // Higher score means closer match
      });

      _filteredCompositions = filteredCompositions;
    }
    notifyListeners();
  }

  int _calculateMatchScore(Composition composition, String lowerQuery) {
    int score = 0;
    String lowerComposer = composition.composer.toLowerCase();
    String lowerTitle = composition.title.toLowerCase();

    // Split the composer's name into parts
    List<String> composerParts = lowerComposer.split(',').map((part) => part.trim()).toList();
    String lastName = composerParts[0];
    String firstName = composerParts.length > 1 ? composerParts[1] : '';

    if (lowerComposer == lowerQuery) {
      score += 60; // Exact match bonus
    } else if (lowerComposer.startsWith(lowerQuery)) {
      score += 30; // Starts with query bonus
    } else if (lowerComposer.contains(lowerQuery)) {
      score += 20; // Substring match bonus
    }

    if (lowerTitle == lowerQuery) {
      score += 60; // Exact match bonus
    } else if (lowerTitle.startsWith(lowerQuery)) {
      score += 30; // Starts with query bonus
    } else if (lowerTitle.contains(lowerQuery)) {
      score += 20; // Substring match bonus
    }

    // Additional scoring if the query is a whole word or part of a word in the composer or title
    List<String> composerWords = lowerComposer.split(' ');
    for (String word in composerWords) {
      if (word == lowerQuery) {
        score += 25; // Whole word match bonus
      } else if (word.contains(lowerQuery)) {
        score += 15; // Part of a word match bonus
      }
    }

    List<String> titleWords = lowerTitle.split(' ');
    for (String word in titleWords) {
      if (word == lowerQuery) {
        score += 25; // Whole word match bonus
      } else if (word.contains(lowerQuery)) {
        score += 15; // Part of a word match bonus
      }
    }

    // Additional scoring for first and last names
    if (lastName == lowerQuery) {
      score += 25; // Exact match for last name
    } else if (lastName.contains(lowerQuery)) {
      score += 15; // Substring match for last name
    }

    if (firstName == lowerQuery) {
      score += 25; // Exact match for first name
    } else if (firstName.contains(lowerQuery)) {
      score += 15; // Substring match for first name
    }

    return score;
  }
}
