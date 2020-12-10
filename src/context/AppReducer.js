
let AppReducer = (state, action) => {
    switch(action.type) {
        case "Add User" :
        state = state.push(action.value)
        break;
        default : 
        return state
        
    }
}


export default AppReducer