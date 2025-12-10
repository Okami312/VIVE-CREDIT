import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { OnboardingData } from "@/modules/onboarding/types/onboarding";

interface WorkDataStepProps {
  onNext: () => void;
  onBack: () => void;
  updateData: (data: Partial<OnboardingData>) => void;
  initialData: OnboardingData;
}

export default function WorkDataStep({
  onNext,
  onBack,
  updateData,
  initialData,
}: WorkDataStepProps) {
  const [formData, setFormData] = useState({
    company: initialData.company || "",
    position: initialData.position || "",
    income: initialData.income || "",
    experience: initialData.experience || "",
  });

  const [errors, setErrors] = useState({
    company: "",
    position: "",
    income: "",
    experience: "",
  });

  const [isValid, setIsValid] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";

    if (["company", "position"].includes(name)) {
      if (!value.trim()) error = "Acest câmp nu poate fi gol.";
    }

    if (name === "income") {
      const num = Number(value);
      if (isNaN(num) || num <= 0)
        error = "Venitul trebuie să fie un număr pozitiv.";
    }

    if (name === "experience") {
      const num = Number(value);
      if (isNaN(num) || num < 0) error = "Experiența nu poate fi negativă.";
    }

    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const newError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: newError }));
  };

  useEffect(() => {
    const noErrors =
      !errors.company &&
      !errors.position &&
      !errors.income &&
      !errors.experience &&
      formData.company.trim() &&
      formData.position.trim() &&
      formData.income.trim() &&
      formData.experience.trim();

    setIsValid(Boolean(noErrors));
  }, [errors, formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    updateData({
      company: formData.company.trim(),
      position: formData.position.trim(),
      income: formData.income.trim(),
      experience: formData.experience.trim(),
    });

    onNext();
  };

  return (
    <div className="w-full p-4 bg-transparent">
      <Card className="w-full max-w-md mx-auto shadow-lg border border-blue-100 dark:border-[#1f2e44] bg-white dark:bg-[#162233] text-gray-900 dark:text-[#c7d5ff]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
            Pasul 3 — Loc de muncă
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="company" className="dark:text-[#c7d5ff]">
                Nume companie
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Ex: Tech Solutions SRL"
                value={formData.company}
                onChange={handleChange}
                className={`bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border ${
                  errors.company
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-300 dark:border-[#243247]"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <Label htmlFor="position" className="dark:text-[#c7d5ff]">
                Funcție / Ocupație
              </Label>
              <Input
                id="position"
                name="position"
                placeholder="Ex: Dezvoltator software"
                value={formData.position}
                onChange={handleChange}
                className={`bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border ${
                  errors.position
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-300 dark:border-[#243247]"
                }`}
              />
              {errors.position && (
                <p className="text-red-500 text-sm mt-1">{errors.position}</p>
              )}
            </div>

            <div>
              <Label htmlFor="income" className="dark:text-[#c7d5ff]">
                Venit lunar NET (RON)
              </Label>
              <Input
                id="income"
                name="income"
                type="number"
                placeholder="Ex: 7000"
                min="1"
                value={formData.income}
                onChange={handleChange}
                className={`bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border ${
                  errors.income
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-300 dark:border-[#243247]"
                }`}
              />
              {errors.income && (
                <p className="text-red-500 text-sm mt-1">{errors.income}</p>
              )}
            </div>

            <div>
              <Label htmlFor="experience" className="dark:text-[#c7d5ff]">
                Experiență (ani)
              </Label>
              <Input
                id="experience"
                name="experience"
                type="number"
                placeholder="Ex: 3"
                min="0"
                value={formData.experience}
                onChange={handleChange}
                className={`bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border ${
                  errors.experience
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-300 dark:border-[#243247]"
                }`}
              />
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
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
              disabled={!isValid}
              className={`px-6 text-white ${
                isValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-500 dark:bg-gray-700 cursor-not-allowed"
              }`}
            >
              Continuă
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
