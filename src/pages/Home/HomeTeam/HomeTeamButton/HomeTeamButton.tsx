import "./homeTeamButton.scss"

function HomeTeamButton({ text }: { text: string }) {
   return (
      <div className="team__btn">{text}</div>
   )
}

export default HomeTeamButton