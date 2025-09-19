import "./servicesHead.scss"
interface ServicesHeadProps {
   data: {
      title: string;
      descr: string;
      text: string;
   };
}

function ServicesHead({ data }: ServicesHeadProps) {
   return (
      <div className="services__head" id="services__head">
         <h4 className="services__title title">{data.title}</h4>
         <p className="services__descr">
            {data.descr}
         </p>
         <p className="services__text">
            {data.text}
         </p>
      </div>
   )
}

export default ServicesHead