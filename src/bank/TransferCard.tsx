import React, { useState, useEffect } from "react";
import "./TransferCard.css";
import melat from "../assets/bankLogo/mellat.png";
import meli from "../assets/bankLogo/melli - www-tejiran-ir.png";
import saderat from "../assets/bankLogo/saderat - www-tejiran-ir.png";
import eni from "../assets/bankLogo/eghtesad - www-tejiran-ir.png";
import maskan from "../assets/bankLogo/maskan.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addTrasaction, reduceValue, tarakoneshType } from "./cardSlice";

function TransferCard() {
  const [valShCard, setValShCard] = useState("");
  const [srcImgmaghsad, setSrcImgmaghsad] = useState("");
  const [valmaghsad, setMaghsad] = useState("");
  const [valmablagh, setMablagh] = useState(0);

  const dispatch = useDispatch();
 
  const selectedCard = useSelector(
    (state: RootState) => state.cardSlice.selectedCard
  );

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeShMaghsad = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setMaghsad(e.target.value);
    }
  };

  const handleChangeMablagh = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setMablagh(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    let checkShmaghsad = String(valmaghsad);
    checkShmaghsad = checkShmaghsad.slice(0, 4);
    switch (checkShmaghsad) {
      case "6104":
        setSrcImgmaghsad(melat);
        break;
      case "6037":
        setSrcImgmaghsad(meli);
        break;
      case "6276":
        setSrcImgmaghsad(saderat);
        break;
      case "6280":
        setSrcImgmaghsad(maskan);
        break;
      case "6274":
        setSrcImgmaghsad(eni);
        break;
      default:
        setSrcImgmaghsad("");
        break;
    }
  }, [valmaghsad]);

  return (
    <div className="trasfer">
      <div className="upCartTrasfer">
        <div className="labelCartTrasfer">
          <p>انتقال وجه</p>
        </div>
      </div>
      <div className="conCartTrasfer">
        <div className="txtsTrasfer">
          <p className="titlesTrasfer"> شماره کارت مبدا </p>
          <p className="desTrasfer">شماره کارت مبدا را وارد نمایید.</p>
          <p className="titlesTrasfer">شماره شناسایی دوم</p>
          <p className="desTrasfer">
            شماره ۳ یا ۴ رقمی درج شده روی کارت را وارد نمایید
          </p>
          <p className="titlesTrasfer">تاریخ انقضای کارت</p>
          <p className="desTrasfer">تاریخ انقضای کارت را وارد نمایید</p>
          <p className="titlesTrasfer"> مبلغ </p>
          <p className="desTrasfer"> مبلغ موردنظر خود را وارد نمایید </p>
          <p className="titlesTrasfer">شماره کارت مقصد </p>
          <p className="desTrasfer"> شماره کارت مقصد را وارد نمایید</p>
        </div>
        <div className="inputsTrasfer">
          <input
            type="text"
            required={true}
            maxLength={16}
            value={selectedCard.shomareCart}
            className="bigInputTrasfer"
          ></input>
          <input
            maxLength={4}
            required={true}
            value={selectedCard.cvv2}
            className="bigInputTrasfer"
          ></input>
          <div className="conInpDateTrasfer">
            <input
              required={true}
              maxLength={2}
              value={selectedCard.month}
              className="smallInputTrasfer"
              placeholder="ماه"
            ></input>
            <p></p>
            <input
              required={true}
              maxLength={2}
              value={selectedCard.year}
              className="smallInputTrasfer"
              placeholder="سال"
            ></input>
          </div>
          <input
            required={true}
            maxLength={3}
            value={valmablagh}
            onChange={handleChangeMablagh}
            className="bigInputTrasfer"
          ></input>
          <input
            maxLength={16}
            value={valmaghsad}
            onChange={handleChangeShMaghsad}
            className="bigInputTrasfer"
          ></input>
        </div>
        <div className="imgLogoLeftTrasfer">
          {selectedCard.adressImg !== "" && (
            <img src={selectedCard.adressImg} />
          )}
          {srcImgmaghsad !== "" && <img src={srcImgmaghsad} />}
        </div>
      </div>
      <div className="downCartTrasfer">
        <div className="conCartBtnTrasfer">
          <button
            onClick={() => {
              if (selectedCard.mojodi >= valmablagh) {
                
                let nawTarakonesh: tarakoneshType = {
                  cartMabda: selectedCard.shomareCart,
                  cartMaghsad: valmaghsad,
                  mablagh: valmablagh,
                  idTrakonesh: Math.floor(Math.random() * 100000),
                };
                console.log(nawTarakonesh);
                dispatch(addTrasaction(nawTarakonesh));
                dispatch(reduceValue(valmablagh));

                // resetValue();
              } else {
                alert("موجودی کافی نیست!");
                // resetValue();
              }
            }}
            className="bigBtn"
          >
            انتقال
          </button>
          <button onClick={() => {}} className="smallBtn">
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransferCard;
