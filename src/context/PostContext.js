import { createContext, useReducer } from "react";

export const PostContext = createContext();
const initialPostState = {
  isLoading: false,
  posts: [],
};

const PostReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case "LOAD_POSTS":
      console.log("LOAD_POSTS", action.payload.posts);
      return { isLoading: true, posts: action.payload.posts };
  }
};

export const PostProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(PostReducer, initialPostState);

  const { posts, isLoading } = postState;
  return (
    <PostContext.Provider value={{ posts, postDispatch, isLoading }}>
      {children}
    </PostContext.Provider>
  );
};
