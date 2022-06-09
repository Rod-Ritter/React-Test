import "./Produit.css";
import CardProduit from '../CardProduit/CardProduit';


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
    image: 'https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712',
    id: 1,
    titre: 'Echo Dot',
    description: 'Enceinte Bluetooth compacte avec Alexa | Son riche et puissant | Anthracite ',
    prix: "30€",
    avis: "⭐⭐⭐",
  },
  {
    image: 'https://live.staticflickr.com/1701/24066310330_b7bfcd0c0a_n.jpg',
    id: 2,
    titre: 'Fire TV',
    description: 'Tuner TV usb',
    prix: "70€",
    avis: "⭐⭐⭐⭐⭐",
  },
  {
    image: 'https://www.bhphotovideo.com/images/images2500x2500/fitbit_fb507rgpk_versa_2_health_1501923.jpg',
    id: 3,
    titre: 'Fitbit Versa ',
    description: 'Montre connecté',
    prix: "120€",
    avis: "⭐⭐⭐⭐",
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
