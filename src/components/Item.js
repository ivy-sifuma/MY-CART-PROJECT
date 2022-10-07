import React from 'react'
const apiHost ="my-shopping-cart3.herokuapp.com/items"

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleAddToCartClick() {
    // console.log('clicked item:', item)
    fetch(`apiHost/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem))
  }

  function handleDeleteClick() {
    console.log(item)
    fetch(`apiHost/${item.id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item));
  }

function Item({ item }) {
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
    <li className={item.isInCart ? 'in-cart' : ''}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      <span className='category'>{item.category}</span>
      <button
        className={item.isInCart ? 'remove' : 'add'}
        onClick={handleAddToCartClick}
      >
        {item.isInCart ? 'Remove From' : 'Add to'} Cart
      </button>
      <button className='remove' onClick={handleDeleteClick}>
        Delete
      </button>
      <button className="remove">Delete</button>
    </li>
    </li>
 ) }
  
  }

export default Item;
