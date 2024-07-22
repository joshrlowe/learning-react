export const user = {
  name: "",
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={() => handleCreateUser("josh")}>Create User</button>
      </p>
    </div>
  );
}

export default App;
