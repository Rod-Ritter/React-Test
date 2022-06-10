import React, { useState } from "react";
import Modal from "../Modal/Modal";

// export default function Contenu(initialCount) {
//     return(
//     <>
//     <h1>coucou</h1>

//     </>
//     )
// }

export default function Contenu({ initialCount }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  function handleModal() {
    setShow(!show);
  }

  return (
    <>
      <header className="App-header">
        <div className="modalContenu">
          <button onClick={handleModal}>
            {show ? "cacher" : "montrer"} la modale
          </button>
          {show && <Modal />}
        </div>
        <div className="compteur">
          Total : {count}
          <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
          <button onClick={() => setCount((prevCount) => prevCount - 1)}>
            -
          </button>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            +
          </button>
        </div>
      </header>
    </>
  );
}
