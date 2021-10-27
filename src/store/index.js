import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@alef/store/user";

const reducer = {
    userSlice,
}

const initialStore = () => {
    return configureStore({reducer})
}

export default initialStore;