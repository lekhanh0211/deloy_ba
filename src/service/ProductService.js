import db from "../models";

let get = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let pro = await db.Product.findAll({
        raw: true,
      });
      resolve(pro);
    } catch (error) {
      reject(error);
    }
  });
};

let create = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Product.create({
        name: data.name,
        url: data.url,
        catId: data.catId,
        price: data.price,
        salePrice: data.salePrice,
        desc: data.desc,
        image: data.image,
        moreImage: data.moreImage,
        status: data.status,
      });
      resolve({
        statusCode: 200,
        message: "Thêm mới thành công!",
      });
    } catch (error) {
      reject(error);
    }
  });
};
let getById = (pId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let pro = await db.Product.findOne({
        where: { id: pId },
        raw: true,
      });
      resolve(pro);
    } catch (error) {
      reject(error);
    }
  });
};
let update = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          statusCode: 300,
          message: "Bạn phải truyền vào tham số",
        });
      }
      let pro = await db.Product.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (pro) {
        (pro.name = data.name),
          (pro.url = data.url),
          (pro.catId = data.catId),
          (pro.price = data.price),
          (pro.salePrice = data.salePrice),
          (pro.desc = data.desc),
          (pro.image = data.image),
          (pro.moreImage = data.moreImage),
          (pro.status = data.status),
          await pro.save();
        resolve({
          statusCode: 200,
          message: "Cập nhật thành công!",
        });
        resolve();
      } else {
        resolve({
          statusCode: 300,
          message: "Update failed!",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let del = (pId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let pro = await db.Product.findOne({
        where: { id: pId },
        raw: false,
      });
      if (!pro) {
        resolve({
          statusCode: 400,
          message: "Bạn phải truyền vào tham số",
        });
      }
      await db.Product.destroy({
        where: { id: pId },
        raw: false,
      });
      resolve({
        statusCode: 200,
        message: "Delete Product is success!!!",
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  get,
  getById,
  create,
  update,
  del,
};
