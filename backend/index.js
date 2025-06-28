const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");

const path = require("path");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// MiddleWare
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Create Database Connection  */
const db = require("./config/db");
/**Make Database Connection Avaiable in globally */
global.db = db;
/** */

// Simple Route to Check Server
app.get("/", (req, res) => {
  res.send("Hello Backend 🚀🚀🚀🚀🚀");
});

/**Call Routes.. */

const admin = require("./routes/admin");


/**----------------------------------------------------Team ----------------------------------------------------*/

const teamSectionTitle = require("./routes/team/teamSectionTitle");
const teamMemberName = require("./routes/team/teamMemberName");
 

app.use("/admin", admin);


/**----------------------------------------------------Team ----------------------------------------------------*/
app.use("/team-section-title", teamSectionTitle);
app.use("/team-member-name", teamMemberName);




// Static Images
/**--------------------------------------------------Home-------------------------------------------------- */
app.use(
  "/Images/TeamImages/TeamMemberName",
  express.static(path.join(__dirname, "Images/TeamImages/TeamMemberName"))
);




/**---------------Start Server ---------------*/
app.listen(port, () => {
  console.log(`Server Running On Port: ${port}`);
});

// app.listen(port, '0.0.0.0', () => {
//   console.log(`Server Running On Port: ${port}`);
// });