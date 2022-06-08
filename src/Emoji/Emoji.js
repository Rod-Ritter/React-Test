import './Emoji.css'

export default function Emojis(){
    return(
        <div className="emojis">
        <ul>
            <li>
               <button>
                   <span id="smile">😀</span>
               </button>
            </li>
        </ul>
        <ul>
            <li>
               <button>
                   <span id="sad">😥</span>
               </button>
            </li>
        </ul>
        <ul>
            <li>
               <button>
                   <span id="tired">🥱</span>
               </button>
            </li>
        </ul>
        </div>
        
    )
}