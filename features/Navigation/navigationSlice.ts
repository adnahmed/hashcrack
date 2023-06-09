import { AppState } from "@/lib/redux/store";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
interface NavigationState {
    activeTab: number;
}
const navigation = createSlice({
    name: "navigation",
    initialState: {
        activeTab: 0
    } as NavigationState,
    reducers: {
        activeTabChanged: (state, action: PayloadAction<number>) => {
            state.activeTab = action.payload;
        },
    },
});

export default navigation;
export const selectActiveTab = (state: AppState) =>
    state.navigation.activeTab;
export const selectActiveWizardTab = createSelector(selectActiveTab, (activeTab) => activeTab === 1);
export const { activeTabChanged } = navigation.actions;
