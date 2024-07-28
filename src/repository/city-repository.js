const { City } = require("../models/index");

async function InsertData(cityName) {
  try {
    await City.create({ name: cityName });
  } catch (err) {
    return err;
  }
}

async function FindData(cityName) {
  if (!cityName) {
    return await City.findAll({
      raw: true,
    });
  } else {
    return await City.findOne({
      where: { name: cityName },
      raw: true,
    });
  }
}

async function DeleteData(cityId) {
  try {
    const city = await City.findOne({ where: { name: cityName } });
    if (!city) return -1;
    await city.destroy({ where: { id: cityId } });
    return 1;
  } catch (error) {
    console.log(error);
  }
}

async function UpdateData(oldCityId, newCityName) {
  try {
    const city = await City.findOne({ where: { name: oldCityId } });
    if (!city) return -1;
    city.name = newCityName;
    await city.save();
    return 1;
  } catch (error) {
    return error;
  }
}

module.exports.InsertData = InsertData;
module.exports.FindData = FindData;
module.exports.DeleteData = DeleteData;
module.exports.UpdateData = UpdateData;
