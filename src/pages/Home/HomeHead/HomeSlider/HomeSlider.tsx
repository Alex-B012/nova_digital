import Slider from "react-slick";
import "./homeSlider.scss"
import SliderItem from "./SliderItem/SliderItem";

interface HomeSliderProps {
   data: {
      id: number;
      title: string;
      text: string;
   }[];
}

function HomeSlider({ data }: HomeSliderProps) {
   var settings = {
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
      <Slider {...settings} className="top-slider">
         {data.map(item => <SliderItem item_data={item} key={item.id} />)}
      </Slider>
   );
}

export default HomeSlider