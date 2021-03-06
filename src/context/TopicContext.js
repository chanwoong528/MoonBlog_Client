import { createContext, useReducer } from "react";
export const TopicContext = createContext();
const initialTopciState = {
  isLoading: false,
  topics: [{ _id: "0", topic: "Choose Topic for Post" }],
};

const TopicReducer = (state = initialTopciState, action) => {
  switch (action.type) {
    case "LOAD_TOPICS":
      console.log("LOAD_TOPICS", action.payload.topics);
      const newTopics = [...initialTopciState.topics, ...action.payload.topics];
      return {
        isLoading: true,
        topics: newTopics,
      };
    case "ADD_TOPIC":
      console.log("ADD_TOPIC", action.payload.topic);
      return { ...state, topics: [...state.topics, action.payload.topic] };
    case "DELTE_TOPIC":
      console.log("DELTE_TOPIC", action.payload.topicId);
      return {
        ...state,
        topics: state.topics.filter((topic) => {
          return topic._id !== action.payload.topicId;
        }),
      };
    case "UPDATE_TOPIC":
      console.log("UPDATE_TOPIC", action.payload.topicId);
      return {
        ...state,
        topics: state.topics.map((topicInfo) => {
          if (topicInfo._id === action.payload.topicId) {
            return {
              ...topicInfo,
              topic: action.payload.topic,
              description: action.payload.description,
            };
          }
          return topicInfo;
        }),
      };
    default:
      return state;
  }
};

export const TopicProvider = ({ children }) => {
  const [topicState, topicDispatch] = useReducer(
    TopicReducer,
    initialTopciState
  );

  const { topics, isLoading } = topicState;

  return (
    <TopicContext.Provider value={{ topicDispatch, topics, isLoading }}>
      {children}
    </TopicContext.Provider>
  );
};
