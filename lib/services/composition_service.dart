import 'dart:convert';
import 'package:flutter/services.dart';
import '../models/composition.dart';

class CompositionService {
  Future<List<Composition>> fetchCompositions() async {
    final String response = await rootBundle.loadString('assets/data.json');
    final List<dynamic> data = json.decode(response);
    return data.map((json) => Composition.fromJson(json)).toList();
  }
}