export default function(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks:[...state.tasks, action.payload]
            }
        case "GET_TASK":
                state.tasks.map((task) => {
                    return (
                        task
                    )
                })
        default:
            return state;
    }
}