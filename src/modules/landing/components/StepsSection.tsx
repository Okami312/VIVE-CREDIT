const StepsSection = () => {
  const steps = [
    { nr: "1", label: "Creezi contul" },
    { nr: "2", label: "Încarci documentele" },
    { nr: "3", label: "Primești decizia" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800 transition">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          Proces simplu și rapid
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-14 mt-14">
          {steps.map((s) => (
            <div key={s.nr} className="flex flex-col items-center">
              <div
                className="w-16 h-16 flex items-center justify-center 
                              rounded-full bg-blue-600 text-white text-2xl font-bold shadow-xl"
              >
                {s.nr}
              </div>

              <p className="mt-4 text-lg font-medium text-slate-900 dark:text-white">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
