const route = require("express").Router();

const authentifController = require("../controllers/auth");
const verif = require("../controllers/authCokies");

 route.post("/register", authentifController.register);
route.post("/login", authentifController.login);
route.get("/profil", verif, authentifController.getProfil);
route.post("/logout", authentifController.logout);
route.patch("/editprofile/:id", authentifController.editeProfil);
module.exports = route;


//(meadelwear:verif)