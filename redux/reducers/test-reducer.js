import { SET_NAME } from '@/redux/types/test-types';

const test = (
  state = {
    name: 'guest',
  },
  action,
) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return { ...state };
  }
};

export default test;
