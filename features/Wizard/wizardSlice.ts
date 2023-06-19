import { AppState } from "@/lib/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activeTabChanged } from "../Navigation/navigationSlice";

interface WizardState {
    wizardStepIdReached: number;
}
const wizard = createSlice({
    name: 'wizard',
    initialState: {
        wizardStepIdReached: 1,
    } as WizardState,
    reducers: {
        stepIdReached: (state, action: PayloadAction<number>) => {
            state.wizardStepIdReached = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(activeTabChanged, (state, action) => {
            state.wizardStepIdReached = 1;
        })
    }
})

export default wizard;

export const selectWizardStepReached = (state: AppState) => state.wizard.wizardStepIdReached;

export const { stepIdReached } = wizard.actions;