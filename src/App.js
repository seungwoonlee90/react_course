import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Tods</h1>
      <Todo text="Learn React" />
      <Todo text="Learn NextJS" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
