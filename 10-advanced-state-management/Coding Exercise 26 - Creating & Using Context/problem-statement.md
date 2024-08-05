# Creating & Using Context

Your task is to add a _"theming"_ feature to a demo app you're given by a colleague. This _"theming"_ feature should be implemented with help of React's Context API.

Your main goal is to ensure that the "Toggle Theme" button in the `Header` component triggers a (to-be-added) `toggleTheme()` function exposed through context.

The context value should be dynamic and managed inside the `ThemeContextProvider.js` file. The current theme mode should be managed as a value that's either `'light'` or `'dark'` and exposed via a `theme` property on the overall context object.

The context object should also expose the above-mentioned `toggleTheme()` method that changes the `theme` property's value (`'light'` <-> `'dark'`).

The `Header` component needs access to the context to call the `toggleTheme()` method, the `Page` component will need access to apply a the CSS class `'light'` (for `theme === 'light'`) or the class `'dark'` (`theme === 'dark'`) to the `<div id="app">`.

Important: In this Udemy exercise workspace, any React Hooks (and other React functions!) must be accessed directly on the imported `React` object (`import React from 'react'`) - for example: `React.useState()`.
