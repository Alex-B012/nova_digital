import "./homeProjectsItems.scss"
import { projectItems_data } from "../../../../data/data"
import HomeProjectItem from "./HomeProjectItem/HomeProjectItem "

function HomeProjectsItems() {
   return (
      <div className="projects__items">
         {projectItems_data.map(item => <HomeProjectItem data={item} key={item.id} />)}
      </div>
   )
}

export default HomeProjectsItems