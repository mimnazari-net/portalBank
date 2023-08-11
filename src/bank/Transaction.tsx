import "./Transaction.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { tarakoneshType } from "./cardSlice";
function Transaction() {
  const ArrayTrasaction = useSelector(
    (state: RootState) => state.cardSlice.arrTrasaction
  );
  const witchCard = useSelector(
    (state: RootState) => state.cardSlice.selectedCard.shomareCart
  );

  return (
    <div className="tarakonesh">
      <div className="contarakonesh">
        <div className="upConTarakonesh">
          <div className="labelCartTarakonesh">
            <p> تراکنش ها </p>
          </div>
        </div>
        <div className="showItems">
          {ArrayTrasaction.map((item: tarakoneshType, index: number) => {
            if (witchCard === item.cartMabda) {
              return (
                <div key={index} className="tarakoneshItem">
                  <p>کارت مبدا: {item.cartMabda}</p>
                  <p>کارت مقصد: {item.cartMaghsad}</p>
                  <p>مبلغ: {item.mablagh} </p>
                  <p>شماره پیگیری: {item.idTrakonesh} </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Transaction;
