import productService from "../service/ProductService";

let getAll = async (req, res) => {
  let dataPro = await productService.get();

  return res.status(200).json({
    statusCode: 200,
    message: "OK",
    obj: dataPro,
  });
};

let createPro = async (req, res) => {
    let data = req.body;
    let message = await productService.create(data);
    return res.status(200).json(message);
};

let updatePro = async (req, res) => {
    let data = req.body;
    let message = await productService.update(data);
    return res.status(200).json(message);
};


let deletePro = async (req, res) => {
    let pId = req.body.id;
    if(!pId){
        return res.status(200).json({
            statusCode:300,
            message:"Bạn chưa truyền tham số vào!"
        })
    }
    let message = await productService.del(pId);
    return res.status(200).json(message)
};
module.exports = {
  getAll,
  createPro,
  updatePro,
  deletePro,
};
