import { createStore } from "redux";
import categories from "./categories";

const store = () => {
    return createStore(categories)
}

export default store()