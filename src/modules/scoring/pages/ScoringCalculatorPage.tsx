import React, { useState, useEffect } from "react";
import {
  Calculator,
  History,
  BarChart3,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { useScoringCalculator } from "../hooks/useScoringCalculator";
import { ScoringCalculator } from "../components/ScoringCalculator/ScoringCalculator";
import { ScoringHistoryCard } from "../components/ScoringCalculator/ScoringHistoryCard";
import { ScoreRange } from "../types/scoringCalculator.types";
import { getScoreRangeLabel } from "../utils/scoringCalculator.utils";
import { useTheme } from "../../../context/ThemeContext";

type TabType = "calculator" | "history" | "statistics";

export const ScoringCalculatorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("calculator");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    isCalculating,
    result,
    history,
    statistics,
    isLoadingHistory,
    isLoadingStatistics,
    error,
    calculateScore,
    fetchHistory,
    fetchStatistics,
    resetResult,
  } = useScoringCalculator();

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    fetchHistory();
    fetchStatistics();
  }, [fetchHistory, fetchStatistics]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeTab]);

  const tabs = [
    {
      id: "calculator" as TabType,
      label: "Calculator",
      icon: <Calculator className="w-4 h-4" />,
      description: "Tool interactiv",
    },
    {
      id: "history" as TabType,
      label: "Istoric",
      icon: <History className="w-4 h-4" />,
      description: "Calcule anterioare",
      badge: history.length,
    },
    {
      id: "statistics" as TabType,
      label: "Statistici",
      icon: <BarChart3 className="w-4 h-4" />,
      description: "Analiză date",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a]">
      {/* Mobile Header - with Back Button */}
      <div className="lg:hidden sticky top-0 z-30 bg-white dark:bg-[#172131] border-b border-gray-200 dark:border-[#233248] px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Back Button - Mobile */}
            <button
              onClick={() => window.history.back()}
              className="w-10 h-10 bg-gray-100 dark:bg-[#233248] hover:bg-gray-200 dark:hover:bg-[#2e3a4d] rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="w-10 h-10 bg-[#2e57e1] rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                Calculator Scoring
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Calculează scorul în timp real
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Dark/Light Mode Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 bg-gray-100 dark:bg-[#233248] hover:bg-gray-200 dark:hover:bg-[#2e3a4d] rounded-xl flex items-center justify-center transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            {/* Menu Toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-[#233248] rounded-lg transition-colors"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Header - Dark Mode with Back Button */}
          <div className="hidden lg:block mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                {/* Back Button - Desktop */}
                <button
                  onClick={() => window.history.back()}
                  className="w-12 h-12 bg-gray-100 dark:bg-[#233248] hover:bg-gray-200 dark:hover:bg-[#2e3a4d] rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="w-16 h-16 bg-[#2e57e1] rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Calculator Scoring
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Calculează și afișează scorul în timp real
                  </p>
                </div>
              </div>

              {/* Dark/Light Mode Toggle - Desktop */}
              <button
                onClick={toggleTheme}
                className="w-12 h-12 bg-gray-100 dark:bg-[#233248] hover:bg-gray-200 dark:hover:bg-[#2e3a4d] rounded-xl flex items-center justify-center transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] p-1 rounded-xl mb-4 sm:mb-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm transition-colors whitespace-nowrap relative flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-[#2e57e1] text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#233248]"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.slice(0, 4)}</span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="ml-1 px-1.5 sm:px-2 py-0.5 bg-[#2e57e1] text-white text-[10px] sm:text-xs rounded-full border border-[#2e57e1]">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content Grid - Dark Mode */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              {/* Calculator Tab */}
              {activeTab === "calculator" && (
                <div>
                  {/* Info Card */}
                  <div className="bg-[#2e57e1]/10 border border-[#2e57e1]/30 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2e57e1] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[#2e57e1] mb-1 text-sm sm:text-base">
                          Tool Interactiv de Scoring
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-words">
                          Introduceți salariul, cheltuielile și datoriile pentru
                          a calcula scorul automat. Scorul este calculat pe baza
                          ratei de îndatorare: (cheltuieli + datorii) / salariu.
                        </p>
                      </div>
                    </div>
                  </div>

                  <ScoringCalculator
                    onCalculate={calculateScore}
                    isCalculating={isCalculating}
                    result={result}
                    error={error}
                    onReset={resetResult}
                  />
                </div>
              )}

              {/* History Tab - Dark Mode */}
              {activeTab === "history" && (
                <div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <History className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-1 text-sm sm:text-base">
                          Istoric Calcule
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-words">
                          Toate calculele de scoring efectuate anterior. Click
                          pe un card pentru detalii.
                        </p>
                      </div>
                    </div>
                  </div>

                  {isLoadingHistory ? (
                    <div className="flex items-center justify-center py-12 bg-white dark:bg-[#172131] rounded-xl border border-gray-200 dark:border-[#233248]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#2e57e1] border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : history.length > 0 ? (
                    <div className="space-y-3 sm:space-y-4">
                      {history.map((entry) => (
                        <ScoringHistoryCard key={entry.id} entry={entry} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500 bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] rounded-xl">
                      <History className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" />
                      <p className="text-sm sm:text-base">
                        Nu există istoric de calcule
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Statistics Tab - Dark Mode */}
              {activeTab === "statistics" && (
                <div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-green-600 dark:text-green-400 mb-1 text-sm sm:text-base">
                          Statistici și Analiză
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-words">
                          Statistici globale despre toate calculele de scoring
                          efectuate.
                        </p>
                      </div>
                    </div>
                  </div>

                  {isLoadingStatistics ? (
                    <div className="flex items-center justify-center py-12 bg-white dark:bg-[#172131] rounded-xl border border-gray-200 dark:border-[#233248]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#2e57e1] border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : statistics ? (
                    <div className="space-y-4 sm:space-y-6">
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] rounded-xl p-3 sm:p-5">
                          <p className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                            Total calcule
                          </p>
                          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                            {statistics.totalCalculations}
                          </p>
                        </div>

                        <div className="bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] rounded-xl p-3 sm:p-5">
                          <p className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                            Scor mediu
                          </p>
                          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                            {statistics.averageScore.toFixed(1)}
                          </p>
                        </div>

                        <div className="bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] rounded-xl p-3 sm:p-5">
                          <p className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                            Rată eligibilitate
                          </p>
                          <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                            {statistics.eligibilityRate}%
                          </p>
                        </div>

                        <div className="bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] rounded-xl p-3 sm:p-5">
                          <p className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                            DTI mediu
                          </p>
                          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                            {(statistics.averageDebtRatio * 100).toFixed(1)}%
                          </p>
                        </div>
                      </div>

                      {/* Distribution */}
                      <div className="bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] rounded-xl p-4 sm:p-6">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
                          Distribuție pe categorii
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          {Object.entries(statistics.distributionByRange).map(
                            ([range, count]) => {
                              const percentage =
                                (count / statistics.totalCalculations) * 100;
                              const colorClass =
                                range === ScoreRange.VERY_HIGH ||
                                range === ScoreRange.HIGH
                                  ? "bg-green-500"
                                  : range === ScoreRange.MEDIUM
                                  ? "bg-yellow-500"
                                  : "bg-red-500";

                              return (
                                <div key={range}>
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                                      {getScoreRangeLabel(range as ScoreRange)}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                      {count} ({percentage.toFixed(1)}%)
                                    </span>
                                  </div>
                                  <div className="w-full h-1.5 sm:h-2 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                                    <div
                                      className={`h-full ${colorClass} transition-all`}
                                      style={{ width: `${percentage}%` }}
                                    />
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            {/* Sidebar - Dark Mode */}
            <div
              className={`
              order-1 lg:order-2 space-y-4 sm:space-y-6
              ${isSidebarOpen ? "block" : "hidden lg:block"}
            `}
            >
              {/* Formula Card */}
              <div className="bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] rounded-xl p-4 sm:p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-xs sm:text-sm flex items-center gap-2">
                  📐 Formula Scoring
                </h3>
                <div className="space-y-2 text-[10px] sm:text-xs">
                  <div className="bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-[#233248] rounded-lg p-2 sm:p-3 font-mono">
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      Rata îndatorare:
                    </p>
                    <p className="text-[#2e57e1] font-semibold text-[10px] sm:text-xs break-all">
                      (cheltuieli + datorii) / salariu
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-[#233248] rounded-lg p-2">
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                      Scor bazat pe rată:
                    </p>
                    <ul className="space-y-0.5 text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs">
                      <li>• &lt; 30% → Scor 85</li>
                      <li>• 30-40% → Scor 70</li>
                      <li>• 40-50% → Scor 55</li>
                      <li>• 50-60% → Scor 40</li>
                      <li>• &gt; 60% → Scor 25</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Color Legend */}
              <div className="bg-white dark:bg-[#172131] border border-gray-200 dark:border-[#233248] rounded-xl p-4 sm:p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-xs sm:text-sm flex items-center gap-2">
                  🎨 Bară Colorată
                </h3>
                <div className="space-y-2 text-[10px] sm:text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Roșu (0-40)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Galben (41-70)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Verde (71-100)
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              {result && (
                <div className="bg-gradient-to-br from-[#2e57e1] to-[#1e3a8a] rounded-xl p-4 sm:p-5 text-white border border-[#2e57e1]/50">
                  <h3 className="font-semibold mb-3 text-xs sm:text-sm">
                    ⚡ Ultimul Calcul
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-90">Scor:</span>
                      <span className="font-bold">{result.score}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-90">Status:</span>
                      <span className="font-bold">
                        {result.eligibil ? "✓ Eligibil" : "✗ Neeligibil"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoringCalculatorPage;
