import DashboardLayout from "../layout/DashboardLayout";
import { documentsMock } from "../mock/documentsMock";
import DocumentsFilters from "../components/documents/DocumentsFilters";

export default function DocumentsPage() {
  const documents = documentsMock;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            Documentele mele
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Aici găsești toate documentele tale de credit: contractul semnat,
            graficul de rambursare și actele încărcate pentru verificare.
          </p>
        </div>

        <DocumentsFilters documents={documents} />
      </div>
    </DashboardLayout>
  );
}
