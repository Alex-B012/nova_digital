import "./callButton.scss";

interface CallButtonProps {
   text: string;
}

function CallButton({ text = "" }: CallButtonProps) {
   return (
      <button className="call__btn">{text}</button>
   )
}

export default CallButton