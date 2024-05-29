import 'package:flutter/material.dart';

class RoundedSearchField extends StatefulWidget {
  final ValueChanged<String> onChanged;
  final String initialQuery;

  RoundedSearchField({required this.onChanged, this.initialQuery = ''});

  @override
  _RoundedSearchFieldState createState() => _RoundedSearchFieldState();
}

class _RoundedSearchFieldState extends State<RoundedSearchField> {
  late TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(text: widget.initialQuery);
    _controller.addListener(() {
      setState(() {}); // Update the state to show/hide the clear button
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Padding(
      padding: const EdgeInsets.only(left: 8.0, right: 8.0, top: 8.0),
      child: TextField(
        controller: _controller,
        decoration: InputDecoration(
          labelText: 'Search',
          labelStyle: TextStyle(color: colorScheme.onSurfaceVariant), // Use onSurfaceVariant color for label
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16.0), // Rounded corners
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16.0), // Rounded corners for enabled state
            borderSide: BorderSide(
              color: colorScheme.outline, // Border color for enabled state
            ),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16.0), // Rounded corners for focused state
            borderSide: BorderSide(
              color: colorScheme.primary, // Border color for focused state
            ),
          ),
          suffixIcon: AnimatedSwitcher(
            duration: Duration(milliseconds: 100),
            transitionBuilder: (Widget child, Animation<double> animation) {
              return FadeTransition(opacity: animation, child: child);
            },
            child: _controller.text.isNotEmpty
                ? IconButton(
              key: ValueKey('clear'),
              icon: Icon(Icons.clear_rounded, color: colorScheme.onSurface), // Use onSurface color for icon
              onPressed: () {
                _controller.clear();
                widget.onChanged(''); // Notify the parent widget
              },
            )
                : SizedBox.shrink(key: ValueKey('empty')),
          ),
        ),
        style: TextStyle(color: colorScheme.onSurface), // Use onSurface color for text
        cursorColor: colorScheme.primary, // Use primary color for cursor
        onChanged: widget.onChanged,
      ),
    );
  }
}
