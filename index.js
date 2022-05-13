const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log(`IT'S WORKING on http://localhost:${PORT}`));

// app.get("/puzzle", (req, res) => {
//   res.status(200).send({
//     category: "Place",
//     puzzle: "Grand Canyon",
//   });
// });

// app.post("/puzzle/:id", (res, req) => {
//   const { id } = req.params;
//   const category = req.body;
// });
