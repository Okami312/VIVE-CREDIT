import { Helmet } from "react-helmet-async";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Politica de Confidențialitate • Vive Credit</title>
        <meta
          name="description"
          content="Află cum colectăm, utilizăm și protejăm datele tale personale conform GDPR în platforma Vive Credit."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800 dark:text-slate-200">
        <h1 className="text-4xl font-bold mb-6">
          Politica de Confidențialitate
        </h1>

        <p className="mb-5">
          Această politică explică modul în care <strong>Vive Credit</strong>{" "}
          colectează, utilizează și protejează datele tale personale în
          conformitate cu Regulamentul (UE) 2016/679 (GDPR).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. Ce date colectăm
        </h2>
        <ul className="list-disc pl-6 mb-5 space-y-2">
          <li>Date de identificare (nume, CNP, adresă)</li>
          <li>Date de contact (email, telefon)</li>
          <li>Date financiare (venit, angajator, situație creditare)</li>
          <li>Documente încărcate (CI, adeverințe, extrase)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. Scopul colectării
        </h2>
        <p className="mb-4">
          Procesarea cererilor de credit, verificări AML/KYC, scoring,
          contractare și comunicări legate de cont.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Temeiul legal</h2>
        <ul className="list-disc pl-6 mb-5 space-y-2">
          <li>Executarea unui contract</li>
          <li>Obligații legale (Legea 129/2019 AML)</li>
          <li>Interes legitim (prevenirea fraudelor)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          4. Perioada de stocare
        </h2>
        <p className="mb-4">
          Datele sunt păstrate conform legislației financiar-contabile: între 5
          și 10 ani.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Drepturile tale</h2>
        <ul className="list-disc pl-6 mb-5 space-y-2">
          <li>Dreptul de acces</li>
          <li>Dreptul la rectificare</li>
          <li>Dreptul la ștergere</li>
          <li>Dreptul la opoziție</li>
          <li>Dreptul la portabilitatea datelor</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          6. Securitatea datelor
        </h2>
        <p className="mb-4">
          Datele sunt criptate, stocate în medii securizate și protejate prin
          proceduri stricte anti-fraudă.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Contact DPO</h2>
        <p className="mb-12">
          Email: dpo@vivecredit.ro
          <br /> Telefon: +40 744 000 000
        </p>

        <p className="text-sm opacity-60">Ultima actualizare: 2025</p>
      </div>
    </>
  );
};

export default PrivacyPage;
