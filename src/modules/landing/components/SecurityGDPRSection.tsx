import { ShieldCheck, Lock, FileCheck2 } from "lucide-react";

const SecurityGDPRSection = () => {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="absolute -left-10 top-10 w-64 h-64 bg-blue-300/25 dark:bg-blue-900/30 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-800/25 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <p className="text-sm uppercase tracking-[0.18em] font-semibold text-blue-600 dark:text-blue-400 mb-3">
          Siguranță & GDPR
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Datele tale sunt protejate la cel mai înalt nivel
        </h2>

        <p className="text-slate-600 dark:text-slate-300 max-w-3xl mb-8">
          Tratăm securitatea și confidențialitatea datelor tale ca pe o
          prioritate absolută. Respectăm legislația GDPR și folosim mecanisme
          moderne de criptare și control al accesului.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg p-6">
            <ShieldCheck className="w-9 h-9 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Conform GDPR
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Datele tale sunt prelucrate doar în scopurile necesare acordării
              și administrării creditului, în baza consimțământului tău și a
              legislației în vigoare.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg p-6">
            <Lock className="w-9 h-9 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Criptare & acces controlat
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Informațiile sensibile sunt stocate criptat, iar accesul este
              limitat doar persoanelor autorizate, pe baza unor drepturi clare
              de rol.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg p-6">
            <FileCheck2 className="w-9 h-9 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Drepturile tale
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Ai acces oricând la datele tale, poți solicita rectificarea lor și
              poți exercita dreptul de a fi uitat, în limitele legale
              aplicabile.
            </p>
          </div>
        </div>

        <p className="text-slate-400 text-sm mt-6">
          Pentru detalii complete, te rugăm să consulți{" "}
          <a
            href="/privacy"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition"
          >
            Politica de confidențialitate
          </a>{" "}
          și{" "}
          <a
            href="/terms"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition"
          >
            Termenii și condițiile
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default SecurityGDPRSection;
