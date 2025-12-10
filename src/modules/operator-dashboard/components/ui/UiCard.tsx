interface Props {
  icon?: React.ReactNode;
  label: string;
  value: number | string;
}
export default function UiCard({ icon, label, value }: Props) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-3">
      <div className="text-blue-600">{icon}</div>
      <div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
        <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {value}
        </div>
      </div>
    </div>
  );
}
