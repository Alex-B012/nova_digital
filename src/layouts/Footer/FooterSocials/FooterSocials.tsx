import { FooterSocial } from "../../../types/footer"
import "./footerSocials.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterSocialsProps {
   data: FooterSocial[];
}

function FooterSocials({ data }: FooterSocialsProps) {
   return (
      <div className="footer__socials">
         {data.map(item => (
            <a
               href={item.url}
               key={item.id}
               className="footer__socials-item"
               target="_blank"
               rel="noreferrer"
            >
               <FontAwesomeIcon className="footer__socials-icon" icon={item.icon} />
            </a>
         ))}
      </div>
   )
}

export default FooterSocials