import "./Menue.css";
import { Outlet, Link } from "react-router-dom";

function Menue() {
  return (
    <div className="conmenue">
      <>
        <Link className="conmenueLink" to="/info">
          ثبت کارت
        </Link>
        <Link className="conmenueLink" to="/transfer">
          انتقال وجه
        </Link>
        <Link className="conmenueLink" to="/tarakonesh">
          تراکنش ها
        </Link>
        <Outlet />
      </>
    </div>
  );
}

export default Menue;
