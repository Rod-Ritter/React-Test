import "./CardProduit.css";

export default function CardProduit(props) {
  return (
  
      <figure>
        <img src={props.image} />
        <figcaption>
        <h3>{props.titre}</h3>
        <p>{props.description}</p>
        <h4>{props.prix}</h4>
        <h5>{props.avis}</h5>
        </figcaption>
      </figure>
    
  );
}
