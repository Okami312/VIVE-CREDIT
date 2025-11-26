import type { ReactNode } from "react";

interface UiCardProps {
  label?: string;
  value?: number | string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}
export default function UiCard({
  label,
  value,
  icon,
  className,
  children,
}: UiCardProps) {
  return (
    <div
      className={`bg-white shadow-md rounded-2xl p-4 flex items-center gap-4 border hover:shadow-lg transition ${className}`}
    >
      {icon && (
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">{icon}</div>
      )}
      {children ? (
        <div className="flex flex-col flex-1">{children}</div>
      ) : (
        <div>
          <p className="text-gray-500 text-sm">{label}</p>
          <p className="text-xl font-semibold text-gray-500">{value}</p>
        </div>
      )}
    </div>
  );
}
