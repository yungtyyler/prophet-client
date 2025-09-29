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
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-8">
        {teams.map((team) => {
          const { id, abbreviation, city, conference, division, name, establishedYear, logoUrl } =
            team;
          const imgUrl = logoUrl ? logoUrl.toString() : "/nfl_logo.png";
          const year = establishedYear ? establishedYear.toString() : "Unknown";

          return (
            <li key={id} className="col-span-1 flex flex-col gap-2">
              <h2 className="text-lg font-bold text-center">{name}</h2>
              <Image
                src={imgUrl}
                alt={`${name} Logo`}
                width={50}
                height={50}
                className="max-w-[100px] w-full mx-auto"
              />
              <div className="flex flex-col gap-2 justify-start">
                <p>
                  <strong>Team Code:</strong> {abbreviation}
                </p>
                <p>
                  <strong>City:</strong> {city}
                </p>
                <p>
                  <strong>Conferene:</strong> {conference}
                </p>
                <p>
                  <strong>Division:</strong> {division}
                </p>
                <p>
                  <strong>Year Established:</strong> {year}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamsPage;
