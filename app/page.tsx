import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <h1>Invoicify</h1>
      <p>
        <Link href={"/dashboard"}>Sign In</Link>
      </p>
    </main>
  );
}
