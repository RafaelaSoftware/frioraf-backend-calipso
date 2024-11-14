const { Pool } = require("pg");
const pool = new Pool({
  host: "192.168.114.16",
  port: 5432,
  database: "friorafp",
  user: "postgres",
  password: "QLMiTvvxTgqL3CG73GvU",
});

const executeQuery = async (query) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(query).catch((error) => {
      throw error;
    });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};

module.exports = {
  executeQuery,
};
