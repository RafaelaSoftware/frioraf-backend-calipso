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

const addFilter = (filter, field, value, type) => {
  const prefix = filter === "" ? "WHERE" : "AND";

  let condition;
  if (type === "number" || type === "uuid") {
    condition = `${field} = ${type === "number" ? value : `'${value}'`}`;
  } else {
    condition = `${field} ILIKE '%${value}%'`;
  }

  filter += ` ${prefix} ${condition}`;

  return filter;
};

module.exports = {
  executeQuery,
  addFilter,
};
