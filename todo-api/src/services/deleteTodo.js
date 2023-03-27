import { TODO } from "../utils/routes"
import Cookies from "js-cookie";

export const deleteTodo = (id) => {
const token = Cookies.get("_todo_token");

  fetch(TODO, {
    method: "DELETE",
    headers: {
      token,
    },
    body: JSON.stringify({
      _id: id,
    }),
  }).then((res)=> {
    if(!res.ok) throw new Error("Request failed");
    return res.json();
})
}