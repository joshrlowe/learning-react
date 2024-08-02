import React from "react";

function App() {
  const filePicker = React.useRef();
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={filePicker}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={() => filePicker.current.click()}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
