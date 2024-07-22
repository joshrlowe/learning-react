const data = [
  {
    title: "Learn React",
    description: "In-depth",
  },
  {
    title: "Practice",
    description: "Practice working with React components, etc.",
  },
];

export function CourseGoal({ title, description }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal {...data[0]} />
        <CourseGoal {...data[1]} />
      </ul>
    </div>
  );
}

export default App;
