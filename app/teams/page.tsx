import Image from "next/image";
import React from "react";

type NFLTeam = {
  id: number; // primary key
  name: string; // e.g. "Cowboys"
  city: string; // e.g. "Dallas"
  abbreviation: string; // e.g. "DAL"
  conference: string; // e.g. "NFC"
  division: string; // e.g. "East"
  establishedYear?: number; // optional, if in table
  logoUrl?: string; // optional, if stored
};

const TeamsPage = async () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const teams: NFLTeam[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teams`, {
    cache: "no-store",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch teams.");
    }
    return res.json();
  });

  return (
    <div className="flex flex-col gap-4 max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-4">All the teams in the NFL</h1>
      <ul className="grid grid-cols-4 gap-4">
        {teams.map((team) => {
          const { id, abbreviation, city, conference, division, name, establishedYear, logoUrl } =
            team;

          return (
            <li key={id}>
              <h2 className="text-lg font-bold">{name}</h2>
              <div className="flex flex-col justify-center gap-2">
                <p>Team Code: {abbreviation}</p>
                <p>City: {city}</p>
                <p>Conferene: {conference}</p>
                <p>Division: {division}</p>
                <p>Year Established: {establishedYear}</p>
              </div>
              <Image src={logoUrl || "/nfl_logo.svg"} alt={`${name} Logo`} width={50} height={50} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamsPage;
