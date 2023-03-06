import { ProductCard } from './components/cards/Product';
import { Button } from './components/button';
import { mockData } from './mock/data';
import { Dropdown } from './components/dropdown';

const options = [
  { name: 'Wszystkie', id: 'all' },
  { name: '1', id: '1' },
  { name: '2', id: '2' },
  { name: '3', id: '3' },
];

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-4 gap-x-3 mb-4">
          <div>
            <label className="block text-sm font-bold text-black text-lg mb-2">Sortuj po</label>
            <Dropdown options={options} />
          </div>
          <div>
            <label className="block text-sm font-bold text-black text-lg mb-2">Funkcje</label>
            <Dropdown options={options} />
          </div>
          <div>
            <label className="block text-sm font-bold text-black text-lg mb-2">
              Klasa energetyczna
            </label>
            <Dropdown options={options} />
          </div>
          <div>
            <label className="block text-sm font-bold text-black text-lg mb-2">Pojemność</label>
            <Dropdown options={options} />
          </div>
        </div>
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
