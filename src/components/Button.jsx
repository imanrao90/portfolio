import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  to,
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 cursor-pointer";

  const variants = {
    primary:
      "bg-blue-950 text-white hover:bg-blue-900 focus:ring-blue-950 shadow-md hover:shadow-lg",
    secondary:
      "bg-white text-blue-950 border border-blue-100 hover:border-blue-300 hover:bg-blue-50 focus:ring-blue-200",
    outline:
      "bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
