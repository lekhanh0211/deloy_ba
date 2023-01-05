import db from "../models";

let get = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let cate = await db.Category.findAll({
        raw: true,
        nest: true,
        attributes: {
          exclude: ['highlight', 'order', "imgBanner",'createdAt','updatedAt']
        },
     
      });
      resolve(cate);
    } catch (error) {
      reject(error);
    }
  });
};
let getById = (cId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cat = await db.Category.findOne({
        where: { id: cId },
      });
      if (cat) {
        resolve(cat);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(error);
    }
  });
};

let create = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Category.create({
        name: data.name,
        url: data.url,
        highlight: data.highlight,
        order: data.order,
        icon: data.icon,
        imgBanner: data.imgBanner,
      });
      resolve({
        statusCode: 200,
        message: "OK",
      });
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

      let cat = await db.Category.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (cat) {
        (cat.name = data.name),
          (cat.url = data.url),
          (cat.highlight = data.highlight),
          (cat.order = data.order),
          (cat.icon = data.icon),
          (cat.imgBanner = data.imgBanner);
        await cat.save();
        resolve({
          statusCode: 200,
          message: "Update success",
        });
        resolve();
      } else {
        resolve({
          statusCode: 404,
          message: "Category not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let del = (cId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cat = await db.Category.findOne({
        where: { id: cId },
        raw: false,
      });
      if (!cat) {
        resolve({
          statusCode: 400,
          message: "Category isn' t exist",
        });
      }
      await db.Category.destroy({
        where: { id: cId },
        raw: false,
      });
      resolve({
        statusCode: 200,
        message: "The category is deleted",
      });
    } catch (e) {
      reject(e);
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
