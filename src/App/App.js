import Emoji from '../Emoji/Emoji';
import Footer from '../Footer/Footer';
import logo from '../logo.svg';
import './App.css';
import Message from '../Message/Message'
import Produit from '../Produit/Produit'

export default function App() {

 return (
      <div className="App">
     
      <Emoji />
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Produit />
      <Message messagePasse="Le message passe!" prenom1="bô gosse!"/>
      <Message messagePasse="Et c'est génial!" prenom1="belle gosse!"/>
      
      {/* <Contenu /> */}
      <Footer />
      </div>
  );
}

