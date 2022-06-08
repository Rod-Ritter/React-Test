import './Message.css';

export default function Message (props) {
    return (
        <div className='message'>
             <p>{props.messagePasse}</p>
         </div>
         ) 
}