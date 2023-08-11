import "./ShowCards.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { clickOnCard, findFillTransfer, infoCartType } from "./cardSlice";


function ShowCart() {

  const dispatch = useDispatch()

  const arrayCards = useSelector((state: RootState)=> state.cardSlice.arrCards)
  
 
  return (
    <div className="conPazirande">
      {arrayCards.map((item : infoCartType, index: number) => {
        return (
          <div className="pazirande" key={index}>
            <div
              className="pazirandeCart"
              onClick={() => {
               dispatch(findFillTransfer(item))
              }}
            >
              <p className="shomareCart">{item.shomareCart}</p>
              <p className="nameCart">{item.name}</p>
              <p className="mojodiCart"> موجودی : {item.mojodi}</p>
              <div className="downCartPazirande">
                <div className="tarikhPazirande">
                  <p>{item.month}</p>
                  <p>/</p>
                  <p>{item.year}</p>
                </div>
                <div className="cvv2Pazirande">
                  <p>cvv2 : {item.cvv2}</p>
                </div>
                <div className="logoBank">
                  <img src={item.adressImg} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowCart;
