import "./button.scss";

interface ButtonProps {
   text: string;
}

function Button({ text = "" }: ButtonProps) {
   return (
      <button className="head__btn">{text}</button>
   )
}

export default Button