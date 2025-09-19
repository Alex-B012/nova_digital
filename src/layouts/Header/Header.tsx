import Logo from "../../components/Logo/Logo"
import "./header.scss"

function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <div className="logo">
                  <Logo />
               </div>
               <nav className="menu">
                  <button className="menu__btn"></button>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header