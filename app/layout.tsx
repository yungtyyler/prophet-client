import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Prophet",
  description: "Sports predictions dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
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

        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
