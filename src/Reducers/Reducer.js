export const initialState={
    Recipes:[]
    
}

const Reducer=(state,action)=>{
    switch(action.type){
        case 'LOAD_RECIPES':
        return {
            ...state,
            Recipes:action.payload
        };
        default :
        return state;

    }
}
export default Reducer