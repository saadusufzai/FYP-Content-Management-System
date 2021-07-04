import React from "react";
import styles from "./Product.module.css";
import trees from "./tree.json";
import img from "../../images/donate/tree2.jpg";

const Product = () => {
  return (
    <div className={styles.featured}>
      {trees.map((tree) => {
        return (
          <div key={tree.id} className={styles.card}>
            <img src={img} alt={`Preview of ${tree.title}`} />
            <h3>{tree.title}</h3>
            <p>{tree.description}</p>
            <p>${tree.price}</p>
            <p>
              <button
                className="snipcart-add-item btn btn-outline-danger btn-sm"
                data-item-name={tree.title}
                data-item-price={tree.price}
                data-item-description={tree.description}
                data-item-min-quantity="0"
                data-item-max-quantity={tree.Qte}
                data-item-id={tree.id}
                data-item-url="/"
                style={{padding:'8px',background:'rgba(98, 98, 215, 1)',color:'#fff',border:'none'}}
              >
                Add to Cart
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
