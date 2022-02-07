import { createContext, useReducer } from "react";

export const CommentContext = createContext();
const initialCommentState = {
  isLoading: false,
  comments: [],
};

const CommentReducer = (state = initialCommentState, action) => {
  switch (action.type) {
    case "LOAD_COMMENTS":
      console.log("LOAD_COMMENTS", action.payload.comments);
      return { isLoading: true, comments: action.payload.comments };
    case "ADD_COMMENT":
      console.log("ADD_COMMENT", action.payload.comment);
      return {
        ...state,
        comments: [...state.comments, action.payload.comment],
      };
    case "DELTE_COMMENT":
      console.log("DELTE_COMMENT", action.payload.comment);
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment._id !== action.payload.comment._id
        ),
      };
    default:
      return state;
  }
};

export const CommentProvider = ({ children }) => {
  const [commentState, commentDispatch] = useReducer(
    CommentReducer,
    initialCommentState
  );
  const { comments, isLoading } = commentState;
  return (
    <CommentContext.Provider value={{ comments, commentDispatch, isLoading }}>
      {children}
    </CommentContext.Provider>
  );
};
