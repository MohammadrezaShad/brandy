import { SET_NAME } from '@/redux/types/test-types';

export const setInfo = (name) => (dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: name,
  });
};
