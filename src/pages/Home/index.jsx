import HomeSlider from "../../components/HomeSlider";
import About from "../../components/About";
import PageContent from "../../components/PageContent";

export default function Home() {
    return(
        <div className="home">
            <PageContent slug="home" />
            <HomeSlider></HomeSlider>
            <About></About>
        </div>
    )
}