import React from "react";


function Item({ item }) {
    return (
      <li className={item.isInCart ? "in-cart" : ""}>
        <span>{item.name}</span>
        <span className="category">{item.category}</span>
        <button className={item.isInCart ? "remove" : "add"}>
          {item.isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button className="remove">Delete</button>
      </li>
    );
  function Item({ item, handleUpdateItem, handleDeleteItem }) {
  
      function handleAddToCartClick(){
        fetch(`http://localhost:4000/items/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isInCart: !item.isInCart,
        }),
      })
        .then((r) => r.json())
        .then((updatedItem) => handleUpdateItem(updatedItem));
      }
  
      function handleDelete(id){
        fetch(`http://localhost:4000/items/${id}`, {
          method: "DELETE",
          headers: {
            "content-type":"application/json"
          },
        })
        .then(res => res.json())
        .then(() => handleDeleteItem(item))
      }
      return (
        <li className={item.isInCart ? "in-cart" : ""}>
          <span>{item.name}</span>
          <span className="category">{item.category}</span>
          <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>
            {item.isInCart ? "Remove From" : "Add to"} Cart
          </button>
          <button className="remove" onClick={(e) => handleDelete(item.id)}>Delete</button>
        </li>
      );
      }}
export default Item;
