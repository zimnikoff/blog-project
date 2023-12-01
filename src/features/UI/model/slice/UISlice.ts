import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
    scroll: {},
};

export const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number}>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(action.pending, (state) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(action.fulfilled, (state) => {
        //         state.isLoading = false;
        //     })
        //     .addCase(action.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

export const { actions: UIActions } = UISlice;
export const { reducer: UIReducer } = UISlice;
