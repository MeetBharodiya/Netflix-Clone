import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListFailure,
  updateListStart,
  updateListSuccess,
} from "./ListAction";

//GET LISTS
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("list", {
      headers: {
        "auth-token":JSON.parse(localStorage.getItem("user")).accessToken
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/list", list, {
      headers: {
        "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};


//update
export const updateList = async (a, dispatch) => {
  dispatch(updateListStart());
  try {
      const res = await axios.put("movie/" + a._id, {
      headers: {
        "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};


//DELETE LIST
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("list/" + id, {
      headers: {
        "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};