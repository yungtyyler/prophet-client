"use client";

import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <aside
      className={`max-w-64 w-full bg-white shadow-md p-6 text-black${
        open ? " flex flex-col" : " hidden"
      } `}
    >
      <h1 className="text-xl font-bold mb-6">Prophet</h1>
      <nav className="flex flex-col space-y-4">
        <Link href="/teams" className="hover:text-blue-600">
          Teams
        </Link>
        <Link href="/games" className="hover:text-blue-600">
          Games
        </Link>
        <Link href="/odds" className="hover:text-blue-600">
          Odds
        </Link>
        <Link href="/predictions" className="hover:text-blue-600">
          Predictions
        </Link>
        <Link href="/users" className="hover:text-blue-600">
          Users
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
