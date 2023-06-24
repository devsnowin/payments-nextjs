interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'error' | 'warning' | 'success';
}

export default function Button({ variant = 'primary', ...props }: ButtonProps) {
  let scheme: 'blue' | 'red' | 'yellow' | 'green' | (string & {});

  if (variant === 'primary')
    scheme = 'bg-blue-500 hover:bg-blue-500/80 active:bg-blue-500/80';
  else if (variant === 'error')
    scheme = 'bg-red-500 hover:bg-red-500/80 active:bg-red-500/80';
  else if (variant === 'success')
    scheme = 'bg-green-500 hover:bg-green-500/80 active:bg-green-500/80';
  else if (variant === 'warning')
    scheme = 'bg-yellow-500 hover:bg-yellow-500/80 active:bg-yellow-500/80';
  else scheme = variant;

  return (
    <button
      {...props}
      className={`${scheme} text-white px-4 py-2 rounded-md capitalize transition-colors duration-300 ease-in-out ${props.className}`}
    >
      {props.children}
    </button>
  );
}
