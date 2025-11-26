import type { ScoringResult } from "../types/decision.types";
import { StatusBadge } from "./StatusBadge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

interface Props {
  data: ScoringResult;
}

export const DecisionCard = ({ data }: Props) => {
  const getIcon = () => {
    if (data.decision === "APPROVED")
      return <CheckCircle className="text-green-600 w-8 h-8" />;
    if (data.decision === "REJECTED")
      return <XCircle className="text-red-600 w-8 h-8" />;
    return <AlertTriangle className="text-yellow-600 w-8 h-8" />;
  };

  return (
    <Card className="w-full max-w-lg shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          {getIcon()}
          <CardTitle className="text-xl">Rezultat Evaluare</CardTitle>
        </div>
        <StatusBadge status={data.decision} />
      </CardHeader>

      <CardContent className="space-y-5 mt-2">
        <div className="text-center py-2 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Scor Calculat</p>
          <span className="text-4xl font-bold text-gray-800">{data.score}</span>
          <span className="text-gray-400 text-sm"> / 1000</span>
        </div>

        <div>
          <p className="font-semibold text-gray-700 text-sm mb-1">
            Sumar decizie:
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {data.summary}
          </p>
        </div>

        <Separator />

        {data.decision === "APPROVED" && data.maxAmount && (
          <div className="flex justify-between items-center bg-green-50 p-3 rounded-md border border-green-100">
            <span className="text-green-800 font-medium text-sm">
              Ofertă Maximă:
            </span>
            <span className="text-xl font-bold text-green-700">
              {data.maxAmount.toLocaleString()} {data.currency}
            </span>
          </div>
        )}

        {data.reasonCodes.length > 0 && (
          <div className="bg-red-50 p-4 rounded-md border border-red-100">
            <p className="font-semibold text-red-800 text-sm mb-2 flex items-center gap-2">
              <AlertTriangle size={16} /> Motive / Coduri Risc:
            </p>
            <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
              {data.reasonCodes.map((code, i) => (
                <li key={i}>{code}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="bg-gray-50/50 p-3 justify-between text-xs text-gray-400">
        <span>ID: {data.applicationId}</span>
        <span>{new Date(data.createdAt).toLocaleDateString()}</span>
      </CardFooter>
    </Card>
  );
};
