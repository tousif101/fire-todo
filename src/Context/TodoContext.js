import {createContext, useReducer} from 'react'
import todoReducer from './TodoReducer'

const ToDoContext = createContext()



export const GithubProvider = ({children}) => {
    //empty state 
    // const [users,setUsers] = useState([])
    //You have to decide as a developer when to use which


    const initialState = {
        users:[],
        user:{},
        repos:[]
    }

    const [state,dispatch] = useReducer(todoReducer,initialState)



        return (
            <ToDoContext.Provider
                value={{

                }}
            >
                {children}
            </ToDoContext.Provider>
        )

    }


export default ToDoContext