import './App.css';
import FilterProductTable from './components/FilterableProductTable/FilterableProductTable';
import jsonData from './data/data.json'

function App() {
  const products = jsonData
  return (
    <FilterProductTable products={products}/>
  );
}

export default App;
