import "./MainView.scss";
import Button from "../Button/Button";
import DarkLogo from "../../assets/logo-dark.svg";
import HeroDesktop from "../../assets/image-hero-desktop@2x.webp";
import HeroTablet from "../../assets/image-hero-tablet@2x.webp";
import HeroMobile from "../../assets/image-hero-mobile@2x.webp";
import cardContents from "../contants";
import Card from "../Card/Card";
export default function MainView() {
    const cards = cardContents;
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
                        <img src={HeroTablet} alt="" className="image-tablet" />
                        <img src={HeroMobile} alt="" className="image-mobile" />
                    </div>
                </div>
            </header>
            <main>
                <div className="cards-grid">
                    {cards.map((card) => (
                        <Card
                            key={card.title}
                            type={card.type}
                            title={card.title}
                            content={card.content}
                            actionText={card.actionText}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
