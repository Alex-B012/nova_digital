import { Link } from "react-router-dom"
import { footer_data } from "../../data/data"
import { FooterData } from "../../types/footer"
import "./footer.scss"
import FooterLogo from "./FooterLogo/FooterLogo"
import FooterSocials from "./FooterSocials/FooterSocials"

function Footer({ data }: { data: FooterData }) {
   return (
      <footer className="footer">
         <FooterLogo cursor={false} />
         <div className="footer__promotext">
            {data.promo_text.map(item => <p className="footer__promotext-item" key={item.id}>{item.text}</p>)}
         </div>
         <FooterSocials data={footer_data.social} />
         <div className="footer__bottom">
            <div className="footer__bottom-contacts footer__bottom-item">
               <h4 className="footer__bottom-title">Contacts</h4>
               <p>{data.footer_bottom.contacts.email}</p>
               <p>{data.footer_bottom.contacts.phone}</p>
            </div>
            <div className="footer__bottom-address footer__bottom-item">
               <h4 className="footer__bottom-title">Address</h4>
               <p className="footer__bottom-address-items">
                  {data.footer_bottom.address.map((item, index) => (
                     <span className="footer__bottom-address-item" key={index}>
                        {item}{index < data.footer_bottom.address.length - 1 ? ",\u00A0" : ''}
                     </span>
                  ))}
               </p>
            </div>
            <div className="footer__bottom-help footer__bottom-item">
               <h4 className="footer__bottom-title">Help</h4>
               {data.footer_bottom.help.map(item => (
                  <Link className="footer__bottom-link" to={item.url} key={item.id}>{item.name}</Link>
               ))}
            </div>
            <div className="footer__bottom-menu footer__bottom-item">
               <h4 className="footer__bottom-title">Menu</h4>
               {data.footer_bottom.menu.map(item => (
                  <Link className="footer__bottom-link" to={item.url} key={item.id}>{item.name}</Link>
               ))}
            </div>
         </div>
         <p className="footer__text">{data.text}</p>
      </footer>
   )
}

export default Footer