// src/modules/scoring/pages/ScoringCalculatorPage.tsx

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
import { ScoringCalculator } from "@modules/scoring/components/ScoringCalculator/ScoringCalculator";
import ScoringHistoryCard from "@modules/scoring/components/ScoringCalculator/ScoringHistoryCard";
import { ScoreRange } from "../types/scoringCalculator.types";
import { getScoreRangeLabel } from "../utils/scoringCalculator.utils";

type TabType = "calculator" | "history" | "statistics";

export const ScoringCalculatorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("calculator");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for the saved theme preference
    return localStorage.getItem("theme") === "dark";
  });

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

  useEffect(() => {
    fetchHistory();
    fetchStatistics();
  }, [fetchHistory, fetchStatistics]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeTab]);

  // Apply the theme class to the root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

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
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-[#0f172a] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Mobile Header */}
      <div
        className={`lg:hidden sticky top-0 z-30 ${
          isDarkMode
            ? "bg-[#172131] border-[#233248]"
            : "bg-gray-100 border-gray-300"
        } border-b px-4 py-3`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className={`w-10 h-10 ${
                isDarkMode
                  ? "bg-[#233248] hover:bg-[#2e3a4d]"
                  : "bg-gray-200 hover:bg-gray-300"
              } rounded-xl flex items-center justify-center transition-colors`}
            >
              <svg
                className={`w-5 h-5 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
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
            <div
              className={`w-10 h-10 ${
                isDarkMode ? "bg-[#2e57e1]" : "bg-blue-500"
              } rounded-xl flex items-center justify-center`}
            >
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1
                className={`text-lg font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Calculator Scoring
              </h1>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Calculează scorul în timp real
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-10 h-10 ${
                isDarkMode
                  ? "bg-[#233248] hover:bg-[#2e3a4d]"
                  : "bg-gray-200 hover:bg-gray-300"
              } rounded-xl flex items-center justify-center transition-colors`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
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
                  className="w-5 h-5 text-gray-700"
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
              className="p-2 hover:bg-[#233248] rounded-lg transition-colors"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5 text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-400" />
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
                  className="w-12 h-12 bg-[#233248] hover:bg-[#2e3a4d] rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-300"
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
                  <h1 className="text-3xl font-bold text-white">
                    Calculator Scoring
                  </h1>
                  <p className="text-gray-400">
                    Calculează și afișează scorul în timp real
                  </p>
                </div>
              </div>

              {/* Dark/Light Mode Toggle - Desktop */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-12 h-12 bg-[#233248] hover:bg-[#2e3a4d] rounded-xl flex items-center justify-center transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
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
                    className="w-6 h-6 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Tabs - Mobile and Desktop */}
          <div className="mb-4">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-w-[120px] py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out mr-2 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.label}</span>
                  {tab.badge !== undefined && (
                    <span
                      className={`ml-auto inline-flex items-center justify-center w-3 h-3 rounded-full text-xs font-semibold ${
                        activeTab === tab.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content */}
          <div>
            {activeTab === "calculator" && (
              <ScoringCalculator
                isCalculating={isCalculating}
                result={result}
                error={error}
                onCalculate={calculateScore}
                onReset={resetResult}
              />
            )}
            {activeTab === "history" && (
              <div>
                {isLoadingHistory ? (
                  <p className="text-center text-gray-500">
                    Se încarcă istoric...
                  </p>
                ) : history.length === 0 ? (
                  <p className="text-center text-gray-500">
                    Nu există calcule anterioare.
                  </p>
                ) : (
                  history.map((item, index) => (
                    <ScoringHistoryCard
                      key={index}
                      data={item} // Ensure `item` matches the `ScoringHistory` type
                      isDarkMode={isDarkMode}
                      onSelect={() => {
                        setActiveTab("calculator");
                        // Pre-fill the calculator with the selected history item
                      }}
                    />
                  ))
                )}
              </div>
            )}
            {activeTab === "statistics" && (
              <div>
                {isLoadingStatistics ? (
                  <p className="text-center text-gray-500">
                    Se încarcă statistici...
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Array.isArray(statistics) && statistics.map((stat, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                          isDarkMode
                            ? "bg-[#1e293b] text-white"
                            : "bg-gray-50 text-gray-800"
                        }`}
                      >
                        <h3 className="text-lg font-semibold mb-2">
                          {getScoreRangeLabel(stat.range as ScoreRange)}
                        </h3>
                        <p className="text-sm">
                          Scor mediu:{" "}
                          <span className="font-semibold">
                            {stat.averageScore}
                          </span>
                        </p>
                        <p className="text-sm">
                          Număr de calcule:{" "}
                          <span className="font-semibold">
                            {stat.calculationCount}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar - Mobile */}
      {isSidebarOpen && (
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity`}
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 w-64 h-full bg-white dark:bg-[#172131] shadow-lg p-4 transition-transform transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#2e57e1] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold">Calculator Scoring</h2>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 ease-in-out ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.label}</span>
                  {tab.badge !== undefined && (
                    <span
                      className={`ml-auto inline-flex items-center justify-center w-3 h-3 rounded-full text-xs font-semibold ${
                        activeTab === tab.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-auto">
              {/* Dark/Light Mode Toggle - Mobile */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full flex items-center gap-2 p-3 rounded-lg transition-all duration-300 ease-in-out bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
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
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
                <span className="text-sm font-medium">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoringCalculatorPage;
