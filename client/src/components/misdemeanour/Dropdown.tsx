import React from "react";

interface DropdownProps {
  options: string[];
  selected: string | null;
  onSelect: (type: string | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelect }) => {
  return (
    <select
      value={selected || "All"}
      onChange={(e) =>
        onSelect(e.target.value === "All" ? null : e.target.value)
      }
    >
      {["All", ...options].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
