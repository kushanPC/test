import { getPositions } from '../api/api';

const SET_POSITIONS = 'SET_POSITIONS';

const data = {
  positions: [],
};

const positionsReduser = (state = data, action) => {
  switch (action.type) {
    case SET_POSITIONS:
      return {
        ...state,
        positions: [...action.positions],

      };
    default: return state;
  }
};

export const setPositionsData = (positions) => (
  {
    type: SET_POSITIONS,
    positions,
  }
);


export const setPositionsThunk = () => (dispatch) => {
  getPositions().then((response) => {
    dispatch(setPositionsData(response));
  });
};

export default positionsReduser;
