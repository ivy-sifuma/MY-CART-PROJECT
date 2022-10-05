import React from "react";

//Destructure the onUpdatedItem prop
function Item({ item,onUpdateItem,onDeleteItem }) {

  // Add function to handle button click
  function handleAddToCartClick() {
    
   // add fetch request
   fetch(`http://localhost:4000/items/${item.id}`,{
    method:"PATCH",
    headers:{
     "Content-Type":"application/json",
    },
    body:JSON.stringify({
     isInCart: !item.isInCart,
    }),
   })
   .then((r)=>r.json())
   .then((updatedItem)=> onUpdatedItem(updatedItem))
}
function handleDeleteClick(){
  fetch(`http://localhost:4000/items/${item.id}`,{
    method:"DELETE"
  })
  .then((r)=> r.json())
  .then(()=> onDeleteItem(item));
}
   //call on UpdatedItem, passing the data returned from the fetch request
  

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      {/* add the onClick listener */}

      <button 
      className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
        <button className={item.isInCart ? "remove" : "add"}
      onClick={handleAddToCartClick}
      />
      {item.isInCart ? "Remove From" : "Add to"} Cart  

        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;