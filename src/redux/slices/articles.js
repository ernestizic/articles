import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all articles
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const res = await axios.get("https://hidden-falls-93050.herokuapp.com/api/v1/articles");
    return res.data.articles;
  }
);

// get one partcular article
export const getOneArticle = createAsyncThunk("articles/getOneArticle", async (post_id) => {
    const res = await axios.get(`https://hidden-falls-93050.herokuapp.com/api/v1/article/${post_id}`);
    return res.data;
  }
);

// delete an article
export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id, {getState})=> {
  const token = getState().users.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if(token) {
    config.headers['authorization'] = `Bearer ${token}`
  }
    const res = await axios.delete(`https://hidden-falls-93050.herokuapp.com/api/v1/article/${id}`,config )
    return res.data.data;
})

// add a new article
export const addNewArticle = createAsyncThunk('articles/addNewArticle', async (formData, {getState})=> {
  const token = getState().users.token;
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if(token) {
    config.headers['authorization'] = `Bearer ${token}`
  }
    try {
      const res = await axios.post("https://hidden-falls-93050.herokuapp.com/api/v1/articles", formData, config)
      return res.data.data;
    } catch (err) {
      console.log(err)
    }
})


// Edit an article
export const editArticle =(post_id, formData)=> async(dispatch, getState)=>{
  const token = getState().users.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }
  dispatch(editArticleLoading())
  try {
    const res = await axios.put(`https://hidden-falls-93050.herokuapp.com/api/v1/article/${post_id}`, formData, config)
    dispatch(editArticleSuccess(res.data))
    dispatch(successAlert())
    setTimeout(()=> {
      dispatch(clearAlert())
    }, 3000)
  } catch (err) {
    dispatch(editArticleFailure())
  }
} 


// Search for articles
export const search =(keyword)=> async(dispatch, getState)=> {
  dispatch(searchLoading())
  try {
    const res = await axios.get(`https://hidden-falls-93050.herokuapp.com/api/v1/search/articles/${keyword}`)
    dispatch(searchSuccess(res.data))
  } catch (err) {
    dispatch(searchFailure())
  }
}



const articleSlice = createSlice({
  name: "articles",
  initialState: {
    posts: [],
    postCopy: [],
    loading: false,
    post:[],
    comments: [],
    error: false,
    searchedPosts: [],
    successMsg: '',
    errMsg: null,
  },
  reducers: {
    filterArticles: (state, action) => {
        const filt = action.payload === 'all'? (state.posts) : (state.posts.filter(post => post.category === action.payload))
        state.postCopy = filt
    },
    adminSearch: (state, action) => {
        const search = state.posts.filter(post => post.title.toLowerCase().includes(action.payload.toLowerCase()))
        state.postCopy = search
    },

    // search extras
    searchLoading: (state, action) => {
      return {
        ...state,
        loading: true
      }
    },
    searchSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        searchedPosts: action.payload.articles,
      }
    },
    searchFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        searchedPosts: []
      }
    },

    // edit article extras
    editArticleLoading: (state, action) => {
      return {
        ...state,
        loading: true
      }
    },
    editArticleSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        post: action.payload.data

      }
    },
    editArticleFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        post: state.post
      }
    },


    // success alert
    successAlert: (state, action)=> {
      state.successMsg = 'Article Updated'
    },

    // clear alert message
    clearAlert: (state, action)=> {
      state.successMsg = ''
    }

  },

  extraReducers: {
    // extraReducers for fetchArticles  
    [fetchArticles.pending]: (state) => {
      state.loading = true;
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postCopy = state.posts
      state.loading = false;
      state.error = false;
    },
    [fetchArticles.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // extraReducers for deleteArticle
    [deleteArticle.fulfilled]: (state, action) => {
        const del = [...state.posts.filter(post => post._id !== action.payload._id)]
        state.posts = del;
        state.postCopy = state.posts
    },

    // extraReducers  for addNewArticle
    [addNewArticle.pending]: (state) => {
      state.loading = true;
    },
    [addNewArticle.fulfilled]: (state, action) => {
        state.posts = [...state.posts, action.payload]
        state.loading = false
        state.error = false
    },
    [addNewArticle.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload 
    },

    // extraReducers for getOneArticles  
    [getOneArticle.pending]: (state) => {
      state.loading = true;
    },
    [getOneArticle.fulfilled]: (state, action) => {
      state.post = action.payload.article;
      state.comments = action.payload.comments;
      state.loading = false;
      state.error = false;
    },
    [getOneArticle.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    
  },
});

// Actions generated from slice
export const { 
  filterArticles, 
  adminSearch, 
  searchLoading, 
  searchSuccess, 
  searchFailure,
  editArticleLoading,
  editArticleSuccess,
  editArticleFailure,
  successAlert,
  clearAlert,
} = articleSlice.actions;

export default articleSlice.reducer;