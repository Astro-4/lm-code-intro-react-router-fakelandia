import React from "react";
import useFetch from "../hooks/useFetch";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourList from "./MisdemeanourList";

const MisdemeanoursPage: React.FC = () => {
  const { data, isFetching } = useFetch<{ misdemeanours: Misdemeanour[] }>(
    "http://localhost:8080/api/misdemeanours/10"
  );

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

  return <MisdemeanourList misdemeanours={data.misdemeanours} />;
};

export default MisdemeanoursPage;
