import { Helmet } from "react-helmet-async";

const AnpcPage = () => {
  return (
    <>
      <Helmet>
        <title>ANPC & Soluționarea litigiilor • Vive Credit</title>
        <meta
          name="description"
          content="Află procedura de soluționare a reclamațiilor, datele ANPC și opțiunile de rezolvare alternativă a disputelor pentru creditele Vive Credit."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          ANPC & Soluționarea litigiilor
        </h1>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          La Vive Credit, transparența și corectitudinea sunt fundamentale. Dacă
          ai o nemulțumire, o poți transmite către noi, iar dacă nu ești
          mulțumit de răspuns, ai la dispoziție mecanisme oficiale de
          soluționare a disputelor.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900 dark:text-white">
          1. Sesizări către Vive Credit
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Poți transmite o reclamație la adresa:
          <br />
          <strong className="text-blue-600">suport@vivecredit.ro</strong>
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900 dark:text-white">
          2. Autoritatea Națională pentru Protecția Consumatorilor
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Dacă răspunsul nostru nu este satisfăcător, te poți adresa ANPC:
        </p>

        <ul className="list-disc ml-6 mt-3 text-slate-600 dark:text-slate-300">
          <li>
            Site oficial:{" "}
            <a
              href="https://anpc.ro"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              https://anpc.ro
            </a>
          </li>
          <li>
            Telefon InfoConsumator:{" "}
            <strong className="text-blue-600">021 9551</strong>
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900 dark:text-white">
          3. SOL – Soluționarea Online a Litigiilor (UE)
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Poți folosi platforma SOL pentru rezolvarea disputelor online cu
          comercianții din UE:
        </p>

        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow"
        >
          Accesează platforma SOL
        </a>

        <div className="mt-16 p-6 bg-blue-50 dark:bg-slate-800 rounded-xl">
          <p className="text-slate-800 dark:text-slate-200">
            Ne angajăm să soluționăm orice sesizare în maximum{" "}
            <strong>30 zile calendaristice</strong>.
          </p>
        </div>
      </div>
    </>
  );
};

export default AnpcPage;
