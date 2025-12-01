import DashboardPage from '@/modules/dashboard/pages/DashboardPage';
import { AuditDashboard } from '@/modules/admin-audit/AuditDashboard';
import DocumentsPage from '@/modules/dashboard/pages/DocumentsPage';
import LoanPage from '@/modules/dashboard/pages/LoanPage';
import PaymentsPage from '@/modules/dashboard/pages/PaymentsPage';
import OnboardingPage from '@/modules/onboarding/pages/OnboardingPage';
import SuccessPage from '@/modules/onboarding/pages/SuccessPage';
import { PolicyEnginePage } from '@/modules/scoring';
import OperatorDashboardLayout from '@/modules/operator-dashboard/layout/OperatorDashboardLayout';
import OperatorDashboardPage from '@/modules/operator-dashboard/pages/OperatorDasboardPage';
import RiskPage from '@/modules/operator-dashboard/pages/RiskPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoanForm from '@/pages/loan/LoanForm';
import DecisionPage from '@/modules/decision-engine/Pages/DecisionPage';
import { ScorecardEngine } from '@/modules/scoring/pages/ScorecardEngine';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Root */}
      <Route path="/" element={<div />} />

      {/* Onboarding */}
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/onboarding/success" element={<SuccessPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/loan" element={<LoanPage />} />
      <Route path="/dashboard/payments" element={<PaymentsPage />} />
      <Route path="/dashboard/documents" element={<DocumentsPage />} />
      <Route path="/dashboard/loan-form" element={<LoanForm />} />

      {/* OPERATOR DASHBOARD SALES/RISK/COLLECTIONS */}
      <Route path="/operator" element={<OperatorDashboardLayout />}>
        <Route index element={<OperatorDashboardPage />} />
        <Route path="risk" element={<RiskPage />} />
        {/* <Route path="sales" element={<SalesPage />} /> */}
        {/* <Route path="collection" element={<CollectionPage />} /> */}
      </Route>

      {/* Policy Engine / Decision Engine */}
      <Route path="/policy-engine" element={<PolicyEnginePage />} />
      <Route path="/decision-engine" element={<DecisionPage />} />
      <Route path="/scorecard" element={<ScorecardEngine />} />
      <Route path="/audit" element={<AuditDashboard />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
