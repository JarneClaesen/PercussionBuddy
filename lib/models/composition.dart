class Composition {
  final int id;
  final String composer;
  final String title;
  final List<Map<String, String>> percussionTable;
  final String notes;
  final String contributor;
  final int numTimpanists;
  final int numPercussionists;

  Composition({
    required this.id,
    required this.composer,
    required this.title,
    required this.percussionTable,
    required this.notes,
    required this.contributor,
    required this.numTimpanists,
    required this.numPercussionists,
  });

  factory Composition.fromJson(Map<String, dynamic> json) {
    return Composition(
      id: json['id'],
      composer: json['composer'],
      title: json['title'],
      percussionTable: List<Map<String, String>>.from(json['percussion_table'].map((item) => Map<String, String>.from(item))),
      notes: json['notes'],
      contributor: json['contributor'],
      numTimpanists: json['num_timpanists'],
      numPercussionists: json['num_percussionists'],
    );
  }
}
