import { useState } from "react";

import Header from "./Header";
import DemoBanner from "./DemoBanner";
import DatePersonale from "./DatePersonale";
import DetaliiImprumut from "./DetaliiImprumut";
import InformatiiSuplimentare from "./InformatiiSuplimentare";
import Terms from "./Terms";
import SubmitButton from "./SubmitButton";

//state pentru date personale
export default function LoanForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

  // staet pentru detali imprumut

  const [loanDetails, setLoanDetails] = useState({
    suma: "",
    perioada: "",
    scop: "",
    venit: "",
  });

  //state pentru afisare modal

  const [showModal, setShowModal] = useState(false);

  //VALIDARI FORM
  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
    };

    if (!form.firstName) newErrors.firstName = "Prenumele este obligatoriu";
    else if (!/^[A-ZĂÂÎȘȚ][a-zăâîșț]+$/.test(form.firstName))
      newErrors.firstName = "Prenumele trebuie să înceapă cu literă mare";

    if (!form.lastName) newErrors.lastName = "Numele este obligatoriu";
    else if (!/^[A-ZĂÂÎȘȚ][a-zăâîșț]+$/.test(form.lastName))
      newErrors.lastName = "Numele trebuie să înceapă cu literă mare";

    if (!form.email) newErrors.email = "Email-ul este obligatoriu";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email invalid";
    //pentru Telefon
    if (!form.phone) {
      newErrors.phone = "Telefonul este obligatoriu";
    } else {
      const digitsOnly = form.phone.replace(/\D/g, "");
      if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        //lungime in fuctie de Tara.
        newErrors.phone =
          "Numărul de telefon trebuie să aibă între 10 și 15 cifre";
      }
    }

    //pentru Oras si Adresa
    if (!form.city) newErrors.city = "Orașul este obligatoriu";
    if (!form.address) newErrors.address = "Adresa este obligatorie";

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => err === "");
  };

  //----------------------------|||||||------------------------------------

  // Checkbox Terms

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // state separat pentru erori

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <main className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full overflow-hidden border border-blue-100">
        <Header />
        <DemoBanner />

        <form className="p-10 space-y-12" onSubmit={handleSubmit}>
          <DatePersonale form={form} setForm={setForm} errors={errors} />
          <DetaliiImprumut
            loanDetails={loanDetails}
            setLoanDetails={setLoanDetails}
          />

          <InformatiiSuplimentare />
          <Terms
            acceptedTerms={acceptedTerms}
            setAcceptedTerms={setAcceptedTerms}
          />
          <SubmitButton />
        </form>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg text-center">
            <div className="mx-auto mb-4 w-24 h-24 border-4 border-green-500 rounded-full relative">
              <div className="absolute left-0 top-0 w-1/2 h-full bg-green-500 rounded-l-full"></div>
              <div className="absolute inset-0 flex items-center bg-green-500 rounded-full justify-center">
                <span className="text-white font-bold text-6xl">&#10003;</span>
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-2">Felicitări!</h2>
            <p className="text-gray-700">
              Cererea dumneavoastră a fost înregistrată și va fi prelucrată în
              cel mai scurt timp posibil.
            </p>
            {/* inchidem modalul si resetm toate imput-urile */}
            <button
              onClick={() => {
                setForm({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  city: "",
                  address: "",
                });
                setLoanDetails({
                  suma: "",
                  perioada: "",
                  scop: "",
                  venit: "",
                });
                setAcceptedTerms(false); // <<< RESETAM CHECKBOX-UL
                setShowModal(false);
              }}
              className="mt-6 px-10 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
