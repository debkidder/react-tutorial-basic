import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // props is an object (in this case, with a text property)

  // "useState" is a react hook
  // can be called in react component functions
  // always returns an array with 2 elements
  // can store returned array as a constant
  // or can use destructuring by storing as 2 different constants:
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //current state snapshot

  function deleteHandler() {
    // console.log("Clicked!");
    // console.log(props.text);
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  // event listener if vanilla js ("imperative" vs "declarative"):
  // document.querySelector('button').addEventListener('click')
  // updates what's rendered on the screen
  // dynamic javascript expressions:
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      {/* passes the pointer (to the function) as the value for the prop */}
    </div>
  );
}

export default Todo;
