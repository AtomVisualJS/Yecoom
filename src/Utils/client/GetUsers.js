import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await axios.get("http://localhost:5000/api/users");
  return response.data;
});

const UserComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.users.users);
  const userRender = user.map((user) => {
    return <div key={user._id}></div>;
  });

  return <div>{userRender}</div>;
};

export default UserComponent;
