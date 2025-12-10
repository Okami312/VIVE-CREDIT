import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Cât durează aprobarea unui credit?",
    a: "Procesarea este aproape instantă. În majoritatea cazurilor, decizia este emisă în mai puțin de 2 minute.",
  },
  {
    q: "Este necesară prezența fizică?",
    a: "Nu. Întregul proces este 100% digital: verificare identitate, documente, semnare contract.",
  },
  {
    q: "Ce documente sunt necesare?",
    a: "Act de identitate și, în funcție de produs, dovada veniturilor. Le poți încărca direct din aplicație.",
  },
  {
    q: "Există costuri ascunse?",
    a: "Nu. Totul este transparent: dobânda, comisioanele și ratele sunt afișate clar înainte de semnare.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-slate-800 transition">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          Întrebări frecvente
        </h2>

        <p className="text-center text-slate-600 dark:text-slate-400 mt-3">
          Tot ce trebuie să știi înainte să aplici
        </p>

        <div className="mt-14 space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 
                         rounded-xl shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 
                           text-left text-slate-900 dark:text-white font-medium"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    open === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-300 animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
