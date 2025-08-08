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
  },

  async CreateSolution(req) {
  try {
    const {
      description,
      entity_horizontal,
      solution_name,
      title,
      business_problem,
      solution_approach,
      impact,
      owners,
      contributors,
      confluencelink,
      addtechstack,
      demovideolink,
      pdfdocument,
      pptdocument,
    } = req.body;

    // Validation (optional but recommended)
    if (
      !description || !entity_horizontal || !solution_name ||
      !title || !business_problem || !solution_approach || !impact ||
      !owners || !contributors || !addtechstack
    ) {
      // return res.status(400).json({ message: "All mandatory fields are required." });
      return { message: "All mandatory fields are required." }
    }

    const insertQuery = `
      INSERT INTO solutiondetails (
        description,
        entity_horizontal,
        solution_name,
        title,
        business_problem,
        solution_approach,
        impact,
        owners,
        contributors,
        confluencelink,
        addtechstack,
        demovideolink,
        pdfdocument,
        pptdocument
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7,
        $8::jsonb, $9::jsonb,
        $10, $11::jsonb, $12, $13, $14
      ) RETURNING *
    `;

    const values = [
      description,
      entity_horizontal,
      solution_name,
      title,
      business_problem,
      solution_approach,
      impact,
      JSON.stringify(owners),
      JSON.stringify(contributors),
      confluencelink,
      JSON.stringify(addtechstack),
      demovideolink,
      pdfdocument,
      pptdocument
    ];

    const result = await pool.query(insertQuery, values);
    return result.rows[0]
    // res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Insert Error:", error.message);
    return { error: "Server error inserting solution." }
    // res.status(500).json({ error: "Server error inserting solution." });
  }
  }
};

export default SolutionService;