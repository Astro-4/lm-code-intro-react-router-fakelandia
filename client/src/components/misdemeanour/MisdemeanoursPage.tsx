import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourList from "./MisdemeanourList";
import Dropdown from "./Dropdown";

const MisdemeanoursPage: React.FC = () => {
  const { data, isFetching } = useFetch<{ misdemeanours: Misdemeanour[] }>(
    "http://localhost:8080/api/misdemeanours/10"
  );
  const [selectedType, setSelectedType] = useState<string | null>(null);
  if (isFetching) {
    return <div>Loading misdemeanours...</div>;
  }

  if (
    !data ||
    !Array.isArray(data.misdemeanours) ||
    data.misdemeanours.length === 0
  ) {
    return <div>No misdemeanours found.</div>;
  }

  const handleTypeChange = (type: string | null) => {
    setSelectedType(type);
  };

  const filteredMisdemeanours = selectedType
    ? data.misdemeanours.filter(
        (misdemeanour) => misdemeanour.misdemeanour === selectedType
      )
    : data.misdemeanours;

  return (
    <div>
      <Dropdown
        options={["rudeness", "lift", "vegetables", "united"]}
        selected={selectedType}
        onSelect={handleTypeChange}
      />
      <MisdemeanourList misdemeanours={filteredMisdemeanours} />
    </div>
  );
};

export default MisdemeanoursPage;
