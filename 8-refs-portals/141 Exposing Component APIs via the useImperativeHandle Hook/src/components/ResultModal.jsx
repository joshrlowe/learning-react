import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref,
) {
  // Create a dialog ref to refer to our element of choice (dialog element)
  const dialog = useRef();

  /* 
      The useImperativeHandle is a hook that allows us to define properties and methods that should be accessible from outside of the component.
      It takes two parameters: the ref object and a function that returns an object with properties and methods.
   */

  useImperativeHandle(ref, () => {
    return {
      // Expose and define the open method of the dialog element
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    /*
        The dialog ref created in ResultModal refers to the dialog element below.

        The dialog ref created in TimerChallenge detaches the dialog ref from the dialog element and attaches it to the object 
        created by the useImperativeHandle in ResultModal.

        This allows us to call the open method on the dialog element in TimerChallenge.
        If we were to change the dialog element to a div, the open method would still work in TimerChallenge after tinkering.
     */
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
