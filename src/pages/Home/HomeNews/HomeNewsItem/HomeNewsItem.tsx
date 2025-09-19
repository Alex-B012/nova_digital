import { Link } from "react-router-dom";
import "./homeNewsItem.scss"

interface HomeNewsItemProps {
   title: string;
   img: string;
}

function HomeNewsItem({ title, img }: HomeNewsItemProps) {
   return (
      <Link className="homeNews__link" to={`/news/${title}`}>
         <div className="homeNews__item">
            <img src={img} alt={title} />
            <h3>{title}</h3>
         </div>
      </Link>
   )
}

export default HomeNewsItem