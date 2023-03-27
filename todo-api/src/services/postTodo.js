import { TODO } from "../utils/routes"

export const postTodo = (todo) => {
    return fetch(TODO, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then((res)=> {
        if(!res.ok) throw new Error("Request failed");
        return res.json();
    })
}