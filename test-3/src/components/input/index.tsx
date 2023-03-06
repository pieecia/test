interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <input {...props} className={'text-sm font-normal px-3 py-2 bg-white'} />;
};
