import { Helmet } from "react-helmet-async";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Termeni și Condiții • Vive Credit</title>
        <meta
          name="description"
          content="Termenii și condițiile de utilizare ale platformei Vive Credit. Citește regulile privind serviciile, contractele și responsabilitățile tale."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800 dark:text-slate-200">
        <h1 className="text-4xl font-bold mb-6">Termeni și Condiții</h1>

        <p className="mb-4">
          Prezentul document stabilește termenii și condițiile de utilizare ale
          platformei <strong>Vive Credit</strong>, un serviciu digital de
          creditare oferit în mod electronic. Continuarea utilizării platformei
          reprezintă acordul tău asupra acestor termeni.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Definiții</h2>
        <p className="mb-4">
          „Platformă” înseamnă site-ul și aplicațiile Vive Credit.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Eligibilitate</h2>
        <p className="mb-4">
          Pentru a aplica pentru un credit, utilizatorul trebuie să aibă cel
          puțin 18 ani și să ofere informații reale, complete și actualizate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          3. Procesul de creditare
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Aplicare 100% online</li>
          <li>Verificări automate de scoring</li>
          <li>Transmiterea deciziei prin email și în contul clientului</li>
          <li>Semnare electronică a documentelor</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          4. Responsabilitățile utilizatorului
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Să furnizeze date reale</li>
          <li>Să nu folosească platforma în scopuri frauduloase</li>
          <li>Să ramburseze creditul conform graficului primit la aprobare</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          5. Limitarea răspunderii
        </h2>
        <p className="mb-4">
          Vive Credit depune toate eforturile pentru funcționarea corectă a
          platformei, însă nu poate garanta funcționarea continuă și fără
          întreruperi din motive independente.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Modificări</h2>
        <p className="mb-12">
          Ne rezervăm dreptul de a modifica termenii, cu informarea
          utilizatorilor prin email sau în platformă.
        </p>

        <p className="text-sm opacity-60">Ultima actualizare: 2025</p>
      </div>
    </>
  );
};

export default TermsPage;
