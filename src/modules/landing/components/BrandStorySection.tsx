import { Building2, HeartHandshake, Gauge } from "lucide-react";

const BrandStorySection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="absolute -top-10 left-10 w-56 h-56 bg-blue-300/20 dark:bg-blue-900/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold mb-3">
            Povestea VIVE CREDIT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Un IFN digital construit pentru viteză, siguranță și transparență
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            VIVE CREDIT a apărut din nevoia de a simplifica accesul la
            finanțare. Am îmbinat tehnologia cu experiența în domeniul financiar
            pentru a crea un proces de creditare rapid, clar și 100% digital,
            fără birocrație inutilă.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-lg backdrop-blur-lg p-6">
            <Building2 className="w-9 h-9 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              IFN modern
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Platformă construită pe microservicii, cu fluxuri automatizate
              pentru analiză și decizie.
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-lg backdrop-blur-lg p-6">
            <HeartHandshake className="w-9 h-9 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Transparanță totală
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Explicăm clar dobânzile, comisioanele și pașii din proces. Fără
              surprize neplăcute.
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-lg backdrop-blur-lg p-6">
            <Gauge className="w-9 h-9 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Rapid și digital
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Aplici online în câteva minute, iar decizia este generată prin
              motorul nostru de scoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
