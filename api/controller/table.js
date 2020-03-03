const Table = require("../../model/table");
const Booking = require('../../model/booking');

async function getAllTables(req, res) {
  const tables = await Table.find();
  res.json(tables);
}

async function getTableDetail(req, res) {
  const query = {
    req.params.id,
    startTime:{$gte:new Date(req.query.startTime)},
    endTime:{$lte: new Date(req.query.endTime)}
  };
  const currentDate = new Date();

  const detail = await Table.find(query);
  res.json(detail);
}

module.exports = {
  getAllTables,
  getTableDetail
};
