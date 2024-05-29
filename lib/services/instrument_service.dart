import 'dart:convert';
import 'package:flutter/services.dart';
import '../models/instrument.dart';

class InstrumentService {
  Future<List<Instrument>> fetchInstruments() async {
    final String response = await rootBundle.loadString('assets/instruments.json');
    final List<dynamic> data = json.decode(response);
    return data.map((json) => Instrument.fromJson(json)).toList();
  }
}