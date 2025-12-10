import { Percent, ShieldCheck, Calculator } from "lucide-react";

const CosturiDAESection = () => {
  return (
    <section
      className="
        relative w-full py-24 px-6 overflow-hidden
        bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900 dark:to-slate-950
        text-slate-800 dark:text-white
      "
    >
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-40 pointer-events-none">
        <div className="hidden dark:block absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-[120px]" />
        <div className="hidden dark:block absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/20 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold tracking-wide mb-4">
          <Percent className="w-5 h-5" />
          COSTURI & DAE
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Exemplu reprezentativ de costuri
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-16 leading-relaxed">
          Dorim să fim complet transparenți în privința costurilor. Mai jos este
          un exemplu reprezentativ de credit. Valorile sunt orientative.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div
          className="
            p-8 rounded-2xl shadow-lg border 
            border-slate-200 bg-white
            dark:border-white/10 dark:bg-white/10 dark:backdrop-blur-xl
          "
        >
          <h3 className="text-2xl font-semibold mb-6">Exemplu de calcul</h3>

          <ul className="space-y-4 text-slate-700 dark:text-slate-200">
            <li>
              <span className="font-semibold text-slate-900 dark:text-white">
                Suma împrumutată:
              </span>{" "}
              10.000 lei
            </li>
            <li>
              <span className="font-semibold text-slate-900 dark:text-white">
                Durata creditului:
              </span>{" "}
              24 luni
            </li>
            <li>
              <span className="font-semibold text-slate-900 dark:text-white">
                DAE (exemplu):
              </span>{" "}
              24.99% / an
            </li>
            <li>
              <span className="font-semibold text-slate-900 dark:text-white">
                Rată lunară estimată:
              </span>{" "}
              ~530 lei
            </li>
            <li>
              <span className="font-semibold text-slate-900 dark:text-white">
                Valoare totală de rambursat:
              </span>{" "}
              ~12.720 lei
            </li>
          </ul>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 leading-relaxed">
            Exemplu orientativ, calculat pentru un credit de nevoi personale.
            Valorile exacte pot diferi în funcție de analiza financiară și
            oferta finală.
          </p>
        </div>

        <div className="space-y-8 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">
                DAE (Dobânda Anuală Efectivă)
              </span>{" "}
              include dobânda de bază și comisioanele obligatorii. Indicatorul
              te ajută să compari corect ofertele de credit.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <p>
              În procesul de aplicare îți prezentăm întotdeauna{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                costurile totale
              </span>{" "}
              — numărul de rate, valoarea lor și suma finală de rambursat.
            </p>
          </div>

          <p>
            Pentru o ofertă personalizată, poți începe oricând procesul online.
            Vei vedea costurile exacte adaptate profilului financiar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CosturiDAESection;
