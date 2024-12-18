import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)

  const renderedList = products.map((product) => {
    const { id, title, price, category, image } = product
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link card">
            <div className="image">
              <img src={image} alt={title} style={{ objectFit: "cover", height: "200px" }} />
            </div>
            <div className="content">
              <div className="header" style={{ textAlign: "left" }}>{title}</div>
              <div className="meta price" style={{ textAlign: "left" }}>${price}</div>
              <div className="meta" style={{ textAlign: "left" }}>{category}</div>
            </div>
          </div>
        </Link>
      </div>
    )
  });

  return <> {renderedList} </>
}


export default ProductComponent
