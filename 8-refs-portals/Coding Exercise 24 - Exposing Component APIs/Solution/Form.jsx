import React from "react";

const Form = React.forwardRef(({}, ref) => {
  const name = React.useRef();
  const email = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      clear() {
        name.current.value = "";
        email.current.value = "";
      },
    };
  });

  return (
    <form>
      <p>
        <label>Name</label>
        <input type="text" ref={name} />
      </p>

      <p>
        <label>Email</label>
        <input type="email" ref={email} />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
});

export default Form;
