import Link from 'next/link';

interface LinkProps extends React.ComponentPropsWithRef<'a'> {
  isBtn?: boolean;
}

export default function A(props: LinkProps) {
  const btn =
    'bg-blue-600 text-white px-4 py-2 rounded-md capitalize hover:bg-blue-600/80 active:bg-blue-600/80';

  return (
    <Link
      href={props.href || '/'}
      {...props}
      className={`transition-colors duration-300 ease-in-out ${
        props.isBtn ? btn : ''
      } ${props.className}`}
    >
      {props.children}
    </Link>
  );
}
