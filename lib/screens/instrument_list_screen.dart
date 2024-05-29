import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/instrument_provider.dart';
import '../widgets/rounded_search_field.dart';
import 'instrument_detail_screen.dart';
import '../widgets/flag_widgets.dart';

class InstrumentListScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Consumer<InstrumentProvider>(
            builder: (context, provider, child) {
              return RoundedSearchField(
                onChanged: (query) {
                  provider.filterInstruments(query);
                },
                initialQuery: provider.query,
              );
            },
          ),
          Expanded(
            child: Consumer<InstrumentProvider>(
              builder: (context, provider, child) {
                if (provider.isLoading) {
                  return Center(
                    child: CircularProgressIndicator(),
                  );
                }

                if (provider.instruments.isEmpty) {
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
                    itemCount: provider.instruments.length + 1, // Add 1 for the SizedBox
                    itemBuilder: (context, index) {
                      if (index == 0) {
                        return SizedBox(height: 16.0); // Add a SizedBox at the top
                      }
                      final instrument = provider.instruments[index - 1]; // Adjust index for the SizedBox
                      final originalInstrument = provider.instruments.firstWhere(
                            (inst) => inst.instrumentName == instrument.instrumentName ||
                            inst.french == instrument.instrumentName ||
                            inst.german == instrument.instrumentName ||
                            inst.spanish == instrument.instrumentName ||
                            inst.italian == instrument.instrumentName,
                        orElse: () => instrument,
                      );

                      List<Widget> flagWidgets = [];
                      if (instrument.instrumentName == instrument.french) {
                        flagWidgets.add(FranceFlag());
                      } else if (instrument.instrumentName == instrument.german) {
                        flagWidgets.add(GermanyFlag());
                      } else if (instrument.instrumentName == instrument.italian) {
                        flagWidgets.add(ItalyFlag());
                      } else if (instrument.instrumentName == instrument.spanish) {
                        flagWidgets.add(SpainFlag());
                      }

                      return ListTile(
                        title: Row(
                          children: [
                            Flexible(
                              child: Text(
                                instrument.instrumentName,
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                            SizedBox(width: 8.0),
                            ...flagWidgets,
                          ],
                        ),
                        subtitle: Text(instrument.description),
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => InstrumentDetailScreen(
                                instrument: instrument,
                                originalInstrument: originalInstrument,
                              ),
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
