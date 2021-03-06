import { TOGGLE_LOGIN_MODAL } from '../actionCreators/login-actions';
import { TOGGLE_SIGNUP_MODAL } from '../actionCreators/signup-actions';
import { TOGGLE_SCENARIO_MODAL } from '../actionCreators/scenario-actions';

const initialState = {
  isLoginOpen: false,
  isSignupOpen: false,
  isScenarioOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return Object.assign({}, state, {
        isLoginOpen: !state.isLoginOpen,
      });

    case TOGGLE_SIGNUP_MODAL:
      return Object.assign({}, state, {
        isSignupOpen: !state.isSignupOpen,
      });

    case TOGGLE_SCENARIO_MODAL:
      return Object.assign({}, state, {
        isScenarioOpen: !state.isScenarioOpen,
      });

    default:
      return state;
  }
};
