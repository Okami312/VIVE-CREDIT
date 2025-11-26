export default function DemoBanner() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white border-l-4 border-yellow-500 p-4 m-6 rounded-lg flex items-center gap-3">
      <span className="text-2xl">⚠️</span>
      <p className="text-orange-500  font-bold text-md">
        Asigură-te că datele introduse sunt corecte pentru a facilita evaluarea
        cererii.
      </p>
    </div>
  );
}
