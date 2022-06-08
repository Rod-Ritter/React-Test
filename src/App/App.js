import Emoji from '../Emoji/Emoji';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import logo from '../logo.svg';
import './App.css';
import Message from '../Message/Message'
// import Contenu from '../Contenu/Contenu';
import Produit from '../Produit/Produit'

export default function App() {

  // const entete = 'titre';
  // const titre = <h1>Un titre h1</h1>;

  return (
      <div className="App">
        {/* Ceci est un commentaire en JSX */}
      <Header />
      <Emoji />
      {/* <h1 className={entete}>Titre React</h1>
      {titre} */}
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

