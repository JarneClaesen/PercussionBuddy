import 'package:flutter/material.dart';
import 'package:string_similarity/string_similarity.dart';
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

      // Use string similarity to sort the results based on the closeness of the match
      filteredCompositions.sort((a, b) {
        double aScore = _calculateSimilarityScore(a, lowerQuery);
        double bScore = _calculateSimilarityScore(b, lowerQuery);
        return bScore.compareTo(aScore); // Higher score means closer match
      });

      _filteredCompositions = filteredCompositions;
    }
    notifyListeners();
  }

  double _calculateSimilarityScore(Composition composition, String query) {
    double score = 0.0;
    String lowerComposer = composition.composer.toLowerCase();
    String lowerTitle = composition.title.toLowerCase();

    // Calculate similarity scores
    double composerScore = lowerComposer.similarityTo(query);
    double titleScore = lowerTitle.similarityTo(query);

    // Use the higher of the two scores
    score = composerScore > titleScore ? composerScore : titleScore;

    return score;
  }
}
