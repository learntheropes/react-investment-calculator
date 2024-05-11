import logo from '../assets/investment-calculator-logo.png'

export const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Money bag" />
      <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header;