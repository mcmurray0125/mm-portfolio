import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Overlay from "./components/Overlay"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"

export default function App() {
    return (
        <div className="app">
            <Overlay />
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects />
        </div>
    )
}