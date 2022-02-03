import React from 'react';

const ItemDetails = ({ item }) => {
  return (
    <div>
      {!item ? (
        <div>
          <h1>Item Details</h1>
          <p>Select an item to see details</p>
        </div>
      ) : (
        <div>
          <h1>${item.price}</h1>
          <p>{item.description}</p>
          {item.rating && (
            <p>
              <strong>
                <span style={{ marginRight: 10 }}>{item.rating['rate']}/5</span>
                <span>({item.rating['count']} ratings)</span>
              </strong>
            </p>
          )}
          <button>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
