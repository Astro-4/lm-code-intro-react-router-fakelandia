// components/MisdemeanourFilter.tsx
import React from "react";

interface MisdemeanourFilterProps {
  misdemeanourOptions: string[];
  onFilterChange: (filter: string) => void;
}

const MisdemeanourFilter: React.FC<MisdemeanourFilterProps> = ({
  misdemeanourOptions,
  onFilterChange,
}) => {
  return (
    <div>
      <label htmlFor="filter">Filter by Misdemeanour:</label>
      <select id="filter" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All</option>
        {misdemeanourOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MisdemeanourFilter;
