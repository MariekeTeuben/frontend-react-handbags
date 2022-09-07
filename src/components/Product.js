import React from "react";

function Product({label, image, alt, title, price }) {
    console.log(label, title, price);

    return (

        <article>
            <span>{label}</span>
            <img src={image} alt={alt}/>
            <p>{title}</p>
            <h4>{price}</h4>
        </article>

    )
}

export default Product;