import "./Header.css";
import shaparak from "../assets/shaparak.png";
import behPardakhtMelat from "../assets/Behpardakht-Mellat-Logo-.png";
import headerImg from "../assets/InkedHeader.jpg";
import Menue from "./Menue";

function Header() {
  return (
    <div className="conHeaderPage">
      <div className="header">
        <div className="headRightLogo">
          <img src={shaparak}></img>
        </div>
        <div className="headCenter">
          <p>پرداخت اینترنتی به پرداخت ملت</p>
          <img src={headerImg}></img>
        </div>
        <div className="headLeftLogo">
          <img src={behPardakhtMelat}></img>
        </div>
      </div>
      <div className="menueHeader">
        <Menue />
      </div>
    </div>
  );
}

export default Header;
