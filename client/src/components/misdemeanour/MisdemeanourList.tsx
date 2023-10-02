// components/MisdemeanourList.tsx
import React from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

interface MisdemeanourListProps {
  misdemeanours: Misdemeanour[] | null; // Handle the case where misdemeanours is null
}

const MisdemeanourList: React.FC<MisdemeanourListProps> = ({
  misdemeanours,
}) => {
  if (!misdemeanours) {
    return <div>Loading misdemeanours...</div>;
  }

  if (!Array.isArray(misdemeanours)) {
    return <div>Misdemeanours data is not an array.</div>;
  }

  if (misdemeanours.length === 0) {
    return <div>No misdemeanours found.</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Citizen ID</th>
          <th>Date</th>
          <th>Misdemeanour</th>
          <th>Punishment Idea</th>
        </tr>
      </thead>
      <tbody>
        {misdemeanours.map((m, index) => (
          <tr key={index}>
            <td>{m.citizenId}</td>
            <td>{m.date}</td>
            <td>
              {m.misdemeanour}{" "}
              {m.misdemeanour === "rudeness"
                ? "🤪"
                : m.misdemeanour === "lift"
                ? "🗣"
                : m.misdemeanour === "vegetables"
                ? "🥗"
                : m.misdemeanour === "united"
                ? "😈"
                : ""}
            </td>
            <td>{m.punishmentIdea}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MisdemeanourList;
