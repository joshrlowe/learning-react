# Side-Effects in React

## Definition

Side effects in React are tasks that need to be performed but do not impact the current component's render cycle directly.

## Example: Sorting Places by User Location

Consider an application like Airbnb that sorts available places to stay based on the user's location. This sorting is a side effect because it's a necessary task but not directly related to rendering the component.

## Steps to Implement Side Effects

1. **Load the app as early as possible**.
2. **Retrieve the user's location** using the `navigator.geolocation` object.
3. **Use the `getCurrentPosition` method** of the `navigator.geolocation` object to get the user's location. This method accepts a callback function to process the user's location once it is retrieved.

```javascript
navigator.geolocation.getCurrentPosition((position) => {
  sortPlacesByDistance(
    AVAILABLE_PLACES,
    position.coords.latitude,
    position.coords.longitude,
  );
});
```

This code demonstrates a side effect because it is necessary for functionality but not part of the main task of `App.jsx`, which is to return renderable code.

## Key Points

- **Initial Render:** Load the application without waiting for the user's location.
- **Asynchronous Execution:** The function to get the user's location is asynchronous, and we do not wait for it to execute before rendering the initial UI.
- **Re-render on Data Availability:** Once the location is obtained and places are sorted, trigger a re-render to update the UI accordingly.

By handling side effects in this manner, we ensure the application remains responsive and performs tasks such as geolocation retrieval and sorting without blocking the main render cycle.
