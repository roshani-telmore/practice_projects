import todos from "services/todos.service";

export default function handler(req, res) {
  console.log("req", req.body);
  const id = req.query.id;
  if (req.method === "GET") {
    const foundTask = todos.findById(id);
    console.log("found task===", foundTask);
    return res.status(200).json({ data: foundTask });
  }

  if (req.method === "PUT") {
    // const foundTask = todos.findById(id);
    // console.log("found task===", foundTask);
    // foundTask["description"] = req.body.description;
    todos.updateById(id, req.body.description);
    return res.status(200).json({ data: todos.getAll() });
  }
}
