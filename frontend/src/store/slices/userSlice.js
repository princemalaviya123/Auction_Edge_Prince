import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { toast } from "react-toastify";

const userSlice = createSlice({
    name: "user",

    // initial State = When User is Not Login That Time Information like this 
    initialState: {
        loading: false,
        isAuthenticated: false,
        user: {},
        leaderboard: [],
    },

    // Reducers = Like Components in Small Functions like In that - 
    // After that fnction exicutes what initialState Changes
    reducers: {
        registerRequest(state, action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
        },
        registerSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        registerFailed(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
        },
        loginRequest(state, action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        loginFailed(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
        },
        fetchUserRequest(state, action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
        },
        fetchUserSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        fetchUserFailed(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
        },
        logoutSuccess(state, action) {
            state.isAuthenticated = false;
            state.user = {};
        },
        logoutFailed(state, action) {
            state.loading = false;
            state.isAuthenticated = state.isAuthenticated;
            state.user = state.user;
        },
        fetchLeaderboardRequest(state, action) {
            state.loading = true;
            state.leaderboard = [];
        },
        fetchLeaderboardSuccess(state, action) {
            state.loading = false;
            state.leaderboard = action.payload;
        },
        fetchLeaderboardFailed(state, action) {
            state.loading = false;
            state.leaderboard = [];
        },
        clearAllErrors(state, action) {
            state.user = state.user;
            state.isAuthenticated = state.isAuthenticated;
            state.leaderboard = state.leaderboard;
            state.loading = false;
        },
    },
});

export const register = (formData) => async (dispatch) => {
    try {
        dispatch(userSlice.actions.registerRequest());

        console.log("Sending FormData:", formData);

        const response = await axios.post(
            "http://localhost:5000/api/v1/users/register",
            formData,
            {
                withCredentials: true, // ✅ Include credentials (cookies, headers)
                headers: { "Content-Type": "multipart/form-data" } // ✅ Allow file uploads
            }
        );

        dispatch(userSlice.actions.registerSuccess(response.data));
        toast.success(response.data.message);
    } catch (error) {
        console.error("Registration Error:", error);

        dispatch(userSlice.actions.registerFailed());

        if (error.response) {
            console.error("Server Error Response:", error.response.data);
            toast.error(error.response.data.message);
        } else {
            toast.error("An unexpected error occurred.");
        }
    }
};


export const login = (formData) => async (dispatch) => {
    try {
        dispatch(userSlice.actions.loginRequest());

        console.log("Sending FormData:", formData);

        const response = await axios.post(
            "http://localhost:5000/api/v1/users/login",
            formData,
            {
                withCredentials: true, // ✅ Include credentials (cookies, headers)
                headers: { "Content-Type": "application/json" } // ✅ Allow file uploads // application/json = When text Data Only 
            }
        );

        dispatch(userSlice.actions.loginSuccess(response.data));
        toast.success(response.data.message);
    } catch (error) {
        console.error("Login Error:", error);

        dispatch(userSlice.actions.loginFailed());

        if (error.response) {
            console.error("Server Error Response:", error.response.data);
            toast.error(error.response.data.message);
        } else {
            toast.error("An unexpected error occurred.");
        }
    }
};

export const logout = () => async (dispatch) => {
    try {

        // axios = It is for Backend call 
        const response = await axios.get("http://localhost:5000/api/v1/users/logout", { withCredentials: true });

        // Dispatch = is use for Reducer Action Method Calling.
        dispatch(userSlice.actions.logoutSuccess());
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());

    } catch (error) {
        dispatch(userSlice.actions.logoutFailed());
        toast.error(error.response.data.message);
        dispatch(userSclice.actions.clearAllErrors());
    }
};

// it is for when user is sending payment or Refresh page then it remain to login user not logout (keep user in same state)
export const fetchUser = () => async (dispatch) => {
    dispatch(userSlice.actions.fetchUserRequest());
    try {
        const response = await axios.get("http://localhost:5000/api/v1/users/me", {
            withCredentials: true,
        });
        dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.fetchUserFailed());
        dispatch(userSlice.actions.clearAllErrors());
        console.error(error);
    }
};

export const fetchLeaderboard = () => async (dispatch) => {
    dispatch(userSlice.actions.fetchLeaderboardRequest());
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/users/leaderboard",
        {
          withCredentials: true,
        }
      );
      dispatch(
        userSlice.actions.fetchLeaderboardSuccess(response.data.leaderboard)
      );
      dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(userSlice.actions.fetchLeaderboardFailed());
      dispatch(userSlice.actions.clearAllErrors());
      console.error(error);
    }
  };

export default userSlice.reducer;








