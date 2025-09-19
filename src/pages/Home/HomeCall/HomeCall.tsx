import CallButton from "../../../components/ButtonWhite/CallButton";
import "./homeCall.scss";
import { callPromo_data } from "../../../data/data"

function HomeCall() {
   return (
      <section className="call">
         <div className="container">
            <div className="call__inner">
               <div className="call__box">
                  <h5 className="call__title">
                     {callPromo_data.title}
                  </h5>
                  <p className="call__text">
                     {callPromo_data.text}
                  </p>
               </div>
               <CallButton text={callPromo_data.btn_text} />
            </div>
         </div>
      </section>
   )
}

export default HomeCall