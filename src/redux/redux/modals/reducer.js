/*
 *
 * Modals reducer
 *
 */
import produce from "immer";
import { CLOSE_MODAL, OPEN_MODAL } from "./constants";

export const initialState = {
  modal: null,
};

const modalsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case OPEN_MODAL:
        const { modalType, modalProps } = action.payload;
        draft.modal = { modalType, modalProps };
        break;
      case CLOSE_MODAL:
        draft.modal = null;
        break;
      default:
        return draft;
    }
  });

export default modalsReducer;
