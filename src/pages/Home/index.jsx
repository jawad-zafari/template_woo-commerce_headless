import HomeSlider from "../../components/HomeSlider";
import About from "../../components/About";
import PageContent from "../../components/PageContent";

export default function Home() {
    return(
        <div className="home">
            <HomeSlider></HomeSlider>
            <PageContent slug="home" />
            <About></About>
        </div>
    )
}