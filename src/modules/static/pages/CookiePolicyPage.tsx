import { Helmet } from "react-helmet-async";

const CookiePolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Politica cookie-uri • Vive Credit</title>
        <meta
          name="description"
          content="Află ce cookie-uri folosim, cum le utilizăm și cum îți poți gestiona preferințele."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Politica privind Cookie-urile
        </h1>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Website-ul Vive Credit utilizează cookie-uri pentru a îmbunătăți
          experiența utilizatorilor, pentru analiză și pentru funcționalități
          esențiale.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Ce sunt cookie-urile?</h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3">
          Cookie-urile sunt fișiere text mici care sunt stocate pe dispozitivul
          tău atunci când vizitezi un website.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tipuri de cookie-uri</h2>
        <ul className="list-disc ml-6 mt-3 text-slate-600 dark:text-slate-300">
          <li>Cookie-uri esențiale</li>
          <li>Cookie-uri de analiză</li>
          <li>Cookie-uri de marketing</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">
          Cum poți gestiona cookie-urile?
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3">
          Poți modifica setările din browser sau poți respinge anumite categorii
          direct din banner-ul cookie.
        </p>
      </div>
    </>
  );
};

export default CookiePolicyPage;
