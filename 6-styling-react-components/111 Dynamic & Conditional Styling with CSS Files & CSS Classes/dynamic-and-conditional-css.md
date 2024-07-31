# Dynamic & Conditional Styling with CSS Files & CSS Classes

## Adding Conditional Styles

1. **Incorrect Usage**:

   - Using `className={emailNotValid && 'invalid'}` is incorrect because `className` will be `false` when `emailNotValid` is `false`, which is an invalid value for the `className` attribute.

2. **Correct Usage with Ternary Expression**:

   - To conditionally add a class name, use a ternary expression within a template literal.
   - Example:

     ```jsx
     <label className={`label ${emailNotValid ? "invalid" : ""}`}></label>
     ```

   - In this example, the `label` class is always applied, and the `invalid` class is added only when `emailNotValid` is `true`.

3. **Explanation**:

   - Using a template literal with a ternary expression allows you to merge classes and add some conditionally and some permanently.
   - `className={`label ${emailNotValid ? 'invalid' : ''}`}` ensures that the `label` class is always present, and the `invalid` class is only added if `emailNotValid` is `true`.

4. **Example**:

   - Adding a value to a class that already has a non-conditional class name:

     ```jsx
     <label className={`label ${emailNotValid ? "invalid" : ""}`}></label>
     ```

   - This ensures that the `label` class is always applied, while the `invalid` class is conditionally added based on the value of `emailNotValid`.

## Disadvantages

1. **Complexity**:

   - Using template literals with ternary expressions for class names can make the code harder to read and maintain, especially with multiple conditions.
   - Example of complexity:

     ```jsx
     <div
       className={`base-class ${condition1 ? "class1" : ""} ${condition2 ? "class2" : ""} ${condition3 ? "class3" : ""}`}
     >
       Complex Conditional Class Example
     </div>
     ```

   - As the number of conditions increases, managing the class names can become more challenging and may lead to cluttered code.

By using template literals and ternary expressions, you can effectively manage conditional styling in React while ensuring your code remains readable and maintainable.
