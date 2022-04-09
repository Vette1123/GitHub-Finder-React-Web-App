import { createContext, useReducer } from "react";
import githubReducer from "./Reducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const intitalState = {
    users: [],
    loading: false,
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, intitalState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
