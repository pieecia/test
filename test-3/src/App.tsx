import { Products } from './components/products';
import { Filter } from './components/filter';
import { FiltersProvider } from './contexts/filters';

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto max-w-5xl">
        <FiltersProvider>
          <Filter />
          <Products />
        </FiltersProvider>
      </div>
    </div>
  );
}

export default App;
