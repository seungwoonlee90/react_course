import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setModal] = useState(false);
  const deleteHandler = () => {
    setModal(true);
  };

  const closeHandler = () => {
    setModal(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onClick={closeHandler} />}
      {showModal && <Backdrop onClick={closeHandler} />}
    </div>
  );
}

export default Todo;
