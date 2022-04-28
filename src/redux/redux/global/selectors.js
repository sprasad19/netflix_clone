import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

const selectGlobalDomain = (state) => state.global || INITIAL_STATE;
const makeSelectLoading = () => createSelector(selectGlobalDomain, (globalState) => globalState.loading);

const makeSelectError = () => createSelector(selectGlobalDomain, (globalState) => globalState.error);
const makeSelectErrorMessage = () => createSelector(selectGlobalDomain, (globalState) => globalState.errorMessage);
const makeSelectUserName = () => createSelector(selectGlobalDomain, (globalState) => globalState.username);
const makeSelectAccessToken = () => createSelector(selectGlobalDomain, (globalState) => globalState.token);
const makeSelectGlobal = () => createSelector(selectGlobalDomain, (globalState) => globalState);
const makeSelectUserDetails = () => createSelector(selectGlobalDomain, (globalState) => globalState.userDetails);

export default makeSelectGlobal;
export {
  makeSelectGlobal,
  selectGlobalDomain,
  makeSelectError,
  makeSelectLoading,
  makeSelectUserName,
  makeSelectErrorMessage,
  makeSelectAccessToken,
  makeSelectUserDetails
};
