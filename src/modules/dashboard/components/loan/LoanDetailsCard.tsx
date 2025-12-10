import CardWrapper from "../CardWrapper";
import { CreditCard } from "lucide-react";
import type { LoanDetails } from "@/modules/dashboard/types/dashboard";

interface Props {
  data: LoanDetails;
}

export default function LoanDetailsCard({ data }: Props) {
  return (
    <CardWrapper title="Detalii împrumut" icon={<CreditCard size={22} />}>
      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <p className="flex justify-between">
          <span className="font-medium">Suma împrumutată:</span>
          <span className="text-blue-700 dark:text-blue-300 font-semibold">
            {data.amount} RON
          </span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Rata lunară:</span>
          <span className="text-blue-700 dark:text-blue-300 font-semibold">
            {data.monthlyRate} RON
          </span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Dobândă:</span>
          <span className="dark:text-gray-200">{data.interest}%</span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Durată contract:</span>
          <span className="dark:text-gray-200">
            {data.remainingMonths} luni
          </span>
        </p>

        <p className="flex justify-between">
          <span className="font-medium">Următoarea scadență:</span>
          <span className="dark:text-gray-200">{data.nextDueDate}</span>
        </p>
      </div>
    </CardWrapper>
  );
}
