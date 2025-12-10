import { useState } from "react";

const ProductsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const products = [
    {
      name: "Credit Rapid",
      rate: "9.5%",
      limit: "10.000 RON",
      description:
        "Ideal pentru nevoi urgente. Proces accelerat, documente minime și transfer rapid.",
      features: [
        "Aprobări în câteva minute",
        "Documente puține",
        "Proces 100% digital",
      ],
    },
    {
      name: "Credit Flexibil",
      rate: "10.2%",
      limit: "20.000 RON",
      description:
        "Potrivit pentru planuri personale. Rambursare flexibilă și dobânzi competitive.",
      features: [
        "Rate flexibile",
        "Posibilitate de rambursare anticipată",
        "Dobândă adaptată profilului",
      ],
    },
    {
      name: "Refinanțare",
      rate: "8.9%",
      limit: "30.000 RON",
      description:
        "Refinanțează-ți împrumuturile existente la o dobândă mai avantajoasă.",
      features: [
        "Dobândă redusă",
        "Comasare datorii",
        "Ofertă personalizată în funcție de scor",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 transition">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          Produse de credit adaptate nevoilor tale
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 items-start">
          {products.map((p, index) => (
            <div
              key={p.name}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                         shadow-md rounded-2xl p-8 transition"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {p.name}
              </h3>

              <div className="mt-5 space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                <p>
                  <span className="font-medium">Dobândă:</span> {p.rate}
                </p>
                <p>
                  <span className="font-medium">Limită:</span> {p.limit}
                </p>
              </div>

              <button
                className="mt-6 w-full rounded-xl bg-blue-600 text-white py-2.5 
                           text-sm font-semibold hover:bg-blue-700 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {openIndex === index ? "Ascunde detalii" : "Vezi detalii"}
              </button>

              {openIndex === index && (
                <div
                  className="mt-6 p-5 rounded-xl bg-gray-50 dark:bg-slate-700 border 
                                               border-slate-200 dark:border-slate-600 animate-fadeIn"
                >
                  <p className="text-slate-800 dark:text-slate-200 font-medium">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
