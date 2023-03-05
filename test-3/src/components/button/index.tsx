import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary';
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'rounded-full px-10 py-2.5 font-bold transition duration-200 ease-in-out tracking-wider',
        {
          'bg-blue-700 hover:bg-blue-800 text-white uppercase text-sm': variant === 'primary',
          'bg-gray-700 hover:bg-gray-800 text-white uppercase text-sm': variant === 'secondary',
          'bg-transparent text-blue-700 normal-case text-lg': variant === 'tertiary',
        }
      )}
      {...props}
    >
      {props.value}
    </button>
  );
};
