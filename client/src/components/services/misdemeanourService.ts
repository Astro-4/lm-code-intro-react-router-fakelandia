import { Misdemeanour } from "../types/misdemeanours.types";

const fetchMisdemeanours = async (amount: number): Promise<Misdemeanour[]> => {
  const response = await fetch(
    `http://localhost:8080/api/misdemeanours/${amount}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch misdemeanours");
  }
  const data = await response.json();
  console.log("Fetched misdemeanours:", data); // Add this line
  return data;
};
export default fetchMisdemeanours;
