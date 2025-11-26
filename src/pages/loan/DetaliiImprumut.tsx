type LoanDetails = {
  suma: string;
  perioada: string;
  scop: string;
  venit: string;
};

interface DetaliiImprumutProps {
  loanDetails: LoanDetails;
  setLoanDetails: (value: LoanDetails) => void;
}

export default function DetaliiImprumut({
  loanDetails,
  setLoanDetails,
}: DetaliiImprumutProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
        Detalii Împrumut
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">
            Suma Solicitată (RON)
          </label>
          <input
            type="number"
            className="border rounded-lg p-3"
            placeholder="introduceți suma"
            value={loanDetails.suma}
            onChange={(e) =>
              setLoanDetails({ ...loanDetails, suma: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Perioadă (luni)</label>
          <select
            className="border rounded-lg p-3"
            value={loanDetails.perioada}
            onChange={(e) =>
              setLoanDetails({ ...loanDetails, perioada: e.target.value })
            }
          >
            <option value="" disabled>
              Selectează perioada
            </option>
            <option>12 luni</option>
            <option>24 luni</option>
            <option>36 luni</option>
            <option>48 luni</option>
            <option>60 luni</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">
            Scopul Împrumutului
          </label>
          <select
            className="border rounded-lg p-3"
            value={loanDetails.scop}
            onChange={(e) =>
              setLoanDetails({ ...loanDetails, scop: e.target.value })
            }
          >
            <option value="">Selectează scopul</option>
            <option>Nevoi personale</option>
            <option>Renovare casă</option>
            <option>Achiziție auto</option>
            <option>Educație</option>
            <option>Altele</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">
            Venit Lunar (RON)
          </label>
          <select
            className="border rounded-lg p-3"
            value={loanDetails.venit}
            onChange={(e) =>
              setLoanDetails({ ...loanDetails, venit: e.target.value })
            }
          >
            <option value="" disabled>
              Selectează un interval de salariu
            </option>
            <option>1500 LEI - 2000 LEI</option>
            <option>2500 LEI - 3000 LEI</option>
            <option>3500 LEI - 4000 LEI</option>
            <option>4500 LEI - 5000 LEI</option>
            <option>5500 LEI - 6000 LEI</option>
            <option>Peste 6000 LEI</option>
          </select>
        </div>
      </div>
    </section>
  );
}
