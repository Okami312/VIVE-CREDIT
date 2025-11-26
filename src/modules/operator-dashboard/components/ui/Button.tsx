type Color = "green" | "red" | "yellow" | "blue";

interface ButtonProps {
  onClick: () => void;
  color?: Color;
  className?: string;
  children: React.ReactNode;
}

const colorClasses: Record<Color, string> = {
  green: "bg-green-600 hover:bg-green-700 text-white",
  red: "bg-red-600 hover:bg-red-700 text-white",
  yellow: "bg-yellow-600 hover:bg-yellow-700 text-white",
  blue: "bg-blue-600 hover:bg-blue-700 text-white",
};

export default function Button({
  onClick,
  color = "blue",
  className = "",
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl transition ${colorClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
}
