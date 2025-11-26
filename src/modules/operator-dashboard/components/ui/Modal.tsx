interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  width?: string;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  width,
  className,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div
        className={`relative bg-white rounded-2xl p-6 shadow-xl ${width} ${className}`}
      >
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
        <button
          className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-red-600"
          onClick={onClose}
        >
          x
        </button>
      </div>
    </div>
  );
}
