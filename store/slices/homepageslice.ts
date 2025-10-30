import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface TemplateState {
  data: any | null;
  loading: boolean;
  error: string | null;
}


const initialState: TemplateState = {
  data: null,
  loading: false,
  error: null,
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


export const fetchHomepageTemplate = createAsyncThunk(
  "template/fetchHomepageTemplate",
  async (vendor_id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/templates/homepage?vendor_id=${vendor_id}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    clearTemplate: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomepageTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchHomepageTemplate.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchHomepageTemplate.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearTemplate } = templateSlice.actions;
export default templateSlice.reducer;
