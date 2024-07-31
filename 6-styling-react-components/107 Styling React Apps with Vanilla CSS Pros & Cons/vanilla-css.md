# Vanilla CSS and Inline Styles

## Vanilla CSS

### Vanilla CSS Advantages

1. **Decoupled from JSX**:

   - CSS code is completely separated from your JSX code, promoting a clear separation of concerns.

2. **Familiar Syntax**:

   - You can write CSS code as you are familiar with it, using the traditional CSS syntax and structure.

3. **Collaboration**:
   - CSS can be authored by another developer who only needs minimal access to your JSX code. This facilitates collaborative work where front-end and style-focused developers can work independently.

### Vanilla CSS Disadvantages

1. **Lack of Scoping**:
   - CSS code is not scoped to individual components, which means CSS rules may clash across different components. For example, the same CSS class name might be used in various components for different purposes, leading to unintentional style conflicts.

## Inline Styles

### A Solution to Global Scoping

- Despite organizing styles by individual components, a solution to global scoping issues is to use inline styles with the `style` prop.
- The `style` prop takes a value like:

  ```jsx
  style={{color: "red", textAlign: 'left'}}
  ```

- When a dynamic value is used, an object is passed in. Note that kebab-case is changed to camelCase.

### Inline Styles Advantages

1. **Quick and Easy**:

   - Adding styles directly to JSX elements using the `style` prop is straightforward and quick.

2. **Scoped to Elements**:

   - Styles applied using the `style` prop only affect the specific element they are added to, preventing any global style conflicts.

3. **Dynamic Styling**:
   - Inline styles allow for easy and straightforward dynamic (conditional) styling by passing objects to the `style` prop.

### Inline Styling Disadvantages

1. **CSS Knowledge Required**:

   - You still need to understand and write CSS to style your elements, even when using inline styles.

2. **Individual Styling**:

   - You need to style every element individually, which can become cumbersome for larger projects.

3. **No Separation**:
   - There is no clear separation between CSS and JSX code, which can make the code harder to read and maintain.
