// import { configureStore } from '@reduxjs/toolkit';
// import dataReducer from '../features/dataReducer'; // Create this reducer

// const store = configureStore({
//     reducer: {
//         data: dataReducer,
//     },
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataReducer";

const store = configureStore({
    reducer: {
        data: dataReducer
    }
})

export default store