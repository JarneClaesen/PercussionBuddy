import 'package:flutter/material.dart';
import '../models/composition.dart';

class CompositionDetailScreen extends StatelessWidget {
  final Composition composition;
  final ScrollController _scrollController = ScrollController();

  CompositionDetailScreen({required this.composition});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: Text(composition.title),
      ),
      body: Scrollbar(
        radius: const Radius.circular(10),
        controller: _scrollController,
        child: Padding(
          padding: const EdgeInsets.only(left: 16.0, right: 16.0),
          child: CustomScrollView(
            controller: _scrollController,
            slivers: [
              SliverToBoxAdapter(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(height: 16),
                    Text(
                      composition.title,
                      style: TextStyle(
                        fontSize: 26,
                        fontWeight: FontWeight.bold,
                        color: colorScheme.onSurface, // Use onBackground color
                      ),
                    ),
                    Text(
                      composition.composer,
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: colorScheme.onSurface, // Use onBackground color
                      ),
                    ),
                    SizedBox(height: 16),
                    Text(
                      'Timpanists: ${composition.numTimpanists}',
                      style: TextStyle(
                        fontSize: 18,
                        color: colorScheme.onSurface, // Use onBackground color
                      ),
                    ),
                    SizedBox(height: 8),
                    Text(
                      'Percussionists: ${composition.numPercussionists}',
                      style: TextStyle(
                        fontSize: 18,
                        color: colorScheme.onSurface, // Use onBackground color
                      ),
                    ),
                    SizedBox(height: 25),
                    Text(
                      'Percussion:',
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                        color: colorScheme.onSurface, // Use onBackground color
                      ),
                    ),
                    SizedBox(height: 8),
                  ],
                ),
              ),
              SliverList(
                delegate: SliverChildBuilderDelegate(
                      (BuildContext context, int index) {
                    final item = composition.percussionTable[index];
                    return Container(
                      margin: EdgeInsets.symmetric(vertical: 8.0),
                      padding: EdgeInsets.all(16.0),
                      decoration: BoxDecoration(
                        color: colorScheme.primaryContainer, // Use primaryContainer color
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Table(
                        columnWidths: {
                          0: FlexColumnWidth(1),
                          1: FlexColumnWidth(2),
                        },
                        children: item.entries.map((entry) {
                          return TableRow(
                            children: [
                              Padding(
                                padding: const EdgeInsets.symmetric(vertical: 4.0),
                                child: Text(
                                  entry.key,
                                  style: TextStyle(
                                    fontSize: 12,
                                    fontWeight: FontWeight.bold,
                                    color: colorScheme.onPrimaryContainer, // Use onPrimaryContainer color
                                  ),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.symmetric(vertical: 4.0),
                                child: Text(
                                  entry.value,
                                  style: TextStyle(
                                    fontSize: 12,
                                    color: colorScheme.onPrimaryContainer, // Use onPrimaryContainer color
                                  ),
                                ),
                              ),
                            ],
                          );
                        }).toList(),
                      ),
                    );
                  },
                  childCount: composition.percussionTable.length,
                ),
              ),
              if (composition.notes != 'N/A')
                SliverToBoxAdapter(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(height: 25),
                      Text(
                        'Notes:',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: colorScheme.onSurface, // Use onBackground color
                        ),
                      ),
                      SizedBox(height: 8),
                      Text(
                        composition.notes,
                        style: TextStyle(
                          fontSize: 16,
                          color: colorScheme.onSurface, // Use onBackground color
                        ),
                      ),
                      SizedBox(height: 32),
                    ],
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
