interface SliderItemProps {
   item_data: {
      title: string;
      text: string;
   };
}

function SliderItem({ item_data }: SliderItemProps) {
   return (
      <div className="top-slider__item">
         <h3 className="top-slider__title">{item_data.title}</h3>
         <p className="top-slider__text">
            {item_data.text}
         </p>
      </div>
   )
}

export default SliderItem