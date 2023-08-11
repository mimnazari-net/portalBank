import React, { useEffect, useState } from "react";
import "./RegistrationCard.css";

import melat from "../assets/bankLogo/mellat.png";
import meli from "../assets/bankLogo/melli - www-tejiran-ir.png";
import saderat from "../assets/bankLogo/saderat - www-tejiran-ir.png";
import eni from "../assets/bankLogo/eghtesad - www-tejiran-ir.png";
import maskan from "../assets/bankLogo/tejarat - www-tejiran-ir.png";

import { useDispatch, useSelector } from "react-redux";
import { addCard, infoCartType, tarakoneshType } from "./cardSlice";
import { RootState } from "../store";

function RegistrationCard() {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cardSlice );

  const [valShC, setValShC] = useState("");
  const [valDM, setValDM] = useState(0);
  const [valDY, setValDY] = useState("");
  const [srcImg, setSrcImg] = useState("");
  const [valCVV, setValCVV] = useState("");
  const [valMojodi, setValMojodi] = useState(0);
  const [valName, setValName] = useState("");
  const [arrTrakonesh, setArrTrakonesh] = useState<Array<tarakoneshType>>([]);

  useEffect(() => {
    let checkShC = String(valShC);
    checkShC = checkShC.slice(0, 4);
    switch (checkShC) {
      case "6104":
        setSrcImg(melat);
        break;
      case "6037":
        setSrcImg(meli);
        break;
      case "6276":
        setSrcImg(saderat);
        break;
      case "6280":
        setSrcImg(maskan);
        break;
      case "6274":
        setSrcImg(eni);
        break;
      default:
        {
          setSrcImg("");
        }
        break;
    }
  }, [valShC]);

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeShC = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValShC(e.target.value);
    }
  };
  const handleChangeDM = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 12) {
        setValDM(parseInt(e.target.value));
      }
    }
  };

  const handleChangeDY = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValDY(e.target.value);
    }
  };

  const handleChangeCVV = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValCVV(e.target.value);
    }
  };

  const handleChangeMojodi = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValMojodi(parseInt(e.target.value));
    }
  };

  const handleChangeName = (e: InputEvent) => {
    const regex = /^[\u0600-\u06FF\s]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValName(e.target.value);
    }
  };


  let infoCart: infoCartType = {
    shomareCart: valShC,
    month: valDM,
    year: valDY,
    cvv2: valCVV,
    adressImg: srcImg,
    name: valName,
    mojodi: valMojodi,
    tarakonesCart: arrTrakonesh,
  };

  return (
    <div className="cartinfo">
      <div className="upCartInfo">
        <div className="labelCartInfo">
          <p>ثبت کارت</p>
        </div>
      </div>
      <div className="conCartInfo">
        <div className="txts">
          <p className="titles">شماره کارت</p>
          <p className="des">
            شماره کارت ۱۶ رقمی درج شده روی کارت را وارد نمایید.
          </p>
          <p className="titles">شماره شناسایی دوم</p>
          <p className="des">شماره ۳ یا ۴ رقمی درج شده روی کارت را وارد کنید</p>
          <p className="titles">تاریخ انقضای کارت</p>
          <p className="des">تاریخ انقضای کارت را وارد کنید</p>
          <p className="titles">موجودی کارت </p>
          <p className="des"> موجودی کارت خود را وارد نمایید </p>
          <p className="titles">نام و نام خانوادگی </p>
          <p className="des"> نام کامل صاحب کارت را وارد نمایید</p>
        </div>
        <div className="inputs">
          <input
            placeholder="xxxx-xxxx-xxxx-xxxx"
            name="card-number"
            type="text"
            required={true}
            maxLength={16}
            value={valShC}
            onChange={handleChangeShC}
            className="bigInput"
          ></input>
          <input
            minLength={3}
            maxLength={4}
            required={true}
            value={valCVV}
            onChange={handleChangeCVV}
            className="bigInput"
          ></input>
          <div className="conInpDate">
            <input
              required={true}
              minLength={2}
              maxLength={2}
              value={valDM}
              onChange={handleChangeDM}
              className="smallInput"
              placeholder="ماه"
            ></input>
            <p></p>
            <input
              required={true}
              minLength={2}
              maxLength={2}
              value={valDY}
              onChange={handleChangeDY}
              className="smallInput"
              placeholder="سال"
            ></input>
          </div>
          <input
            required={true}
            minLength={1}
            maxLength={3}
            value={valMojodi}
            onChange={handleChangeMojodi}
            className="bigInput"
          ></input>
          <input
            minLength={6}
            maxLength={25}
            value={valName}
            onChange={handleChangeName}
            className="bigInput"
          ></input>
        </div>
        <div className="imgLogoLeft">
          {srcImg !== "" && <img src={srcImg} />}
        </div>
      </div>
      <div className="downCartInfo">
        <div className="conCartBtn">
          <button
            onClick={() => {
              if (srcImg =="") {
                alert("کارت نامعتیر است");
                // resetValue();
              } else if (valShC === "") {
                alert("شماره کارت را وارد کنید.");
              } else if (valCVV === "") {
                alert("شماره شناسایی را وارد کنید.");
              } else if (valDM === 0) {
                alert("ماه تاریخ انقضا را وارد کنید.");
              } else if (valDY === "") {
                alert("سال تاریخ انقضا را وارد کنید.");
              } else if (valMojodi === 0) {
                alert("موجودی کارت را وارد کنید.");
              } else if (valName === "") {
                alert("نام صاحب کارت را وارد کنید.");
              } else {
                if (valShC.length !== 16) {
                  alert("شماره کارت وارد شده نامعتبر است.");
                  setValShC("");
                } else if (valCVV.length < 3) {
                  alert("شماره شناسایی دوم وارد شده نامعتبر است.");
                  setValCVV("");
                } else {
                  dispatch(addCard(infoCart))
                  // setArrayCarts();
                  // resetValue();
                }
              }
            }}
            className="bigBtn"
          >
            ذخیره کارت
          </button>
          <button
            onClick={() => {
              // resetValue();
            }}
            className="smallBtn"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationCard;
