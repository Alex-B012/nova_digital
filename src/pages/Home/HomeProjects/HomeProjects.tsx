import "./homeProjects.scss"
import HomeProjectsItems from "./HomeProjectsItems/HomeProjectsItems"

function HomeProjects() {
   return (
      <section className="projects" id="projects_section_id">
         <div className="container">
            <h4 className="projects__title title">Our Projects</h4>
            <HomeProjectsItems />
         </div>
      </section>
   )
}

export default HomeProjects