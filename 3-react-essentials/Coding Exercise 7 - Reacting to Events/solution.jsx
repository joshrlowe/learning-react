export const user = {
  email: "",
  password: "",
  loggedIn: false,
};

function handleSelect() {
  user.email = "joshlowe.cs@gmail.com";
  user.password = "123456";
  user.loggedIn = true;
}

function App() {
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleSelect}>Login</button>
      </p>
    </div>
  );
}

export default App;
