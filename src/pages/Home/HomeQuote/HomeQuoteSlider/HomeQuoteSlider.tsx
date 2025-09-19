import Slider from "react-slick";
import { HomeQuoteItem } from "../../../../types/home";
import "./homeQuoteSlider.scss"

interface HomeQuoteSliderProps {
   data: HomeQuoteItem[];
}


function HomeQuoteSlider({ data }: HomeQuoteSliderProps) {
   var settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 7000,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <Slider {...settings}>
         {data.map((item) => (
            <div className="homeQuote__item" key={item.id}>
               <p className="homeQuote__item-text">"{item.text}"</p>
               <h4 className="homeQuote__item-author">{item.author}</h4>
            </div>
         ))}
      </Slider>
   )
}

export default HomeQuoteSlider