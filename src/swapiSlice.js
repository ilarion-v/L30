import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const allCharacters = [
  { id: 1, name: "People 1", height: "180", mass: "80", gender: "male" },
  { id: 2, name: "People 2", height: "165", mass: "60", gender: "female" },
];

export const fetchCharacters = createAsyncThunk(
  "swapi/fetchCharacters",
  async (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          allCharacters.filter((char) =>
            char.name.toLowerCase().includes(query.toLowerCase())
          )
        );
      }, 500);
    });
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    searchResults: [],
    status: "idle",
  },
  reducers: {
    clearSearch: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { clearSearch } = swapiSlice.actions;
export default swapiSlice.reducer;
