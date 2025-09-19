import "./home.scss";
import HomeCall from "./HomeCall/HomeCall";
import HomeHead from "./HomeHead/HomeHead";
import HomeProjects from "./HomeProjects/HomeProjects";
import HomeServices from "./HomeServices/HomeServices";
import HomeTeam from "./HomeTeam/HomeTeam";
import HomeNews from "./HomeNews/HomeNews";

import { team_data, news_data, digital_marketing_data } from '../../data/data'
import HomeQuote from "./HomeQuote/HomeQuote";

function Home() {
   return (
      <div className="homePage" style={{}}>
         <HomeHead />
         <HomeCall />
         <HomeServices />
         <HomeProjects />
         <HomeTeam data={team_data} />
         <HomeNews data={news_data} />
         <HomeQuote data={digital_marketing_data} />
      </div>
   )
}

export default Home