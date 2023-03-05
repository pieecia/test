import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'rounded-full px-10 py-2.5 text-white font-bold uppercase text-sm transition duration-200 ease-in-out tracking-wider',
        {
          'bg-blue-700 hover:bg-blue-800': variant === 'primary',
          'bg-gray-700 hover:bg-gray-800': variant === 'secondary',
        }
      )}
      {...props}
    >
      {props.value}
    </button>
  );
};
