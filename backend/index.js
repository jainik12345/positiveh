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

/**----------------------------------------------------Home ----------------------------------------------------*/

const homeOurTeam = require("./routes/home/homeOurTeam");
const homeOurPortfolio = require("./routes/home/homeOurPortfolio");

/**----------------------------------------------------Team ----------------------------------------------------*/

const teamSectionTitle = require("./routes/team/teamSectionTitle");
const teamMemberName = require("./routes/team/teamMemberName");

/**----------------------------------------------------Contact ----------------------------------------------------*/
const contactDataDetails = require("./routes/contact/contactDataDetails");
const contactForm = require("./routes/contact/contactForm");

/**----------------------------------------------------Career ----------------------------------------------------*/

const careerOpportunities = require("./routes/career/careerOpportunities");

app.use("/admin", admin);

/**----------------------------------------------------Home ----------------------------------------------------*/

app.use("/homeOurTeam", homeOurTeam);
app.use("/homeOurPortfolio", homeOurPortfolio);

/**----------------------------------------------------Team ----------------------------------------------------*/
app.use("/team-section-title", teamSectionTitle);
app.use("/team-member-name", teamMemberName);

/**----------------------------------------------------Contact ----------------------------------------------------*/
app.use("/contact-data-details", contactDataDetails);
app.use("/contact-form", contactForm);

/**----------------------------------------------------Career ----------------------------------------------------*/

app.use("/careerOpportunities", careerOpportunities);

// Static Images
/**--------------------------------------------------Home-------------------------------------------------- */
app.use(
  "/Images/TeamImages/TeamMemberName",
  express.static(path.join(__dirname, "Images/TeamImages/TeamMemberName"))
);

app.use(
  "/Images/CareerImages/CareerOpportunities",
  express.static(
    path.join(__dirname, "Images/CareerImages/CareerOpportunities")
  )
);

app.use(
  "/Images/HomeImages/HomeOurPortfolio",
  express.static(path.join(__dirname, "Images/HomeImages/HomeOurPortfolio"))
);

/**---------------Start Server ---------------*/
app.listen(port, () => {
  console.log(`Server Running On Port: ${port}`);
});

// app.listen(port, '0.0.0.0', () => {
//   console.log(`Server Running On Port: ${port}`);
// });
