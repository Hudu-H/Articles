import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const url = "http://localhost:5000/posts";

axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);

export const likepost = (id) => axios.patch(`${url}/${id}/likePost`);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const signIn = (formData) => axios.post("/user/signin", formData);

export const signUp = (formData) => axios.post("/user/signup", formData);
