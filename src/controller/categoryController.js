import categoryService from "../service/CategoryService";

let getAll = async (req, res) => {
  let data = await categoryService.get();
  //return res.render("cate.ejs", { dataCate: JSON.stringify(data) });
  return res.status(200).json({
    statusCode: 200,
    message: "OK",
    obj: data,
  });
};

let createCate = async (req, res) => {
  let message = await categoryService.create(req.body);
  return res.status(200).json(message);
};

let updateCate = async (req, res) => {
  let data = req.body;
  let message = await categoryService.update(data);
  return res.status(200).json(message);
};

let deleteCate = async (req, res) => {
  let cId = req.body.id;
  if (!cId) {
    return res.status(200).json({
      statusCode: 200,
      message: "Bạn chưa truyền vào tham số id",
    });
  }
  let message = await categoryService.del(cId);
  return res.status(200).json(message);
};
let category = (req, res) => {
  return res.render("cate.ejs", { test:"string abc" });
};

module.exports = {
  getAll,
  createCate,
  updateCate,
  deleteCate,
  category,
};
