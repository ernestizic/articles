import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Thunks

// make a comment
export const addComment =(postid, formData)=> async(dispatch, getState)=> {
    const token = getState().users.token;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    dispatch(addCommentLoading());

    try {
        const res = await axios.post(`https://hidden-falls-93050.herokuapp.com/api/article/${postid}`, formData, config)
        dispatch(addCommentSuccess(res.data))
    } catch (err) {
        dispatch(addCommentFailure())
    }
}


const commentSlice = createSlice({
    name: "comments",

    // STATE
    initialState: {
        allComments: [],
        isLoading: false
    },

    // REDUCERS
    reducers: {
        // Extra reducers for addcomment
        addCommentLoading: (state, action)=> {
            return {
                ...state,
                isLoading: true
            }
        },
        addCommentSuccess: (state, action)=> {
            return {
                ...state,
                isLoading: false,
                allComments: [...state.allComments, action.payload.data],
            }
        },
        addCommentFailure: (state, action)=> {
            return {
                ...state,
                isLoading: false,
                allComments: state.allComments
            }
        }


    },
});

// ACTIONS
export const {addCommentLoading, addCommentSuccess, addCommentFailure} = commentSlice.actions;
  
export default commentSlice.reducer;