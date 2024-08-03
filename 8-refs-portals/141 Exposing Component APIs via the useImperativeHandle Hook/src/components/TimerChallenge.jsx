import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

/* 
  In our example, we currently forward the dialog ref in TimerChallenge to the ResultModal component.
  In the ResultModal component, the dialog ref (forwarded from TimerChallenge) then refers to a dialog element.
  This is trivial to us because we are the only developers currently working on the code. 
  
  However, if other developers worked on the code, we would have to dive into the ResultModal component to understand 
  that the dialog ref refers to a dialog element before we could confidently call the showModal() method on the 
  dialog element in TimerChallenge.

  E.g., if a developer used a div instead of a dialog element in the ResultModal component, the dialog.showModal 
  method would not work.

  This motivates us to implement a solution in the ResultModal component that allows us to define properties and methods
  that should be accessible from outside of the component. This makes the component more stable and reusable.

  See the implementation of this API in the ResultModal component.

  This changes what the dialog ref in TimerChallenge refers to. 
  It now refers to the object created by the useImperativeHandle in ResultModal, rather than the dialog element.
*/

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  );
}
