const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("shop", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối thành công tới database!');
      } catch (error) {
        console.error('Không thể kết nối tới database: ', error);
      }
};

export default connectDb;
