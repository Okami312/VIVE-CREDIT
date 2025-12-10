interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}
export default function FilterInput({
  value,
  placeholder = "",
  onChange,
}: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 w-full"
    />
  );
}
