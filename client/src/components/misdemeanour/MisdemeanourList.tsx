import React from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
interface MisdemeanourListProps {
  misdemeanours: Misdemeanour[];
}

const MisdemeanourList: React.FC<MisdemeanourListProps> = ({
  misdemeanours,
}) => {
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
        {misdemeanours.map((misdemeanour) => (
          <tr key={misdemeanour.id}>
            <td>{misdemeanour.citizenId}</td>
            <td>{misdemeanour.date}</td>
            <td>
              {misdemeanour.misdemeanour}{" "}
              {misdemeanour.misdemeanour === "Mild Public Rudeness" && "🤪"}
              {misdemeanour.misdemeanour === "Speaking in a Lift" && "🗣"}
              {misdemeanour.misdemeanour === "Not Eating Your Vegetables" &&
                "🥗"}
              {misdemeanour.misdemeanour === "Supporting Manchester United" &&
                "😈"}
            </td>
            <td>Punishment Idea Here</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MisdemeanourList;
