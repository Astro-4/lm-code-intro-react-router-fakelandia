import React from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
interface MisdemeanourListProps {
  misdemeanours: Misdemeanour[];
}

const MisdemeanourList: React.FC<MisdemeanourListProps> = ({
  misdemeanours,
}) => {
  const width = 100;
  const height = 100;
  return (
    <div>
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
            <tr>
              <td>{misdemeanour.citizenId}</td>
              <td>{misdemeanour.date}</td>
              <td>
                {misdemeanour.misdemeanour}{" "}
                {misdemeanour.misdemeanour === "rudeness" && "🤪"}
                {misdemeanour.misdemeanour === "lift" && "🗣"}
                {misdemeanour.misdemeanour === "vegetables" && "🥗"}
                {misdemeanour.misdemeanour === "united" && "😈"}
              </td>
              {/* <td>Punishment Idea Here</td> */}
              <td>
                <img
                  src={`https://picsum.photos/${width}/${height}?random=${misdemeanour.citizenId}`}
                  alt={`Random punishment for misdemeanour ${misdemeanour.citizenId}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MisdemeanourList;
