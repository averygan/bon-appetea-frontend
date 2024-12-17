import React from 'react';
import { HiPercentBadge } from "react-icons/hi2";

function Badge({ text }) {
  return (
    <span className="inline-flex items-center">
      <p className="bg-[#F70170] text-white py-[4px] px-[8px] rounded-lg text-sm font-semibold flex items-center gap-1 leading-none">
        <HiPercentBadge className="text-sm" />
        <span className="text-sm">{text}</span>
      </p>
    </span>
  );
}

export default Badge;
