import type { ReactNode } from "react";

interface CardWrapperProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  rightSection?: ReactNode;
}

export default function CardWrapper({
  title,
  icon,
  children,
  rightSection,
}: CardWrapperProps) {
  return (
    <div
      className="
        bg-white 
        border border-blue-100 
        shadow-lg 
        rounded-2xl 
        p-5 sm:p-6 
        transition-all

        dark:bg-[#1C2A3A]/50
        dark:border-white/10
        dark:shadow-none
        dark:text-white
      "
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="text-blue-600 dark:text-blue-300 flex items-center">
              {icon}
            </div>
          )}
          <h2 className="text-blue-700 dark:text-white text-xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>

        {rightSection && (
          <div className="flex-shrink-0 flex items-center dark:text-white">
            {rightSection}
          </div>
        )}
      </div>

      <div className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
}
