import React from "react";
import Review from "./Review";

// don't change the Component name "App"
function App() {
  const [studentName, setStudentName] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  function handleStudentNameChange(event) {
    setStudentName(event.target.value);
  }

  function handleFeedbackChange(event) {
    setFeedback(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleFeedbackChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input
            type="text"
            value={studentName}
            onChange={handleStudentNameChange}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review student={studentName} feedback={feedback} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
