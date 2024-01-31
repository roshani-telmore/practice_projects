import todos from "services/todos.service";
// import {faker} from "@faker-js/faker";

export default function handler(req, res) {
  const id = req.body.id;

  // for (let i = 0; i < 10; i++) {
  //   const title = faker.name.jobTitle();
  //   const description = faker.name.jobDescriptor();
  //   todos.add(title, description);
  // }

  if (req.method === "POST") {
    todos.add(req.body.title, req.body.description);
    return res.status(200).json({ data: todos.getAll() });
  }

  if (req.method == "GET") {
    return res.status(200).json({ data: todos.getAll() });
  }

  if (req.method == "DELETE") {
    if (!req.body.id) {
      return res.status(400).json({
        status: "error",
        error: "req body cannot be empty",
      });
    } else {
      todos.removeById(req.body.id);
    }

    return res.status(200).json({ data: todos.getAll() });
  }
}