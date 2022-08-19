const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const loginRouter = require("./src/routes/loginroute");
const googleLoginRouter = require("./src/routes/googleloginroute");
const signupRouter = require("./src/routes/signuproute");
const homeRouter = require("./src/routes/homeroute");
const strategyRouter = require('./src/routes/strategyroute');
const singleStrategyRouter = require("./src/routes/singlestrategyroute");
const deployRouter = require('./src/routes/deployroute');

const usersRouter = require("./src/routes/usersroute")
const singleUserRouter = require("./src/routes/singleuserroute")
const editUsersRouter = require("./src/routes/editusersroute")
const UserPurchaseRoutes = require('./src/routes/userpurchase');

require('dotenv').config();

const app = new express();

// Global objects

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(`./dist/front-end`));

app.use("/api/login", loginRouter);
app.use("/api/googlelogin", googleLoginRouter);

app.use("/api/signup", signupRouter);
app.use("/api/strategy",strategyRouter);
app.use("/api/singlestrategy",singleStrategyRouter);
app.use("/api/deploy",deployRouter);
app.use('/api/userpurchase',UserPurchaseRoutes);

app.use("/api/users", usersRouter);

app.use("/api/singleuser", singleUserRouter);
app.use("/api/edituser",editUsersRouter);


const PORT = (process.env.PORT || 5000);

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/front-end/index.html'))
});

app.listen(PORT, () => {
  console.log(`Server Ready on ${PORT}`);
});
