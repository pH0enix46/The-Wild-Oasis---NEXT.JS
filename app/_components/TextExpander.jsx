// // //
"use client";
import { useState } from "react";

export default function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-[var(--color-primary-700)] border-b border-[var(--color-primary-700)] leading-3 pb-1 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}
