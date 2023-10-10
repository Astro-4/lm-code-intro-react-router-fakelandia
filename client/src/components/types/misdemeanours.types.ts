export interface Misdemeanour {
  id: string;
  citizenId: string;
  date: string;
  misdemeanour: string; // This should probably be an enum for better type safety
}
