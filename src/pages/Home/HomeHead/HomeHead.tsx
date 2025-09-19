import { homeSlider_data } from "../../../data/data"
import "./homeHead.scss"
import HomeSlider from "./HomeSlider/HomeSlider"
import Button from "../../../components/Button/Button"

function HomeHead() {
   return (
      <section className="head">
         <HomeSlider data={homeSlider_data} />
         <Button text="Discover More" />
      </section>
   )
}

export default HomeHead