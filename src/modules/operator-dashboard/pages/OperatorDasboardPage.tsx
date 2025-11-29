import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, ShieldCheck, Users } from "lucide-react";

import { NavLink } from "react-router-dom";

const operatorModules = [
  {
    label: "Sales",
    description: "Aplicații noi, vânzări și conversii",
    stats: 23,
    path: "sales",
    icon: DollarSign,
    progress: [70, 50, 90, 30],
  },
  {
    label: "Risk",
    description: "Scoring, verificări și decizii",
    stats: 12,
    path: "risk",
    icon: ShieldCheck,
    progress: [40, 60, 30, 80],
  },
  {
    label: "Collections",
    description: "Gestionare clienți restanțieri",
    stats: 8,
    path: "collections",
    icon: Users,
    progress: [50, 30, 70, 20],
  },
];

export default function OperatorDashboardPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
        {operatorModules.map(
          ({ label, description, stats, path, icon: Icon, progress }) => (
            <NavLink key={path} to={path} className="block">
              <Card className="p-6 rounded-xl cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition hover:bg-blue-50/40 dark:hover:bg-blue-900/20">
                <CardContent className="flex flex-col gap-4 items-center">
                  <Icon
                    size={36}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{stats}</p>
                  <div className="flex gap-1 mt-2 w-full h-4 items-end">
                    {progress.map((val, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-500 dark:bg-blue-400 rounded-t"
                        style={{ height: `${val}%`, flex: 1 }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}
