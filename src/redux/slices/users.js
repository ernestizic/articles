import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get all users
export const fetchAllUsers =()=> async(dispatch, getState) => {
  dispatch(fetchLoading());
  try {
    const res = await axios.get("https://hidden-falls-93050.herokuapp.com/api/users")
    dispatch(fetchSuccess(res.data))
  } catch (err) {
    dispatch(fetchFailure())
  }
}


// Load user Thunk
export const loadUser = () => async(dispatch, getState) => {
  const token = getState().users.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }
  dispatch(userLoading());
  try {
    const res = await axios.get("https://hidden-falls-93050.herokuapp.com/api/user", config);
    dispatch(userReceived(res.data));
  } catch (err) {
    dispatch(userLoadFailed());
  }
};


// Register user Thunk
export const registerUser = (formData) => async (dispatch, getState) => {
  const token = getState().users.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }
  dispatch(registerLoading());
  try {
    const res = await axios.post("https://hidden-falls-93050.herokuapp.com/api/users", formData, config);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure())
    dispatch(authError(err.response.data))
    setTimeout(() => {
      dispatch(clearError())
    }, 5000);
  }
};

// Login Thunk
export const login = (formData) => async (dispatch, getState) => {
  const token = getState().users.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }
  dispatch(loginLoading());
  try {
    const res = await axios.post("https://hidden-falls-93050.herokuapp.com/api/users/auth", formData, config);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure())
    console.log(err.response)
    dispatch(authError(err.response.data))
    setTimeout(() => {
      dispatch(clearError())
    }, 5000);

  }
};


const userSlice = createSlice({
  name: "users",

  // STATE
  initialState: {
    totalUsers: [],
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    error: null
  },

  // REDUCERS
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    },

    // load user extras 
    userLoading: (state, action) => {
      return{
        ...state,
        isLoading: true
      }
    },
    userReceived: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.data
      }
    },
    userLoadFailed: (state, action) => {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    },

    // register user extras
    registerLoading: (state) => {
      return {
        ...state,
        isLoading: true
      }
    },
    registerSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      return{
        ...state,
        token: action.payload.token,
        user: action.payload.data,
        isLoading: false,
        isAuthenticated: true

      }
    },
    registerFailure: (state, action) => {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    },

    // Login user extras
    loginLoading: (state) => {
      return {
        ...state,
        isLoading: true
      }
    },
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      return{
        ...state,
        token: action.payload.token,
        user: action.payload.data,
        isLoading: false,
        isAuthenticated: true

      }
    },
    loginFailure: (state) => {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    },

    // Fetch all users extras
    fetchLoading: (state) => {
      return {
        ...state,
        isLoading: true
      }
    },
    fetchSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        totalUsers: action.payload.users
      }
    },
    fetchFailure: (state) => {
      return {
        ...state,
        isLoading: false,
        totalUsers: []
      }
    },

    // auth error
    authError: (state, action) => {
      state.error = action.payload
    },
    clearError: (state, action) => {
      state.error = null
    }

  },

});

// ACTIONS generated from slice
export const {
  logout,
  userLoading,
  userReceived,
  userLoadFailed,
  registerLoading,
  registerSuccess,
  registerFailure,
  loginLoading,
  loginSuccess,
  loginFailure,
  fetchLoading,
  fetchSuccess,
  fetchFailure,
  authError,
  clearError,
} = userSlice.actions;

export default userSlice.reducer;
