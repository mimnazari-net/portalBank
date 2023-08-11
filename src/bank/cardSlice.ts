import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface tarakoneshType {
  cartMabda: string;
  cartMaghsad: string;
  mablagh: number;
  idTrakonesh: number;
}

export interface infoCartType {
  shomareCart: string;
  month: number;
  year: string;
  cvv2: string;
  adressImg: string;
  name: string;
  mojodi: number;
  tarakonesCart: Array<tarakoneshType>;
}

interface initialState_type {
  arrCards: infoCartType[];
  arrTrasaction: tarakoneshType[];
  witchCards: string;
  selectedCard: infoCartType;
}

const initialState: initialState_type = {
  arrCards: [],
  arrTrasaction: [],
  witchCards: "",
  selectedCard: {
    shomareCart: "",
    month: 0,
    year: "",
    cvv2: "",
    adressImg: "",
    name: "",
    mojodi: 0,
    tarakonesCart: [
      { cartMabda: "", cartMaghsad: "", mablagh: 0, idTrakonesh: 0 },
    ],
  },
};

const cardSlices = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, { payload }: { payload: infoCartType }) => {
      let tmp = [...state.arrCards];
      tmp.push(payload);
      if (state.arrCards.length === 0) {
        state.arrCards = tmp;
      } else {
        let cardExist = state.arrCards.find(
          (card) => card.shomareCart === payload.shomareCart
        );
        if (cardExist !== undefined) {
          alert("شماره کارت تکراریست!");
        } else {
          state.arrCards = tmp;
        }
      }
    },
    addTrasaction: (state, { payload }: { payload: tarakoneshType }) => {
      let tmp = [...state.arrTrasaction];
      tmp.push(payload);
      state.arrTrasaction = tmp;
    },
    clickOnCard: (state, { payload }: { payload: string }) => {
      state.witchCards = payload;
    },
    findFillTransfer: (state, { payload }: { payload: infoCartType }) => {
      state.selectedCard.adressImg = payload.adressImg;
      state.selectedCard.cvv2 = payload.cvv2;
      state.selectedCard.month = payload.month;
      state.selectedCard.year = payload.year;
      state.selectedCard.shomareCart = payload.shomareCart;
      state.selectedCard.mojodi = payload.mojodi;
    },
    reduceValue: (state, { payload }: { payload: number }) => {
      let s = state.arrCards.find(
        (elm) => elm.shomareCart === state.selectedCard.shomareCart
      );
      if (s !== undefined) {
        s.mojodi -= payload;
      }
    },
    showTrasactionCard: (state, { payload }: { payload: string }) => {},
  },
});

export const {
  addCard,
  addTrasaction,
  clickOnCard,
  findFillTransfer,
  reduceValue,
} = cardSlices.actions;
export default cardSlices.reducer;
