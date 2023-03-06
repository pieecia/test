import { mockData } from '../../mock/data';
import { ProductCard } from '../cards/Product';
import { Button } from '../button';

export const Products = () => {
  return (
    <>
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
    </>
  );
};
