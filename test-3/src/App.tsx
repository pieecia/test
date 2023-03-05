import { IProduct, ProductCard } from './components/cards/Product';

const data: Product[] = [
  {
    code: 'WW90T754ABT',
    name: 'Pralka QuickDrive™',
    color: 'Biały',
    capacity: 9,
    dimensions: '55 x 60 x 85 cm',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    energyClass: 'A',
    price: {
      value: 1999,
      currency: 'zł',
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date('2021-01-01'),
      validTo: new Date('2021-12-31'),
    },
  },
  {
    code: 'WW90T754ABH',
    name: 'Pralka QuickDrive™',
    color: 'Biały',
    capacity: 9,
    dimensions: '55 x 60 x 85 cm',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',

      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    energyClass: 'A',
    price: {
      value: 1999,
      currency: 'zł',
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date('2021-01-01'),
      validTo: new Date('2021-12-31'),
    },
  },
  {
    code: 'WW90T754ABC',
    name: 'Pralka QuickDrive™',
    color: 'Biały',
    capacity: 8,
    dimensions: '55 x 60 x 85 cm',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',

      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    energyClass: 'A',
    price: {
      value: 1999,
      currency: 'zł',
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date('2021-01-01'),
      validTo: new Date('2021-12-31'),
    },
  },
  {
    code: 'WW90T754ABD',
    name: 'Pralka QuickDrive™',
    color: 'Biały',
    capacity: 9,
    dimensions: '55 x 60 x 85 cm',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',

      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    energyClass: 'A',
    price: {
      value: 1999,
      currency: 'zł',
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date('2021-01-01'),
      validTo: new Date('2021-12-31'),
    },
  },
  {
    code: 'WW90T754ABE',
    name: 'Pralka QuickDrive™',
    color: 'Biały',
    capacity: 8,
    dimensions: '55 x 60 x 85 cm',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',

      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    energyClass: 'A',
    price: {
      value: 1999,
      currency: 'zł',
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date('2021-01-01'),
      validTo: new Date('2021-12-31'),
    },
  },
  {
    code: 'WW90T754ABF',
    name: 'Pralka QuickDrive™',
    color: 'Biały',
    capacity: 9,
    dimensions: '55 x 60 x 85 cm',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',

      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    energyClass: 'A',
    price: {
      value: 1999,
      currency: 'zł',
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date('2021-01-01'),
      validTo: new Date('2021-12-31'),
    },
  },
];

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-3 gap-x-4 gap-y-5">
          {data.map((product) => (
            <ProductCard key={product.code} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
