import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";
import axios from "axios";

const AppContext = createContext();

export let initialSate = {
  isLoading: false,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const Api = "http://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSate);

  const getNews = async () => {
    dispatch({
      type: "SET_LOADING",
    });

    try {
      const response = await axios.get(
        `${Api}query=${state.query}&page=${state.page}`
      );
      const result = response.data;
      console.log("response is", result);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: result.hits,
          nbPages: result.nbPages,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_ID) => {
    dispatch({
      type: "REMOVE_POST",
      payload: post_ID,
    });
  };

  const searchPost = (searchItem) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchItem,
    });
  };

  useEffect(() => {
    getNews();
  }, [state.query]);
  return (
    <AppContext.Provider value={{ ...state, removePost, searchPost }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { useGlobalContext, AppProvider };
