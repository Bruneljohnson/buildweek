import { createSlice } from "@reduxjs/toolkit";
import { clubs, trainers, workshops } from "../../constants/data";

const initialDataState = {
  workshops: workshops, //[]
  trainers: trainers, // []
  clubs: clubs, // []

  searchSelect: 1,
  optionWorkshopSelect: "",
  optionClubSelect: "",
  selectEx: "",
  searchValue: "",
  profileIdentity: "",
};

const DataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    storeWorkshops(state, action) {
      state.workshops = action.payload;
    },
    storeTrainers(state, action) {
      state.trainers = action.payload;
    },
    storeClubs(state, action) {
      state.clubs = action.payload;
    },
    storeSearchSelect(state, action) {
      state.searchSelect = action.payload;
    },
    storeWorkshopOptionsSelect(state, action) {
      state.optionWorkshopSelect = action.payload;
    },
    storeClubOptionsSelect(state, action) {
      state.optionClubSelect = action.payload;
    },
    storeExSelect(state, action) {
      state.selectEx = action.payload;
    },
    storeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    storeProfileIdentity(state, action) {
      state.profileIdentity = action.payload;
    },
    remove(state) {
      state.workshops = workshops;
      state.trainers = trainers;
      state.clubs = clubs;
      state.optionWorkshopSelect = "";
      state.optionClubSelect = "";
      state.selectEx = "";
      state.searchValue = "";
      state.profileIdentity = null;
    },
  },
});

export const DataActions = DataSlice.actions;

export default DataSlice.reducer;
