import expess from "express";

let configViewEngine = (app) => {
  //Config
  app.use(expess.static("./src/public"));

  //Config view engine

  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;
