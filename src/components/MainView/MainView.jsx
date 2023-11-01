import "./MainView.scss";
import Button from "../Button/Button";
import DarkLogo from "../../assets/logo-dark.svg";
export default function MainView() {
    return (
        <div className="main-container">
            <header>
                <nav className="nav">
                    <img src={DarkLogo} alt="" />
                    <Button text="Get Started" />
                </nav>
            </header>
        </div>
    );
}
