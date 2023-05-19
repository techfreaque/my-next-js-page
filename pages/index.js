import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/Hero/Hero";
import MyServices from "../components/MyServices";
import Projects from "../components/Projects";
import Resume from "../components/Resume/Resume";


export default function Home({isMobile}) {
    return (
        <>
            <Hero/>
            <MyServices />
            <AboutMe isMobile={isMobile} /> 
            <Projects/>
            <Resume isMobile={isMobile} />

        </>
    )
}
