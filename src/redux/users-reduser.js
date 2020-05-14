import {
  getUsers, addUsers, getToken, registerUser,
} from '../api/api';

const SET_USERS = 'SET_USERS';
const ADD_USERS = 'ADD_USERS';
const SET_ERROR = 'SET_ERROR';
const SUCCESS_STATUS = 'SUCCESS_STATUS';
const ERROR_STATUS_OF = 'ERROR_STATUS_OF';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';

const data = {
  page: 1,
  users: [],
  next_url: null,
  isFetching: false,
  success: false,
  error: {
    status: false,
    title: '',
    description: '',
  },
};

const userReduser = (state = data, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.usersData.users],
        page: action.usersData.page,
        next_url: action.usersData.links.next_url,

      };
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.usersData.users],
        page: action.usersData.page,
        next_url: action.usersData.links.next_url,

      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          status: true,
          title: action.title,
          description: action.description,
        },
      };
    case SUCCESS_STATUS:
      return {
        ...state,
        success: action.isSuccess,
      };
    case ERROR_STATUS_OF:
      return {
        ...state,
        error: { ...state.error, status: false },
      };

    case TOGGLE_ISFETCHING:
      return {
        ...state, isFetching: action.isfetching,
      };

    default: return state;
  }
};

export const setUsersData = (usersData) => (
  {
    usersData,
    type: SET_USERS,
  }
);

export const addUsersData = (usersData) => (
  {
    usersData,
    type: ADD_USERS,
  }
);

export const setErrorData = (title, description) => (
  {
    title,
    description,
    type: SET_ERROR,
  }
);

export const errorStatusOf = () => (
  {
    type: ERROR_STATUS_OF,
  }
);


export const toggleIsfetching = (isfetching) => (
  {
    isfetching,
    type: TOGGLE_ISFETCHING,
  }
);

export const setSuccessData = (isSuccess) => (
  {
    isSuccess,
    type: SUCCESS_STATUS,
  }
);

export const setUsersThunk = (page, count) => (dispatch) => {
  dispatch(toggleIsfetching(true));
  getUsers(page, count).then((response) => {
    dispatch(toggleIsfetching(false));
    dispatch(setUsersData(response));
  });
};

export const addUsersThunk = (url) => (dispatch) => {
  dispatch(toggleIsfetching(true));
  addUsers(url).then((response) => {
    dispatch(toggleIsfetching(false));
    dispatch(addUsersData(response));
  });
};


export const registerUsersThunk = (formData) => (dispatch) => {
  getToken().then((token) => {
    registerUser(formData, token)
      .then(() => {
        getUsers().then((usersResponse) => {
          dispatch(toggleIsfetching(false));
          dispatch(setUsersData(usersResponse));
          dispatch(setSuccessData(true));
        });
      })
      .catch((error) => {
        let title;
        let description;
        if (Number(error.response.status) === 401) {
          title = 'Error: 401';
          description = 'Срок действия токена истек, попробуйте пройти регистрацию заново';
        }
        if (Number(error.response.status) === 409) {
          title = 'Error: 409';
          description = 'Пользователь с таким телефоном или email`ом уже зарегестрирован с системе, попробуйте использовать другие данные для регистрации';
        }
        if (Number(error.response.status) === 422) {
          title = 'Error: 422';
          if (error.response.data.fails.position_id) {
            description = 'Выбор должности обязателен, выберите пожалуйста должность';
          }
          if (error.response.data.fails.name) {
            description = 'Проблемы с валидацией имени, попробуйте ввести другое имя';
          }
          if (error.response.data.fails.email) {
            description = 'Проблемы с валидацией майла, попробуйте ввести другой майл';
          }
          if (error.response.data.fails.phone) {
            description = 'Проблемы с валидацией телефона, попробуйте ввести другой номер';
          }
          if (error.response.data.fails.photo) {
            description = 'Проблемы с валидацией картинки, попробуйте заргузить другую';
          }
        }
        dispatch(setErrorData(title, description));
      });
  });
};

export default userReduser;
