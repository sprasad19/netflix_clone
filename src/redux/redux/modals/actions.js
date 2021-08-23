/*
 *
 * Modals actions
 *
 */

import { CLOSE_MODAL, OPEN_MODAL } from './constants';

export function openModalAction(payload) {
  return {
    type: OPEN_MODAL,
    payload,
  };
}
export function closeModalAction() {
  return {
    type: CLOSE_MODAL,
  };
}
