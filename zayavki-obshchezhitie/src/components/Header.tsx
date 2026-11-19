type HeaderProps = {
  newCount: number
}

function Header({ newCount }: HeaderProps) {
  return (
    <header className="header">
      <h1>Доска заявок и жалоб в общаге</h1>
      <p>Частное общежитие - заявки и жалобы жителей</p>
      <span className="header__count">Новых заявок: {newCount}</span>
    </header>
  )
}

export default Header