import "./MainView.scss";
import Button from "../Button/Button";
import DarkLogo from "../../assets/logo-dark.svg";
import HeroDesktop from "../../assets/image-hero-desktop@2x.webp";
export default function MainView() {
    return (
        <div className="main-container">
            <header>
                <nav className="nav">
                    <img src={DarkLogo} alt="" />
                    <Button text="Get Started" />
                </nav>
                <div className="header">
                    <div className="details">
                        <h1 className="heading-xl">
                            Maximize skill, minimize budget
                        </h1>
                        <p className="p-m">
                            Our modern courses across a range of in-demand
                            skills will give you the knowledge you need to live
                            the life you want.
                        </p>
                        <Button text="Get Started" secondary />
                    </div>
                    <div className="image">
                        <img
                            src={HeroDesktop}
                            alt=""
                            className="image-desktop"
                        />
                    </div>
                </div>
            </header>
        </div>
    );
}
