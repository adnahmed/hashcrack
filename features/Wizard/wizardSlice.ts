import { AppState } from '@/lib/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { activeTabChanged } from '../Navigation/navigationSlice';
import { extendedApiSlice as newTaskApi } from '../NewTask/newTaskSlice';
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
        builder
            .addCase(activeTabChanged, (state, action) => {
                if (action.payload === 1) {
                    return;
                }
                state.wizardStepIdReached = 1;
            })
            .addMatcher(newTaskApi.endpoints.submitTask.matchFulfilled, (state, { payload }) => {
                state.wizardStepIdReached = 5;
            });
    },
});

export default wizard;

export const selectWizardStepReached = (state: AppState) => state.wizard.wizardStepIdReached;

export const { stepIdReached } = wizard.actions;
