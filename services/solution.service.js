import pool from '../db.js'; // 👈 Make sure to include `.js` if `db.js` is an ES module

const SolutionService = {
  async getAllSolutions() {
    const result = await pool.query('SELECT * FROM solutiondetails');
    return result.rows;
  },

  async getSolutionById(id) {
    const result = await pool.query('SELECT * FROM solutiondetails WHERE id = $1', [id]);
    return result.rows[0];
  },
  async getfilters() {
    const result = await pool.query('SELECT * FROM filterentityhorizontal');
    console.log(result)
    return result.rows;
  },

  async getAllSolutionsbyentity(entity) {
    console.log('entiyy', entity)
const result = await pool.query(
    'SELECT * FROM solutiondetails WHERE LOWER(entity_horizontal) = LOWER($1)',
    [entity]
  );
  console.log('result', result)
  return result.rows;

    // return result.rows[0];
  }
};

export default SolutionService;