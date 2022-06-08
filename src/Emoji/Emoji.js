import "./Emoji.css";

// const showEmoji = (event) => alert(event.target.id);

// export default function Emojis() {
//   return (
//     <div className="emojis">
//       <ul>
//         <li>
//           <button onClick={(event) => alert(event.target.id)}>
//             <span id="smile">😀</span>
//           </button>
//         </li>
//       </ul>
//       <ul>
//         <li>
//           <button onClick={showEmoji}>
//             <span id="sad">😥</span>
//           </button>
//         </li>
//       </ul>
//       <ul>
//         <li>
//           <button onClick={(event) => alert(event.target.id)}>
//             <span id="tired">🥱</span>
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }
const showEmoji = (event) => alert(event.target.id);

const emojis = [
  {
    emoji: "😀",
    name: "smile",
  },
  {
    emoji: "😥",
    name: "sad",
  },
  {
    emoji: "🥱",
    name: "tired",
  },
];

// const planetes = ["terre", "saturne", "pluton"];

// export default function Emoji() {
//   return (
//     <>
//       {planetes.map((planete) => (<div key={planete}>{planete}</div>))}
//     </>
//   );
// }

export default function Emoji() {
  return (
      <>
          <ul>
              {
                  emojis.map(emoji => (
                      <li key={emoji.emoji}>
                          <button onClick={showEmoji}>
                              <span id={emoji.name}>{emoji.emoji}</span>
                          </button>
                      </li>
                  ))
              }
          </ul>
 
      </>
  )
}