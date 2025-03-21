import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../services/api/baseApi";
import { getAxiosConfig } from "../../services/api/config";
import { processErrors } from "../../components/toast/toast";

const initialState = {
    loading: false,
    data: []
};

export const test = createAsyncThunk(templateName, async (_, thunkAPI) => {
    try {
        const { data } = await baseApi.get("/", getAxiosConfig());
        thunkAPI.dispatch(setData(data));
    } catch ({ response }) {
        await processErrors(response);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

const templateName = createSlice({
    name: templateName,
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(test.pending, (state) => {
                state.loading = true
            })
    },
});

export const { setLoading, setData } = templateName.actions;

export default templateName.reducer;
