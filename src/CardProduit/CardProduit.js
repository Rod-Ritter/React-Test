import './CardProduit.css';



export default function CardProduit(props) {
    return (
        
        <figure>
            {/* <img src={image} /> */}
            <h3>{props.titre}</h3>
            <p>{props.description}</p>
            <h4>{props.prix}</h4>
            <h5>{props.avis}</h5>
            
        </figure>
        

        
        )
    }
    //     <img src="" >
    //     <figcaption>
    //        <h3>titre</h3>
    //        <p>description</p>
    //        <h4>prix</h4>
    //        <h5>avis</h5>
    //     </figcaption>