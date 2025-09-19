
import { homeServices_data } from "../../../data/data"
import ServiceItems from "./ServiceItems/ServiceItems"
import ServicesHead from "./ServicesHead/ServicesHead"
import "./homeServices.scss"

function HomeServices() {
   return (
      <section className="services">
         <div className="container">
            <div className="services__inner">
               <ServicesHead data={homeServices_data.intro} />
               <ServiceItems data={homeServices_data.services} />
            </div>
         </div>
      </section>
   )
}

export default HomeServices