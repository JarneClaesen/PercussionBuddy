class Instrument {
  final String instrumentName;
  final String description;
  final String french;
  final String german;
  final String spanish;
  final String italian;

  Instrument({
    required this.instrumentName,
    required this.description,
    required this.french,
    required this.german,
    required this.spanish,
    required this.italian,
  });

  factory Instrument.fromJson(Map<String, dynamic> json) {
    return Instrument(
      instrumentName: json['InstrumentName'],
      description: json['Description'],
      french: json['French'],
      german: json['German'],
      spanish: json['Spanish'],
      italian: json['Italian'],
    );
  }
}