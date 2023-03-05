import { EnergyClass } from '../cards/Product';

interface BadgeProps {
  energyClass: EnergyClass;
}

export const Badge = ({ energyClass }: BadgeProps) => {
  return (
    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
      {energyClass}
    </span>
  );
};
