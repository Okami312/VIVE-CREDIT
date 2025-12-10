interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}
export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props) {
  const base = "px-4 py-2 rounded-lg font-medium shadow-sm transition";
  const primary = "bg-blue-600 text-white hover:bg-blue-700";
  const secondary =
    "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600";
  return (
    <button
      className={`${base} ${
        variant === "primary" ? primary : secondary
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
