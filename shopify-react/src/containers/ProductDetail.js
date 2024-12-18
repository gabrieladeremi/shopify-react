import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const { title, image, category, price, description } = product
  const { id } = useParams();
  const dispatch = useDispatch()

  const fetchProductDetail = async () => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((error) => {
      console.log('error', error)
    })

    dispatch(selectedProduct(response.data));
  }

  useEffect(() => {
    if (id && id !== "") fetchProductDetail()
  }, [id])

  return (
    <div className="ui grid container">
  {Object.keys(product).length === 0 ? (
    <div>
      <button class="ui labeled icon button">
        <i class="loading spinner icon"></i>
        Loading
      </button>
    </div>
  ) : (
    <div className="ui placeholder segment">
      <div className="ui stackable two column grid">
        <div className="ui vertical divider">AND</div>
        <div className="middle aligned row">
          {/* Image Column */}
          <div className="column">
            <img className="ui large fluid image" src={image} alt={title} />
          </div>

          {/* Details Column */}
          <div className="column">
            <h1 className="ui header">{title}</h1>
            <h2>
              <a className="ui teal tag label" href={price}>${price}</a>
            </h2>
            <h3 className="ui brown block header">{category}</h3>
            <p>{description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

  )
}


export default ProductDetail
