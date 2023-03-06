import { Dropdown } from '../dropdown';

const options = [
  { name: 'Wszystkie', id: 'all' },
  { name: '1', id: '1' },
  { name: '2', id: '2' },
  { name: '3', id: '3' },
];

export const Search = () => {
  return (
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
  );
};
