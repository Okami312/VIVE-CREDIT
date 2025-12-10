import { X } from "lucide-react";

interface PaymentModalProps {
  amount: number;
  onClose: () => void;
}

export default function PaymentModal({ amount, onClose }: PaymentModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1C2534] rounded-xl shadow-xl p-6 w-full max-w-sm relative border border-gray-200 dark:border-white/10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Plată rată
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Vei plăti suma de:
        </p>

        <p className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">
          {amount.toLocaleString("ro-RO")} RON
        </p>

        <button
          onClick={() => {
            alert("💳 Plata a fost procesată cu succes (mock).");
            onClose();
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Confirmă plata
        </button>
      </div>
    </div>
  );
}
