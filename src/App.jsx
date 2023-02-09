import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Overlay from "./components/Overlay"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="app">
            <Overlay />
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}