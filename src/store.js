import Framework from "./Framework.js";
import { todoReducer } from "./reducers/todoReducer.js";

const store = Framework.createStore(todoReducer);

export default store;
