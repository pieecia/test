import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={classNames('rounded-full px-6 py-2 text-white font-bold', {
        'bg-blue-500 hover:bg-blue-600': variant === 'primary',
        'bg-gray-500 hover:bg-gray-600': variant === 'secondary',
      })}
      {...props}
    >
      {props.value}
    </button>
  );
};
