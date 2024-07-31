# Scoping CSS Rules with CSS Modules

## Problem with Vanilla CSS

1. **Global Scope Issue**:

   - One big disadvantage of using Vanilla CSS is that CSS code is not scoped to components. This can lead to CSS rules clashing across components (e.g., the same CSS class name used in different components for different purposes).

2. **Manual Scoping Solution**:

   - One solution is to use more specific selectors. For example, if we want to apply different styles to paragraphs in the header and in a form, we can apply a `header` class to one and a `form` class to another.
   - This approach requires careful planning and defining CSS rules to conform to this scoping rule.

3. **Desired Behavior**:
   - Ideally, we want to define rules that apply to a specific component without worrying about class name collisions.

## CSS Modules Solution

1. **Introduction**:

   - CSS Modules is an approach where the build tool transforms CSS class names to names that are guaranteed to be unique per file.

2. **Usage**:

   - Rename a CSS file to `<name>.module.css`.
   - Import the CSS module:

     ```jsx
     import styles from "./Header.module.css";
     ```

   - Apply a style:

     ```jsx
     <div className={styles.className}>Content</div>
     ```

3. **Unique Class Names**:

   - The build tool generates unique class names by appending additional characters, ensuring no class name clashes.
   - This scoping ensures that the CSS rules apply only to the component that imports the module.

4. **Example**:

   - File: `Header.module.css`

     ```css
     .header {
       background-color: blue;
     }
     ```

   - File: `Header.jsx`

     ```jsx
     import styles from "./Header.module.css";

     function Header() {
       return <div className={styles.header}>Header Content</div>;
     }

     export default Header;
     ```

## CSS Modules: Advantages & Disadvantages

### Advantages

1. **Decoupled CSS**:

   - CSS code is decoupled from JSX code, maintaining a clear separation of concerns.

2. **Familiar Syntax**:

   - You can write CSS code using the traditional syntax you are familiar with.

3. **Collaboration**:

   - CSS can be written by another developer with minimal access to your JSX code.

4. **Scoped Classes**:
   - CSS classes are scoped to the component files that import them, preventing CSS name clashes.

### Disadvantages

1. **CSS Knowledge Required**:

   - You still need to understand and write CSS to style your components.

2. **Many Small Files**:
   - You may end up with many relatively small CSS files in your project, which can increase the complexity of managing styles.
