import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  to: string;
  children: any;
  id: string;
}

export default function ButtonLink({ to, children, id }: ButtonLinkProps) {
  return (
    <Link to={to} id={id}>
      <button>{children}</button>
    </Link>
  );
}
