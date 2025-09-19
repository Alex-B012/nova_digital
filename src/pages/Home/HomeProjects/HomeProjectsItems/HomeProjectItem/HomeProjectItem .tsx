import './homeProjectItem.scss';
import { icons } from "../../../../../data/icons"
import { Link } from 'react-router-dom';

interface HomeProjectItemProps {
   data: {
      id: number;
      title: string;
      img: string;
   };
}

function HomeProjectItem({ data }: HomeProjectItemProps) {
   return (
      <div className="projects__item">
         <div
            className="projects__item-img"
            style={{ backgroundImage: `url(${data.img})` }}
         >
            <div className="projects__item-inner">
               <Link className="projects__item-info" to={""}>
                  <img
                     className="projects__item-icon"
                     src={icons.circle_info_solid_full}
                     alt="Info"
                  />
               </Link>
               <Link className="projects__item-search" to={""}>
                  <img
                     className="projects__item-icon"
                     src={icons.magnifying_glass_solid_full}
                     alt="Search"
                  /></Link>
            </div>
         </div>
         <a className="projects__item-link" href="#projects_section_id">
            {data.title}
         </a>
      </div >
   )
}

export default HomeProjectItem 