import { Link } from "react-router-dom"
import { ServiceItem } from "../../../../types/home"
import "./serviceItems.scss"

interface ServiceItemsProps {
   data: ServiceItem[]
}

function ServiceItems({ data }: ServiceItemsProps) {
   return (
      <div className="services__items">
         {data.map((item) => (
            <div key={item.id} className="services__item">
               <div className="services__item-inner">
                  <img
                     className="services__item-img"
                     src={item.img}
                     alt={item.title}
                  />
                  <h6 className="services__item-title">{item.title}</h6>
                  <p className="services__item-text">{item.text}</p>
                  <Link className="services__item-link" to="#services__head">
                     More Details
                  </Link>
               </div>
            </div>
         ))}
      </div>
   )
}

export default ServiceItems