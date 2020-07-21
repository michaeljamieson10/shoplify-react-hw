import React from "react";
// import PropTypes from "prop-types";


// function ProductDisplay({ deleteProductDisplay, p }) {
function ProductDisplay({ p }) {
  function handleDeleteMeme() {
    // deleteProductDisplay(id);
  }



  return (
    <div id="foo" className="ShoppingItem">
      <div className="container">
        <h3>{p[1].name}    
        <button  onClick={handleDeleteMeme}>
           Remove From Cart
        </button>
        </h3> 
        {/* <h3>{p[1].name}:</h3>  */}
        {/* <p>{p[1].description}<br/><b>Price:</b>$ {p[1].price}</p> */}
        {/* <button id="meme_deleteBtn" onClick={handleDeleteMeme}> */}
        {/* <button  onClick={handleDeleteMeme}>
          DELETE
        </button> */}
      </div>
    </div>
  );
}

// Meme.propTypes = {
//   topText: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   bottomText: PropTypes.string.isRequired
// };

export default ProductDisplay;
