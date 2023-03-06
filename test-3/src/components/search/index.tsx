import { Dropdown } from '../dropdown';

const sortOptions = [
  { name: 'Wszystkie', id: 'all' },
  { name: 'Cena', id: 'price' },
  { name: 'Pojemność', id: 'capacity' },
];

const featuresOptions = [
  { name: 'Wszystkie', id: 'all' },
  { name: 'Panel AI Control', id: 'panelAIControl' },
  { name: 'Silnik inwerterowy', id: 'silnikInwerterowy' },
  { name: 'Wyświetlacz elektroniczny', id: 'wyświetlaczElektroniczny' },
];

const energyClassOptions = [
  { name: 'Wszystkie', id: 'all' },
  { name: 'A', id: 'A' },
  { name: 'B', id: 'B' },
  { name: 'C', id: 'C' },
];

const capacityOptions = [
  { name: 'Wszystkie', id: 'all' },
  { name: '8kg', id: '8kg' },
  { name: '9kg', id: '9kg' },
  { name: '10.5kg', id: '10.5kg' },
];

export const Search = () => {
  return (
    <div className="grid grid-cols-4 gap-x-3 mb-4">
      <div>
        <label className="block text-sm font-bold text-black text-lg mb-2">Sortuj po</label>
        <Dropdown options={sortOptions} />
      </div>
      <div>
        <label className="block text-sm font-bold text-black text-lg mb-2">Funkcje</label>
        <Dropdown options={featuresOptions} />
      </div>
      <div>
        <label className="block text-sm font-bold text-black text-lg mb-2">
          Klasa energetyczna
        </label>
        <Dropdown options={energyClassOptions} />
      </div>
      <div>
        <label className="block text-sm font-bold text-black text-lg mb-2">Pojemność</label>
        <Dropdown options={capacityOptions} />
      </div>
    </div>
  );
};
