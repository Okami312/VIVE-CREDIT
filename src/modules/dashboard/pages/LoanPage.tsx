import DashboardLayout from "../layout/DashboardLayout";
import { loanMock } from "../mock/loanMock";

import LoanSummaryCard from "../components/loan/LoanSummaryCard";
import LoanProgressCard from "../components/loan/LoanProgressCard";
import NextPaymentCard from "../components/loan/NextPaymentCard";
import LoanContractCard from "../components/loan/LoanContractCard";

export default function LoanPage() {
  const data = loanMock;

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LoanSummaryCard
          amount={data.amount}
          interest={data.interest}
          termMonths={data.termMonths}
          monthlyRate={data.monthlyRate}
          lastPayment={data.lastPayment}
          status={data.status}
        />

        <LoanProgressCard
          paidMonths={data.paidMonths}
          remainingMonths={data.remainingMonths}
          monthlyRate={data.monthlyRate}
          amount={data.amount}
        />

        <NextPaymentCard
          nextPaymentDate={data.nextPaymentDate}
          nextPaymentAmount={data.nextPaymentAmount}
        />

        <LoanContractCard contractUrl={data.contractUrl} />
      </div>
    </DashboardLayout>
  );
}
