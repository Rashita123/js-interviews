Creating a reusable ProgressBar component


https://github.com/user-attachments/assets/f832cf56-1db7-4b98-84eb-3a48bb5ad277


This is Day One of creating reusable React components that are:

🚀 Customisable

🚀 Accessible,

🚀 Responsive,

🚀 Highly Performant

🚀 Exhaustively Tested

Features:

1. Suggestions are displayed dynamically based on the input.
2. Suggestions are cached to avoid redundant API calls for the same input.
3. **Keyboard Navigation:** Navigation through the `ArrowUp` and `ArrowDown` keys, `Enter` to select the currently highlighted suggestion
4. **Focus and Blur Handling:** Suggestions are shown when the input is focused and hidden when it loses focus (`onBlur`).

How is this performant?

1. Debouncing: We don’t want to hit the search API on every keystroke when the user types. So using debouncing, we can limit the number of API calls made while typing.
2. Caching: Since API calls are expensive, caching is done to cache the suggestions for search inputs. Improves performance.
3. CSS Optimisation: Animations are expensive, so using the transition attribute, we can specify on which particular property we are applying animations to limit the browser from adding animation to every property change.

Some additional ways of improving performance?

1. Cancel pending API requests: Use an `AbortController` to cancel pending API requests when the input changes or the component unmounts.

   Find working demo here - [CodeSandbox](https://codesandbox.io/p/sandbox/autocomplete-p8jp9z?file=%2Fsrc%2FApp.js%3A12%2C1)
