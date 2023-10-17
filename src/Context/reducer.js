import { ADD_DRR } from "./action.types";

export default (state, action) => {
    switch (action.type) {
        case ADD_DRR:
            return [...state, action.payload]
    
        default:
            return state;
    }
}