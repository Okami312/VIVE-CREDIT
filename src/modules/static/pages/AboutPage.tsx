import { Helmet } from "react-helmet-async";
import { ShieldCheck, Cog, Zap } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Despre noi – Vive Credit</title>
        <meta
          name="description"
          content="Află povestea Vive Credit și cum transformăm industria IFN prin tehnologie, transparență și procese 100% digitale."
        />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>

      <section className="min-h-screen bg-white dark:bg-slate-900 pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug md:leading-tight text-slate-900 dark:text-white">
            Tehnologie, transparență și încredere.
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              Așa arată viitorul creditării.
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
            Vive Credit a fost creat cu un obiectiv simplu: să ofere o
            experiență financiară corectă, rapidă și complet digitală. Eliminăm
            birocrația, simplificăm procesele și punem controlul financiar în
            mâinile oamenilor — exact unde trebuie să fie.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
              <ShieldCheck
                className="text-blue-600 dark:text-blue-400"
                size={32}
              />
              <h3 className="text-xl font-semibold mt-4 text-slate-900 dark:text-white">
                Transparență totală
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Fără costuri ascunse, fără surprize. Toate informațiile sunt
                clare, corecte și ușor de înțeles.
              </p>
            </div>

            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
              <Cog className="text-blue-600 dark:text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mt-4 text-slate-900 dark:text-white">
                Tehnologie modernă
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Algoritmi inteligenți, scoring automatizat și verificări online
                în câteva secunde.
              </p>
            </div>

            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
              <Zap className="text-blue-600 dark:text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mt-4 text-slate-900 dark:text-white">
                Rapiditate & Simplitate
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Proces complet digital — aplici în minute, primești decizia
                imediat, fără drumuri inutile.
              </p>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Misiunea noastră
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Ne propunem să redefinim industria IFN prin viteză, tehnologie
                și respect pentru client. Credem într-o lume în care accesul la
                finanțare este simplu, sigur și corect pentru toată lumea.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Viziunea noastră
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Să devenim standardul industriei în ceea ce privește
                digitalizarea, analiza riscului și experiența clientului —
                oferind un proces de creditare modern și uman.
              </p>
            </div>
          </div>

          <section className="pt-24">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
              Evoluția Vive Credit
            </h2>

            <div className="relative ml-6">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700" />

              <ul className="space-y-14">
                <li className="relative pl-10">
                  <span className="absolute left-0 top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-md" />
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white leading-snug">
                    2020 – Lansarea oficială
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Prima platformă IFN complet digitală, creată pentru viteză
                    și simplitate.
                  </p>
                </li>

                <li className="relative pl-10">
                  <span className="absolute left-0 top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-md" />
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white leading-snug">
                    2022 – Scoring automatizat
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Implementarea motorului AI pentru evaluarea riscului în timp
                    real.
                  </p>
                </li>

                <li className="relative pl-10">
                  <span className="absolute left-0 top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-md" />
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white leading-snug">
                    2024 – Integrare Open Banking
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Conectare directă la conturile bancare pentru verificări
                    instant și proces complet digital.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
