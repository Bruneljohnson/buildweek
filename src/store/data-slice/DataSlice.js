import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  workshops: [], //[]
  trainers: [],
  workshopEx: [],
  showLeftPanel: false,

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
    storeWorkshopEx(state, action) {
      state.workshopEx = action.payload;
    },
    storeTrainers(state, action) {
      state.trainers = action.payload;
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
    storeLeftPanel(state, action) {
      state.showLeftPanel = action.payload;
    },
    remove(state) {
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
