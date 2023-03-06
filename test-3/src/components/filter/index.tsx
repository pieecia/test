import { Dropdown, DropdownOption } from '../dropdown';

const sortOptions: DropdownOption[] = [
  { name: 'price', title: 'Cena' },
  { name: 'capacity', title: 'Pojemność' },
];

const featuresOptions: DropdownOption[] = [
  { name: 'Panel AI Control' },
  { name: 'Silnik inwerterowy' },
  { name: 'Wyświetlacz elektroniczny' },
];

const energyClassOptions: DropdownOption[] = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];

const capacityOptions: DropdownOption[] = [{ name: 8 }, { name: 9 }, { name: 10.5 }];

export const Filter = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-3 mb-4">
        <div>
          <label className="block text-sm font-bold text-black text-lg mb-2">Sortuj</label>
          <Dropdown options={sortOptions} filter={'sort'} />
        </div>
        <div>
          <label className="block text-sm font-bold text-black text-lg mb-2">Funkcje</label>
          <Dropdown options={featuresOptions} filter={'feature'} />
        </div>
        <div>
          <label className="block text-sm font-bold text-black text-lg mb-2">
            Klasa energetyczna
          </label>
          <Dropdown options={energyClassOptions} filter={'energyClass'} />
        </div>
        <div>
          <label className="block text-sm font-bold text-black text-lg mb-2">Pojemność</label>
          <Dropdown options={capacityOptions} filter={'capacity'} />
        </div>
      </div>
    </>
  );
};