// MisdemeanoursPage.tsx
import React, { useState, useEffect } from "react";
import fetchMisdemeanours from "../services/misdemeanourService";
import MisdemeanourList from "./MisdemeanourList";
import MisdemeanourFilter from "./MisdemeanourFilter";
import { Misdemeanour } from "../types/misdemeanours.types";

const MisdemeanoursPage: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
  const [filteredMisdemeanours, setFilteredMisdemeanours] = useState<
    Misdemeanour[]
  >([]);
  const misdemeanourOptions = [
    "All",
    "Mild Public Rudeness",
    "Speaking in a Lift",
    "Not Eating Your Vegetables",
    "Supporting Manchester United",
  ];
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const fetchMisdemeanoursData = async () => {
      try {
        const misdemeanourData = await fetchMisdemeanours(10); // Fetch 10 misdemeanours for example

        // Assuming misdemeanourData is an array of misdemeanours
        if (Array.isArray(misdemeanourData)) {
          setMisdemeanours(misdemeanourData);
          setFilteredMisdemeanours(misdemeanourData);
        } else {
          console.error(
            "Data fetched is not in the expected array format:",
            misdemeanourData
          );
        }
      } catch (error) {
        console.error("Error fetching misdemeanours:", error);
      }
    };

    fetchMisdemeanoursData();
  }, []);

  useEffect(() => {
    if (!Array.isArray(misdemeanours)) {
      console.error("Misdemeanours data is not an array:", misdemeanours);
      return;
    }

    if (filter === "All") {
      setFilteredMisdemeanours(misdemeanours);
    } else {
      const filteredData = misdemeanours.filter(
        (m) => m.misdemeanour === filter
      );
      setFilteredMisdemeanours(filteredData);
    }
  }, [filter, misdemeanours]);

  return (
    <div>
      <h2>Misdemeanours Page</h2>
      <MisdemeanourFilter
        misdemeanourOptions={misdemeanourOptions}
        onFilterChange={setFilter}
      />
      <MisdemeanourList misdemeanours={filteredMisdemeanours} />
    </div>
  );
};

export default MisdemeanoursPage;
