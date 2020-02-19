const express=require("express");
const app =express();
const Router = express.Router();



const petController = require("../controller/petController");

Router.get ("/",petController.index);
Router.get ("/add/:nome",petController.add);
Router.get ("/show",petController.show);

module.exports = Router;

