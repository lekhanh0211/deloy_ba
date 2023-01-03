import express from "express";
import categoryController from "../controller/categoryController";
import productController from "../controller/productController"

let router = express.Router();

let initWebRouter = (app) => {

  router.get("/",categoryController.category);
  //Rest API category
  router.get("/api/getCate", categoryController.getAll);
  router.post("/api/createCate", categoryController.createCate);
  router.put("/api/updateCate", categoryController.updateCate);
  router.delete("/api/deleteCate", categoryController.deleteCate);

//Rest API product
router.get("/api/getPro", productController.getAll);
router.post("/api/createPro", productController.createPro);
router.put("/api/updatePro", productController.updatePro);
router.delete("/api/deletePro", productController.deletePro);


  return app.use("/", router);
};

export default initWebRouter;
