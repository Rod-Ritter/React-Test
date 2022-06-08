import "./Produit.css";
import CardProduit from '../CardProduit/CardProduit';
import gant1 from "../assets/img/gant-boxe-1.png";
import gant2 from "../assets/img/gant-boxe-2.png";

// const produits = [
//     { name: 'Pomme', id: 1},
//     { name: 'Poire', id: 2},
//     { name: 'Kiwi', id: 3},
// ]

// export default function Produit() {

//     const listeProduits = produits.map(produit => (
//         <li key={produit.id}>
//             {produit.name}
//         </li>
//     ));

//     return (
//         <div className='produit'>
//             <ul>
//                {listeProduits}
//             </ul>
//         </div>
//     )
// }

// creer un tableau produit image titre description prix id avis le composant produit devra afficher une card avec les infos de chaque produits, creer un autre composant CardProduit qui devra afficher les infos de chaques produit qui lui sont passés en props,

const produits = [
  {
    image: <img src={gant1} />,
    id: 1,
    titre: "Gant de Boxe",
    description: "de très beaux gant de boxe tout neufs",
    prix: "55€",
    avis: 743976,
  },
  {
    image: <img src={gant2} />,
    id: 2,
    titre: "Gant de Boxe Sport",
    description: "d'autres très beaux gant de boxe tout beau tou neufs",
    prix: "90€",
    avis: 245876,
  },
  {
    image: <img src={gant2} />,
    id: 3,
    titre: "Gant de Boxe Super Sport ",
    prix: "120€",
    avis: 956437,
  },
];

export default function Produit() {
  const listeProduits = produits.map((produit) => (
    <CardProduit
      key={produit.id}
      image={produit.image}
      prix={produit.prix}
      titre={produit.titre}
      description={produit.description}
      avis={produit.avis}
    />
  ));

  return listeProduits;
}
