import Header from "./header/page";
import Hero from "./hero/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Main content stage */}
      <main className="flex-1">
        <Hero />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}