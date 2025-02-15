import { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import { PAGE_SIZE } from './utils/constants';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=500');
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.error(`Error while fetching the data ${err.message}`);
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * 10;
  const end = start + PAGE_SIZE;

  if (!products.length) {
    return <h1>No Products found</h1>;
  }

  return (
    <div className='App'>
      <h1>Pagination</h1>
      <div className='products-container'>
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} title={p.title} image={p.thumbnail} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noOfPages={noOfPages}
      />
    </div>
  );
};

export default App;
