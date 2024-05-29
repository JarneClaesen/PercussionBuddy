import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/composition_provider.dart';
import '../widgets/rounded_search_field.dart';
import 'composition_detail_screen.dart';

class CompositionListScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Consumer<CompositionProvider>(
            builder: (context, provider, child) {
              return RoundedSearchField(
                onChanged: (query) {
                  provider.filterCompositions(query);
                },
                initialQuery: provider.query,
              );
            },
          ),
          Expanded(
            child: Consumer<CompositionProvider>(
              builder: (context, provider, child) {
                if (provider.isLoading) {
                  return Center(
                    child: CircularProgressIndicator(),
                  );
                }

                if (provider.compositions.isEmpty) {
                  return Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.search_off,
                          size: 80,
                          color: Colors.grey,
                        ),
                        SizedBox(height: 16),
                        Text(
                          'No results found',
                          style: TextStyle(fontSize: 18, color: Colors.grey),
                        ),
                      ],
                    ),
                  );
                }

                return Scrollbar(
                  radius: const Radius.circular(10),
                  child: ListView.builder(
                    physics: BouncingScrollPhysics(),
                    itemCount: provider.compositions.length + 1, // Add 1 for the SizedBox
                    itemBuilder: (context, index) {
                      if (index == 0) {
                        return SizedBox(height: 16.0); // Add a SizedBox at the top
                      }
                      final composition = provider.compositions[index - 1]; // Adjust index for the SizedBox
                      return ListTile(
                        title: Text(composition.title),
                        subtitle: Text(composition.composer),
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => CompositionDetailScreen(composition: composition),
                            ),
                          );
                        },
                      );
                    },
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
