import React from "react";

const TrendIndicator = ({ percentage, isPositive }) => {
  return (
    <div className="relative w-24 h-16">
      {/* Curve Line */}
      <svg
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-6 left-0"
      >
        <path
          d="M0 40 Q 25 10, 50 30 T 100 20"
          stroke={isPositive ? "#FF7F7F" : "#34D399"} /* Red or Green based on trend */
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Percentage and Arrow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p
          className={`text-xs font-bold ${
            isPositive ? "text-red-500" : "text-green-500"
          }`}
        >
          {isPositive ? `+${percentage}%` : `-${percentage}%`}
        </p>
        <div
          className={`w-2 h-2 border-t-2 border-l-2 ${
            isPositive
              ? "border-red-500 rotate-45"
              : "border-green-500 -rotate-45"
          } mx-auto`}
        ></div>
      </div>
    </div>
  );
};

export default TrendIndicator;
