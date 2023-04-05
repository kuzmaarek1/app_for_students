import { createSlice } from "@reduxjs/toolkit";
import { authApiSlice } from "reducers/authApiSlice";
import { subjectsApiSlice } from "reducers/subjectsApiSlice";
import { isAnyOf } from "@reduxjs/toolkit";

const subjectReducer = createSlice({
  name: "subject",
  initialState: {
    currentSubject: null,
  },
  reducers: {
    setCurrentSubject(state, action) {
      state.currentSubject = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      subjectsApiSlice.endpoints.getSubject.matchFulfilled,
      (state, { payload }) => {
        state.currentSubject = payload?.id ? payload : null;
      }
    );
    builder.addMatcher(
      subjectsApiSlice.endpoints.editSubject.matchFulfilled,
      (state, { payload }) => {
        if (state.currentSubject.id === payload.id) {
          state.currentSubject = payload;
        }
      }
    );
    builder.addMatcher(
      subjectsApiSlice.endpoints.createSubject.matchFulfilled,
      (state, { payload }) => {
        state.currentSubject = payload;
      }
    );
    builder.addMatcher(
      isAnyOf(
        authApiSlice.endpoints.logOut.matchFulfilled,
        authApiSlice.endpoints.logOut.matchRejected
      ),
      (state, { payload }) => {
        state.currentSubject = null;
      }
    );
  },
});

const { actions, reducer } = subjectReducer;

export const { setCurrentSubject } = actions;

export default reducer;
