import { Products } from './components/products';
import { Search } from './components/search';

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto max-w-5xl">
        <Search />
        <Products />
      </div>
    </div>
  );
}

export default App;
