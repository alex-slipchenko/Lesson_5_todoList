const API = `https://65f42b28f54db27bc020aed6.mockapi.io/todos`;

const todos = {
  get: () => fetch(API).then((data) => data.json()),

  delete: (id) =>
    fetch(API + `{id}`, { method: "DELETE" }).then((data) => data.json()),

  patch: (id, item) =>
    fetch(API + `/{id}`, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json()),

  put: (id, item) =>
    fetch(API + `/{id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json()),

  post: (item) =>
    fetch(API, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json()),
};

export default todos;
