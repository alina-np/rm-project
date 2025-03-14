import { Link, LinkProps } from "react-router-dom";

export const AppLink = ({ to, children, ...otherProps }: LinkProps) => {
  return (
    <Link to={to} className="link" {...otherProps}>
      {children}
    </Link>
  );
};
