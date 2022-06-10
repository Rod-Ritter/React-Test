import React, { useState } from "react";

// export default function Contenu(initialCount) {
//     return(
//     <>
//     <h1>coucou</h1>

//     </>
//     )
// }

export default function Contenu({ initialCount }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <header className="App-header">
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
