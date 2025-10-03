const http = require("http"); // server qurish uchun kerak bo'ladi.
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://joni0202:joni0202@cluster0.ln19y4u.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection secceed");
      module.exports = client; // client bu Object uni .db()degan metodi yani QALAMI (CRUD) i bor, yana bu bizga rejani to'liq qo'lga olib beradi

      const app = require("./app");
      const server = http.createServer(app);
      let = PORT = 4004;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

/* 

FRONTEND DEVELOPMENT: BSSR (EJS/HTML)    |    SPA (REACT/JSON)

API: 
    1) TYPES: Traditional API, Rest API, GraphQL API ...
    2) METHOD: GET & POST
    3) STRUCTURE: Header & Body 


PATTERN: Architecture pattern & design pattern

CRUD:
GET => READ
POST => CREATE, UPDATE, DELETE


// CLUSTER => DATABASE => COLLECTION => DOCUMENT => DATASET
*/
