import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:4000/items")
    .then((r) => r.json())
    .then((items) => setItems(items));
  }, []);

  function handleAddItem(newItem){
    setItems([...items,newItem]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  //add this callback function
  function handleUpdateItem(updatedItem) {
    const updatedItems = items.map((item) => {
      if (item.id === updatedItem.id){
        return updatedItem;
      } else {
        return item;
      }
    });
    setItems(updatedItems)
    console.log("In ShoppingCart:", updatedItem);
  }

  // add callback function
  function handleDeleteItem(deletedItem){
    const updatedItems = items.filter((item)=>item.id !== deletedItem.id);
    setItems(updatedItems)
    console.log("In shoppingCart:",deletedItem)
  }



  const itemsToDisplay = items.filter((items) => {
    if (selectedCategory === "All") return true;

    return items.category === selectedCategory;
  } );

  return (
    <div className="ShoppingList">
      {/* add the onAddItem prop! */}
      <ItemForm onAddItem={handleAddItem} />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {/*pass it as a prop to item */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} 
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem} 
          />
        ))}
      </ul>
    </div>
  );
        }

        export default ShoppingList;
