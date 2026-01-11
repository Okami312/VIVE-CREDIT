// src/modules/scoring/components/ScoringHistoryCard.tsx

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import type { ScoringHistory } from "@modules/scoring/types/scoringCalculator.types";
import {
  getScoreIcon,
  getEligibilityIcon,
  getScoreRangeLabel,
  formatRON,
  getScoreColorClass,
} from "@modules/scoring/utils/scoringCalculator.utils";
import type { ScoreRange } from "@modules/scoring/types/scoringCalculator.types";

export interface ScoringHistoryCardProps {
  data: ScoringHistory; // Add this property
  isDarkMode: boolean;
  onSelect: () => void;
}

// Ensure the component uses the updated props
const ScoringHistoryCard: React.FC<ScoringHistoryCardProps> = ({
  data,
  isDarkMode,
  onSelect,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${
        isDarkMode ? "bg-[#1e293b] text-white" : "bg-gray-50 text-gray-800"
      }`}
      onClick={onSelect}
    >
      <h3 className="text-lg font-semibold">{data.title}</h3>
      <p className="text-sm">{data.description}</p>

      {/* Header - Dark Mode */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 sm:p-5 flex items-center justify-between hover:bg-[#1a2538] transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
              data.result.eligibil ? "bg-green-500/20" : "bg-red-500/20"
            }`}
          >
            {getScoreIcon(data.result.scoreRange as ScoreRange)}{" "}
            {/* Type assertion */}
          </div>
          <div className="text-left">
            {data.clientName && (
              <p className="font-semibold text-white text-sm sm:text-base">
                {data.clientName}
              </p>
            )}
            {data.clientId && (
              <p className="text-xs sm:text-sm text-gray-400">
                {data.clientId}
              </p>
            )}
            {!data.clientName && !data.clientId && (
              <p className="text-xs sm:text-sm text-gray-400">Calcul anonim</p>
            )}
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 mt-1">
              <Calendar className="w-3 h-3" />
              <span>{data.calculatedAt}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="text-right">
            <p className="text-xl sm:text-2xl font-bold text-white">
              {data.result.score}
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400">
              {getScoreRangeLabel(data.result.scoreRange as ScoreRange)}
            </p>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
          )}
        </div>
      </button>

      {/* Expanded Content - Dark Mode */}
      {isExpanded && (
        <div className="border-t border-[#233248]">
          {/* Input Data - Dark Mode */}
          <div className="p-4 sm:p-5 bg-[#0f172a]">
            <h4 className="font-semibold text-white mb-3 text-xs sm:text-sm">
              Date introduse
            </h4>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                  Salariu
                </p>
                <p className="font-semibold text-white text-xs sm:text-sm">
                  {formatRON(data.input.salariu)}
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                  Cheltuieli
                </p>
                <p className="font-semibold text-white text-xs sm:text-sm">
                  {formatRON(data.input.cheltuieli)}
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                  Datorii
                </p>
                <p className="font-semibold text-white text-xs sm:text-sm">
                  {formatRON(data.input.datorii)}
                </p>
              </div>
            </div>
          </div>

          {/* Results - Dark Mode */}
          <div className="p-4 sm:p-5 space-y-3">
            {/* Score Bar - Dark Mode */}
            <div
              className={`p-3 sm:p-4 rounded-xl border ${
                data.result.scoreColor === "GREEN"
                  ? "bg-green-500/10 border-green-500/30"
                  : data.result.scoreColor === "YELLOW"
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-red-500/10 border-red-500/30"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  Scor Final
                </span>
                <span className="text-lg sm:text-xl font-bold text-white">
                  {data.result.score}
                </span>
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-[#0f172a] rounded-full overflow-hidden">
                <div
                  className={`h-full ${getScoreColorClass(
                    data.result.scoreColor
                  )} transition-all rounded-full`}
                  style={{ width: `${data.result.score}%` }}
                />
              </div>
            </div>

            {/* Eligibility - Dark Mode */}
            <div
              className={`p-3 rounded-xl flex items-center gap-2 sm:gap-3 ${
                data.result.eligibil
                  ? "bg-green-500/10 border border-green-500/30"
                  : "bg-red-500/10 border border-red-500/30"
              }`}
            >
              {getEligibilityIcon(data.result.eligibil)}
              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium text-xs sm:text-sm ${
                    data.result.eligibil ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {data.result.eligibil ? "Eligibil ✓" : "Neeligibil"}
                </p>
                {data.result.sumaMaximaCredit && (
                  <p className="text-[10px] sm:text-xs text-green-300 mt-0.5 break-words">
                    Max: {formatRON(data.result.sumaMaximaCredit)}
                  </p>
                )}
              </div>
            </div>

            {/* Explanation - Dark Mode */}
            <div className="text-xs sm:text-sm text-gray-400 bg-[#0f172a] border border-[#233248] p-3 rounded-lg leading-relaxed break-words">
              {data.result.explicatie}
            </div>

            {/* Additional Info - Dark Mode */}
            <div className="pt-3 border-t border-[#233248]">
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                <span>
                  Rată îndatorare:{" "}
                  <span className="text-gray-300 font-medium">
                    {(data.result.rataIndatorare * 100).toFixed(1)}%
                  </span>
                </span>
                <span>
                  Calculat de:{" "}
                  <span className="text-gray-300 font-medium">
                    {data.calculatedBy}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoringHistoryCard;
