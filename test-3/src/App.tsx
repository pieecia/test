import { ProductCard } from './components/cards/Product';
import { Button } from './components/button';
import { mockData } from './mock/data';

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-3 gap-x-4 gap-y-5">
          {mockData.map((product) => (
            <ProductCard key={product.code} {...product} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button
            variant={'tertiary'}
            value={'Pokaż więcej'}
            chevron={'down'}
            onClick={() => console.log('some action')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
