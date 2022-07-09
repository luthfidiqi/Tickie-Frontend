const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  data: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_BY_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GET_USER_BY_ID_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: { ...action.payload.data.data[0] },
        msg: action.payload.data.msg
      };
    }
    case "GET_USER_BY_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg
      };
    }
    case "UPDATE_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "UPDATE_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "UPDATE_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg
      };
    }
    case "UPDATE_PASSWORD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "UPDATE_PASSWORD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "UPDATE_PASSWORD_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
