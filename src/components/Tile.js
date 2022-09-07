import React from "react";

function Tile({img, imageDescription, title, paragraph}) {
    return(
        <section>
            {img && <img src={img} alt={imageDescription} /> }
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </section>

    )
}

export default Tile;