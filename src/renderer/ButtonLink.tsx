import { Link } from 'react-router-dom';

export default function ButtonLink({ to, children, id }) {
  return <Link to={to} id={id}><button>{children}</button></Link>;
}
