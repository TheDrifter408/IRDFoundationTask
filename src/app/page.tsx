import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen overflow-y-hidden">
    <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
