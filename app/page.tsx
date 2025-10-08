import { Team } from "@/types";
import Image from "next/image";
import React from "react";

export default async function Home() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const teams: Team[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teams`, {
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
          const { id, abbreviation, city, conference, division, name, founded_year, logo_url } =
            team;
          const imgUrl = logo_url ? logo_url.toString() : "/nfl_logo.png";
          const year = founded_year ? founded_year.toString() : "Unknown";

          return (
            <li key={id} className="col-span-1 flex flex-col gap-2 items-center">
              <h2 className="text-lg font-bold text-center">{name}</h2>
              <div className="w-[100px] h-[100px] p-2 my-4">
                <Image
                  src={`${imgUrl}?size=100`}
                  alt={`${name} Logo`}
                  width={100}
                  height={100}
                  className="object-fill w-fit mx-auto"
                />
              </div>
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
}
