import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface DatePersonaleProps {
  form: {
    phone: string;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    address: string;
  };

  // React.Dispatch permite o valoare nouă sau o funcție prev => newState
  setForm: React.Dispatch<
    React.SetStateAction<{
      phone: string;
      firstName: string;
      lastName: string;
      email: string;
      city: string;
      address: string;
    }>
  >;
  errors: {
    phone: string;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    address: string;
  };
}
// Componenta principală — primește "form" și "setForm" prin props
export default function DatePersonale({
  form,
  setForm,
  errors,
}: DatePersonaleProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
        Date Personale
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Prenume */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Prenume</label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, firstName: e.target.value }))
            }
            placeholder="Prenume"
            className={`border rounded-lg p-3 ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm mt-1 font-semibold">
              {errors.firstName}
            </span>
          )}
        </div>

        {/* Nume */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Nume</label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, lastName: e.target.value }))
            }
            placeholder="Nume"
            className={`border rounded-lg p-3 ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm mt-1 font-semibold">
              {errors.lastName}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="email@example.com"
            className={`border rounded-lg p-3 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1 font-semibold">
              {errors.email}
            </span>
          )}
        </div>

        {/* Telefon */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Telefon</label>
          <PhoneInput
            defaultCountry="ro"
            value={form.phone}
            onChange={(value: string) =>
              setForm((prev) => ({ ...prev, phone: value }))
            }
            inputClassName={`!w-full !h-12 !rounded-r-lg !p-3 ${
              errors.phone ? "!border-red-500" : ""
            }`}
            countrySelectorStyleProps={{
              buttonClassName: `!h-12 !rounded-l-lg !p-3 ${
                errors.phone ? "!border-red-500" : ""
              }`,
            }}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
          )}
        </div>

        {/* Oraș */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Oraș</label>
          <input
            type="text"
            value={form.city}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, city: e.target.value }))
            }
            placeholder="Oraș"
            className={`border rounded-lg p-3 ${
              errors.city ? "border-red-500" : ""
            }`}
          />
          {errors.city && (
            <span className="text-red-500 text-sm mt-1">{errors.city}</span>
          )}
        </div>

        {/* Adresă */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Adresă</label>
          <input
            type="text"
            value={form.address}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, address: e.target.value }))
            }
            placeholder="Introdu adresa completă"
            className={`border rounded-lg p-3 ${
              errors.address ? "border-red-500" : ""
            }`}
          />
          {errors.address && (
            <span className="text-red-500 text-sm mt-1">{errors.address}</span>
          )}
        </div>
      </div>
    </section>
  );
}
