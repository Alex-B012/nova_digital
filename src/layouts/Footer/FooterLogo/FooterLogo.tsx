import Logo from "../../../components/Logo/Logo"
import "./footerLogo.scss"

interface FooterLogoProps {
   cursor?: boolean;
}

function FooterLogo({ cursor = true }: FooterLogoProps) {
   return (
      <div className="footer__logoArea">
         <Logo cursor={cursor} />
      </div>
   )
}

export default FooterLogo