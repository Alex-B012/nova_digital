import { Link } from "react-router-dom";
import "./logo.scss";
import { logo } from "../../data/data";

type LogoProps = {
   logo_color?: "white" | "blue";
   cursor?: boolean;
};

function Logo({ logo_color = "white", cursor = true }: LogoProps) {
   let pointerClass = ""
   if (cursor === false) pointerClass = "noPointer"
   return (
      <div className="logo">
         <Link className={`logo__link ${pointerClass} `} to="/">
            <img className="logo__link-img" src={logo[logo_color]} alt="Logo" />
         </Link>
      </div>
   )
}

export default Logo