import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary';
  chevron?: 'down';
}

export const Button = ({ variant, chevron, value, className, onClick }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'rounded-full px-10 py-2 font-bold transition duration-200 ease-in-out tracking-wider gap-x-2 flex items-center justify-center',
        {
          'bg-blue-700 hover:bg-blue-800 text-white uppercase text-sm': variant === 'primary',
          'bg-gray-700 hover:bg-gray-800 text-white uppercase text-sm': variant === 'secondary',
          'bg-transparent text-blue-700 normal-case text-lg': variant === 'tertiary',
        },
        className
      )}
      onClick={onClick}
    >
      {value}

      {chevron === 'down' && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </button>
  );
};
