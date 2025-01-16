import { addItem, addproduct, delitem } from "../action/typeactoin";

const reduser = (state = [], action) => {
    switch (action.type) {
        case addproduct:
            const findpro = state.find((y) => y.id === action.payload.id)
            if (findpro) {
                return state.map((x) => x.id === action.payload.id ? { ...x, num: x.num + 1} : x)
            }      else {
                return [...state, { ...action.payload, num: 1 }]
            }
            // break;
        case delitem:
            const findplus = state.find((x) => x.id === action.payload.id)
            if (findplus) {
                if (findplus.num===1) {
                    return state.filter((x)=>x.id!==findplus.id)
                }

                return state.map((x) => x.id === action.payload.id ? { ...x, num: x.num - 1} : x)
            }
            else {
                return [...state, { ...action.payload, num: 1 }]
            }

            break;
        case addItem:
            const findmin = state.find((y) => y.id === action.payload.id)
            if (findmin) {
                return state.map((x) => x.id === action.payload.id ? { ...x, num: x.num + 1} : x)
            }
            else {
                return [...state, { ...action.payload, num: 1 }]
            }

          break;
        default:
        return state
    }}
        
        export default reduser;