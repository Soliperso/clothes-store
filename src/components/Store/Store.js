import { useState, useEffect } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import './Store.scss';

const Store = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    const product = data.find((item) => item.id === id);
    setProductDetails(product);
  };

  return (
    <div className='store-container'>
      {loading ? (
        <div className='loader'>Loading...</div>
      ) : (
        <div className='store-display'>
          <div className='card-list'>
            {data.slice(0, 3).map((item) => (
              <div className='card' key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <button onClick={() => handleClick(item.id)}>&lt;</button>
              </div>
            ))}
          </div>
          <div className='card-details'>
            <ItemDetails item={productDetails} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
