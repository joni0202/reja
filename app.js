console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

//MONGO DB connect
const db = require("./server").db();
const mongodb = require("mongodb");

// 1; kirish codelari                                 - bu yerda middle ware larimizni integratsiya qilib oldik
app.use(express.static("public")); // bu middle ware DESIGNE pettern
app.use(express.json()); // bu rest API uchun hizmat qiladi
app.use(express.urlencoded({ extended: true })); // bu tranditional API uchun hizmat qiladi

// 2: session code
// 3: view ga bog'liq codelar   - biz bu yerda EJS (BSSR) integratsiyasini amalga oshirdik
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data }); // bu TRADITIONAL API
      }
    });
});

app.post("/create-item", (req, res) => {
  console.log("user entered / create-item ");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]); // bu REST API
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);

  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
