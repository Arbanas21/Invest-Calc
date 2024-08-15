import HeaderImg from "../assets/investment-calculator-logo.png"
import "../index.css"

export default function Header(){
    return (
        <header id="header">
            <img src= {HeaderImg} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}