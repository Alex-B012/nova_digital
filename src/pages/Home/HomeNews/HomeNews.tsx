import "./homeNews.scss"
import { NewsItem } from "../../../types/home";
import HomeNewsItem from "./HomeNewsItem/HomeNewsItem";

function chunkArray<T>(array: T[], size: number): T[][] {
   const result: T[][] = [];
   for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
   }
   return result;
}

interface HomeNewsProps {

   data: {
      title: string;
      news: NewsItem[]
   };
}

const HomeNews: React.FC<HomeNewsProps> = ({ data }) => {
   const columns = chunkArray<NewsItem>(data.news, 2);
   return (
      <section className="homeNews">
         <div className="container">
            <h4 className="homeNews__title title">{data.title}</h4>
            <div className="homeNews__list">
               {columns.map((col, colIdx) => (
                  <div className="homeNews__column" key={colIdx}>
                     {col.map((item) => (
                        <HomeNewsItem key={item.id} title={item.title} img={item.img} />
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default HomeNews