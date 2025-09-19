import "./homeQuote.scss"
import { digital_marketing_data } from "../../../data/data"
import HomeQuoteSlider from "./HomeQuoteSlider/HomeQuoteSlider"
import { HomeQuoteItem } from "../../../types/home";

interface HomeQuoteProps {
   data: HomeQuoteItem[];
}

function HomeQuote({ data }: HomeQuoteProps) {
   return (
      <div className="homeQuote">
         <HomeQuoteSlider data={digital_marketing_data} />
      </div>
   )
}

export default HomeQuote