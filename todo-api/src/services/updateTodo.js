import { TODO } from "../utils/routes";

export const updateTodo = (todo) => {
  return fetch(TODO, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => {
    if (!res.ok) throw new Error("Request failed");
    return res.json();
  });
};