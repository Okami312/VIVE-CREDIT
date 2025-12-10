import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { OnboardingData } from "@/modules/onboarding/types/onboarding";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface AddressDataStepProps {
  onNext: () => void;
  onBack: () => void;
  updateData: (data: Partial<OnboardingData>) => void;
  initialData: OnboardingData;
}

export default function AddressDataStep({
  onNext,
  onBack,
  updateData,
  initialData,
}: AddressDataStepProps) {
  const [formData, setFormData] = useState({
    address: initialData.address || "",
    city: initialData.city || "",
    county: initialData.county || "",
    phone: initialData.phone || "",
  });

  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);

  useEffect(() => {
    if (!isPhoneTouched) return;

    if (!formData.phone) {
      setIsPhoneValid(true);
      return;
    }

    if (formData.phone.startsWith("+40")) {
      setIsPhoneValid(/^\+40[0-9]{9}$/.test(formData.phone));
    } else {
      setIsPhoneValid(formData.phone.length >= 8);
    }
  }, [formData.phone, isPhoneTouched]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.address.trim()) return alert("Introduceți adresa completă.");
    if (!formData.city.trim()) return alert("Introduceți orașul.");
    if (!formData.county.trim()) return alert("Introduceți județul.");
    if (!formData.phone.trim() || !isPhoneValid)
      return alert("Introduceți un număr de telefon valid.");

    updateData({
      address: formData.address.trim(),
      city: formData.city.trim(),
      county: formData.county.trim(),
      phone: formData.phone.trim(),
    });

    onNext();
  };

  return (
    <div className="w-full p-4 bg-transparent">
      <div
        className="
          w-full max-w-md mx-auto
          shadow-lg rounded-xl p-6
          border border-blue-100 dark:border-[#1f2e44]
          bg-white dark:bg-[#162233]
          text-gray-900 dark:text-[#c7d5ff]
        "
      >
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
          Pasul 2 — Adresă și contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="address" className="dark:text-[#c7d5ff]">
              Adresă
            </Label>
            <Input
              id="address"
              name="address"
              placeholder="Ex: Strada Mihai Eminescu nr. 10"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="
                bg-white dark:bg-[#0c1324]
                text-gray-900 dark:text-[#c7d5ff]
                border border-gray-300 dark:border-[#243247]
              "
            />
          </div>

          <div>
            <Label htmlFor="city" className="dark:text-[#c7d5ff]">
              Oraș
            </Label>
            <Input
              id="city"
              name="city"
              placeholder="Ex: București"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="
                bg-white dark:bg-[#0c1324]
                text-gray-900 dark:text-[#c7d5ff]
                border border-gray-300 dark:border-[#243247]
              "
            />
          </div>

          <div>
            <Label htmlFor="county" className="dark:text-[#c7d5ff]">
              Județ
            </Label>
            <Input
              id="county"
              name="county"
              placeholder="Ex: Ilfov"
              value={formData.county}
              onChange={(e) =>
                setFormData({ ...formData, county: e.target.value })
              }
              className="
                bg-white dark:bg-[#0c1324]
                text-gray-900 dark:text-[#c7d5ff]
                border border-gray-300 dark:border-[#243247]
              "
            />
          </div>

          <div>
            <Label htmlFor="phone" className="dark:text-[#c7d5ff]">
              Telefon
            </Label>

            <PhoneInput
              defaultCountry="ro"
              value={formData.phone}
              onChange={(phone: string) => setFormData({ ...formData, phone })}
              onFocus={() => setIsPhoneTouched(true)}
              className="w-full"
              inputClassName="!w-full !px-3 !py-2 !rounded-md !border !border-gray-300 !bg-white !text-gray-900 focus:!ring-2 focus:!ring-blue-400 focus:!outline-none dark:!bg-[#0c1324] dark:!text-[#c7d5ff] dark:!border-[#243247]"
              countrySelectorStyleProps={{
                buttonClassName:
                  "!h-full !px-2 !bg-white !border !border-gray-300 !border-r-0 !rounded-l-md dark:!bg-[#0c1324] dark:!border-[#243247] dark:!text-[#c7d5ff]",
                dropdownClassName:
                  "!bg-white !text-gray-900 dark:!bg-[#0c1324] dark:!text-[#c7d5ff] dark:!border-[#243247]",
              }}
              placeholder="+40 XXXXXXXX"
            />

            {isPhoneTouched && !isPhoneValid && (
              <p className="text-red-500 text-sm mt-1">
                Număr de telefon invalid.
              </p>
            )}
          </div>

          <div className="flex justify-between pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="px-6 dark:border-[#243247] dark:text-[#c7d5ff]"
            >
              ⬅ Înapoi
            </Button>

            <Button
              type="submit"
              className="
                px-6 text-white
                bg-blue-600 hover:bg-blue-700
                dark:bg-blue-800 dark:hover:bg-blue-900
              "
            >
              Continuă
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
