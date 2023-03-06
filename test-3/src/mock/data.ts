import { IProduct } from '../interfaces/product';

export const mockData: IProduct[] = [
  {
    code: 'WW90T754ABT',
    name: 'Pralka QuickDrive™',
    color: 'biała',
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
    color: 'biała',
    capacity: 10.5,
    dimensions: '55 x 60 x 85 cm',
    features: ['Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
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
    color: 'biała',
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
    color: 'biała',
    capacity: 9,
    dimensions: '55 x 60 x 85 cm',
    features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy'],
    energyClass: 'B',
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
    color: 'biała',
    capacity: 10.5,
    dimensions: '55 x 60 x 85 cm',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    energyClass: 'C',
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
    color: 'biała',
    capacity: 8,
    dimensions: '55 x 60 x 85 cm',
    features: ['Drzwi AddWash™', 'Panel AI Control', 'Wyświetlacz elektroniczny'],
    energyClass: 'B',
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
