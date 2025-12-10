import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  titleClassName?: string;
  width?: string;
  className?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  titleClassName = "",
  width = "max-w-3xl",
  className = "",
  icon,
  footer,
}: ModalProps) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setVisible(true);
    else setTimeout(() => setVisible(false), 200);
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-200
        ${isOpen ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className={`
          relative w-full ${width} bg-white dark:bg-gray-900
          rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700
          transform transition-all duration-200
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          ${className}
        `}
      >
        {(title || icon) && (
          <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            {icon && <div className="text-blue-600 text-2xl">{icon}</div>}
            <h2
              className={`text-xl font-semibold text-gray-800 dark:text-gray-100 ${titleClassName}`}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="ml-auto text-gray-400 hover:text-red-500 text-xl font-bold transition"
            >
              ×
            </button>
          </div>
        )}

        <div className="p-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {children}
        </div>

        {footer && (
          <div className="sticky bottom-0 z-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
