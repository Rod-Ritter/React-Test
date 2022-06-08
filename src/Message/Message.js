import './Message.css';

export default function Message (props) {
    return (
        <div className='message'>
             <h1>{props.messagePasse}</h1>
                     <h3>Salut à toi</h3>
                     <p>{props.prenom1}</p>
        </div>
         ) 
}
