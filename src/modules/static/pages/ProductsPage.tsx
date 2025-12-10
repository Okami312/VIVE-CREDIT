import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ProductsPage = () => {
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(12);

  const annualInterest = 12.5;
  const [monthlyRate, setMonthlyRate] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [dae, setDae] = useState("0");

  useEffect(() => {
    const monthlyInterest = annualInterest / 12 / 100;

    const P = amount;
    const n = months;
    const i = monthlyInterest;

    const rate = (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    setMonthlyRate(rate);
    setTotalCost(rate * n);

    const approx = ((rate * n - amount) / amount) * 100;
    setDae(approx.toFixed(2));
  }, [amount, months]);

  return (
    <>
      <Helmet>
        <title>Produse | Vive Credit</title>
        <meta
          name="description"
          content="Află mai multe despre produsele noastre de creditare, calculator rate și DAE."
        />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Produse de creditare
          </h1>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Calculator de credit
            </h2>

            <div className="mb-8">
              <label className="text-slate-700 dark:text-slate-300 font-medium">
                Suma dorită: {amount} RON
              </label>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>

            <div className="mb-8">
              <label className="text-slate-700 dark:text-slate-300 font-medium">
                Perioada: {months} luni
              </label>
              <input
                type="range"
                min={6}
                max={60}
                step={1}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Rata lunară estimată
                </p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {monthlyRate.toFixed(2)} RON
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Cost total
                </p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {totalCost.toFixed(2)} RON
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <p className="text-sm text-slate-500 dark:text-slate-300">
                  DAE estimată
                </p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {dae}%
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6">
              * Calcul automat cu valori demo pentru prezentare. DAE reală poate
              varia în funcție de profilul clientului și evaluarea riscului.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Credit rapid, 100% online
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mt-4 text-lg max-w-2xl">
              Vive Credit oferă un proces simplu, automatizat și transparent.
              Aplici în câteva minute, verifici eligibilitatea instant și
              primești banii în aceeași zi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
