import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";      // ← sudah di-import, kita pakai
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
// import Head from "./components/Head.jsx"; // opsional

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* <Head title="Fransisco — Portfolio" description="React • Flask • NLP" /> */}
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>

        {/* ↓↓↓ Tambahkan section Skills di sini ↓↓↓ */}
        <section id="skills"><Skills /></section>

        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
