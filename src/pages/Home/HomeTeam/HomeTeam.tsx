import './homeTeam.scss'
import HomeTeamButton from './HomeTeamButton/HomeTeamButton';

interface HomeTeamProps {
   data: {
      title: string;
      text: string[];
      img: string;
      btn_text: string;
   };
}

function HomeTeam({ data }: HomeTeamProps) {
   return (
      <section className="team">
         <div className="container">
            <div className="team__inner">
               <img className="team__images" src={data.img} alt="Team" />
               <div className="team__content">
                  <h4 className="team__title title">{data.title}</h4>
                  <div className="team__text">
                     {data.text.map((item, index) => (
                        <p key={index} className="team__paragraph">
                           {item}
                        </p>
                     ))}
                  </div>
               </div>
               <HomeTeamButton text={data.btn_text} />
            </div>
         </div>
      </section>
   )
}

export default HomeTeam