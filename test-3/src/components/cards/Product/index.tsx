type EnergyClass = 'A+++' | 'A++' | 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export interface Product {
  code: string;
  name: string;
  color: string;
  capacity: number;
  dimensions: string;
  features: string[];
  energyClass: EnergyClass;
  price: {
    value: number;
    currency: string;
    installment: {
      value: number;
      period: number;
    };
    validFrom: Date;
    validTo: Date;
  };
}

export const ProductCard = ({
  code,
  name,
  capacity,
  color,
  dimensions,
  features,
  energyClass,
  price,
}: Product) => {
  const { value, currency, installment, validTo, validFrom } = price;
  const parsedFeatures = features.join(', ');

  return (
    <div className="bg-white rounded-2xl p-6">
      <h5 className="text-lg text-black font-bold mb-9">
        {code},{name}, {capacity}kg, {color}
      </h5>
      <p className="text-xs text-gray-500">
        Pojemność: <span className="text-black font-bold">{capacity}</span>
      </p>
      <p className="text-xs text-gray-500">
        Wymiary: <span className="text-black font-bold">{dimensions}</span>
      </p>
      <p className="text-xs text-gray-500 mb-3.5">
        Funkcje: <span className="text-black font-bold">{parsedFeatures}</span>
      </p>
      <div className="mb-3.5">
        <p className="text-xs text-gray-500">Klasa energetyczna: {energyClass}</p>
      </div>
      <p className="text-xs text-gray-500">
        Cena obowiązuje od {validFrom.toLocaleDateString()} do {validTo.toLocaleDateString()}
      </p>
      <div className="mb-3 5">
        <h5 className="text-4xl text-black font-bold">
          {value} {currency}
        </h5>
      </div>
      <p className="text-base text-gray-700 font-bold">
        {installment.value} {currency} x {installment.period} rat
      </p>
    </div>
  );
};
