import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log("Timer Cleared");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  /*
    Functions as useEffect dependencies may cause infinite loops. This is because
    functions are objects in JavaScript, and they are recreated on every render.

    An example:

    function hello() {
      console.log("Hello");
    }
  
    function hello2() {
      console.log("Hello");
    }
  
    hello === hello2;
    false

    So above, onConfirm is a newly created object on every render, meaning the dependency changes,
    and the effect is re-executed. 

    This creates the illusion of an infinite loop of three-second timers.
   */

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
