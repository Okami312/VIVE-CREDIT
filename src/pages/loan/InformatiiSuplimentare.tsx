export default function InformatiiSuplimentare() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
        Informații Suplimentare
      </h2>

      <div>
        <label className="text-sm font-semibold">Comentarii (opțional)</label>
        <textarea className="border rounded-lg p-3 w-full min-h-[120px]" />
      </div>
    </section>
  );
}
