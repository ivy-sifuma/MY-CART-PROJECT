import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    fetch("apiHost")
    .then((r) => r.json())
    .then((items) => setItems(items));
  }, []);

  function handleAddItem(newItem){
    setItems([...items,newItem]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  
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
      
      <ItemForm onAddItem={handleAddItem} />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        
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
