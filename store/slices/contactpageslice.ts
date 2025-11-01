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

export const fetchContactpageTemplate = createAsyncThunk(
  "template/fetchaontactpageTemplate",
  async (vendor_id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/templates/contactpage?vendor_id=${vendor_id}`
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
      .addCase(fetchContactpageTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchContactpageTemplate.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          if (action.payload?.data) {
            state.data = action.payload.data;
          } else {
            state.data = null;
            state.error = action.payload?.message || "Template not found";
          }
        }
      )

      .addCase(
        fetchContactpageTemplate.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearTemplate } = templateSlice.actions;
export default templateSlice.reducer;
