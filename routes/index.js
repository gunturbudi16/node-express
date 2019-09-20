const express = require("express");

const route = express.Router();
//const filmData = require("../data/film");

const filmController=require("../controller/index")
// ~get all film~
route.get("/",filmController.getAll);

// ~get film by id~
route.get("/:id",filmController.getById);

// ~add new film~
route.post("/",filmController.addFilm);

// ~delete film by its id~
route.delete("/:id",filmController.deleteFilm) ;

// ~update a film by its id~
route.put("/:id",filmController.updateFilm);

module.exports = route;