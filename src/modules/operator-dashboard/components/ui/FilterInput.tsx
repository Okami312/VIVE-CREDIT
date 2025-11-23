interface FilterInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function FilterInput({
  value,
  placeholder,
  onChange,
  className,
}: FilterInputProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={` flex-1 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:ring-2 hover:ring-blue-300 transition duration-200 text-gray-500 w-full ${className}`}
    />
  );
}
