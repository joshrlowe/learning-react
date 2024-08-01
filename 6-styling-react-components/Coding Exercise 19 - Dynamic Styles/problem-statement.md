# Exercise: Dynamic Styles

Your task is to **dynamically** apply a style (`color: red`) to the `<p>Style me</p>` element in the provided React app.

The style should be applied as an **inline style** (i.e., via the `style` attribute / prop) when the `<button>` is clicked for the first time. Once the button is clicked again, the styling should switch back to `color: white`, which should also be the initial style.

Make sure that the button toggles between these two styles (`color: white` <=> `color: red`).

Important: Use `React.useState()` instead of just `useState()` as the latter can cause problems in this Udemy code environment.
