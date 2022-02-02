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
  }
};

export const TopicProvider = ({ children }) => {
  const [topicState, topicDispatch] = useReducer(
    TopicReducer,
    initialTopciState
  );

  const { topics, isLoading } = topicState;
  console.log("provider: ", topicState);
  return (
    <TopicContext.Provider value={{ topicDispatch, topics, isLoading }}>
      {children}
    </TopicContext.Provider>
  );
};
