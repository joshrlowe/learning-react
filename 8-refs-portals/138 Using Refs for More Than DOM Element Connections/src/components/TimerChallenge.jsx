import { useRef, useState } from "react";

// Goal in this Section: Refer to the setTimeout function in the handleStop function so we can stop the timer.

/* 
  Potential solution: Set a global variable as follows
    let timer;

  The problem here is that the timer variable would be shared among all TimerChallenge components.
  This behavior is not desirable because we want each TimerChallenge component to have its own timer.
*/

export default function TimerChallenge({ title, targetTime }) {
  /* 
    Potential Solution: Set a variable in this function block as follows
      let timer;

    The problem here is that the timer variable would be reinitialized on each render.
    So, the first timer that is initialized would be lost and the clearTimeout function would not work.
    Because the clearTimeout function would be called with a timer whose value is undefined.
  */

  /*
    Actual Solution: Set a variable using the useRef hook as follows
      const timer = useRef();
    
    The useRef hook creates a mutable object that persists for the lifetime of the component.
    This way, we can store the timer value and access it in the handleStop function.

    This shows how useRef is a solution for storing mutable values that must persist throughout a component's lifetime.
    As we can see, these values include, DOM elements, but DOM elements are not the only thing that might need to be mutated.
  */

  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
