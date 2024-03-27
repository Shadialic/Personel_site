import './App.css';
import {useEffect} from "react";
import {NavBar, Home, Projects, Skills, Contact} from "./Sections";

function App() {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault()
        }

        document.addEventListener("contextmenu", handleContextMenu)

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu)
        }
    }, []);

    return (<>
        <NavBar/>
        <Home/>
        <Projects/>
        <Skills/>
        <Contact/>
    </>)
}

export default App
