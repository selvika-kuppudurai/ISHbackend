// // const SolutionService = require('../services/solution.service');
// import { Result } from 'pg';
// import SolutionService from '../services/solution.service.js'; // 👈 add `.js` at end if needed


// const SolutionController = {
//   async getAll(req, res) {
//     console.log('entity', req)
//     console.log('res', res)
//     if (req.query.entity === "All") {
//       try {
//         const data = await SolutionService.getAllSolutions();
//         //   res.status(200).json(data)
//         res.json(data);
//       } catch (err) {
//         console.error('Error fetching solutions:', err);
//         res.status(500).json({ error: 'Failed to fetch solutions' });
//       }
//     } else {
//       console.log('req.params', req.query)
//       const { entity } = req.query.entity;
//       const data = await SolutionService.getAllSolutionsbyentity(entity);
//       console.log('entoty', data)
//       res.status(200).json(data)
//     }

//   },

//   async getById(req, res) {
//     try {
//       const { id } = req.params;
//       const data = await SolutionService.getSolutionById(id);
//       if (!data) return res.status(404).json({ error: 'Solution not found' });
//       res.json(data);
//     } catch (err) {
//       res.status(500).json({ error: 'Error fetching solution' });
//     }
//   },

//   async getfilters(req, res) {
//     try {
//       const data = await SolutionService.getfilters();
//       console.log(data)
//       const result = data.map(item => item.entityorhorizontal);
//       if (!result) return res.status(404).json({ error: 'filters not found' });
//       res.json(result);
//     } catch (err) {
//       res.status(500).json({ error: 'Error fetching solution' });
//     }
//   }
// };

// // module.exports = SolutionController;
// export default SolutionController;

import SolutionService from '../services/solution.service.js';

const SolutionController = {
  async getAll(req, res) {
    try {
      const entity = req.query.entity;

      console.log('Requested entity:', entity);

      if (!entity || entity.toLowerCase() === 'all') {
        const data = await SolutionService.getAllSolutions();
        return res.status(200).json(data);
      }

      const data = await SolutionService.getAllSolutionsbyentity(entity);
      return res.status(200).json(data);

    } catch (err) {
      console.error('Error fetching solutions:', err);
      return res.status(500).json({ error: 'Failed to fetch solutions' });
    }
  },

  async insertapi(req, res){
    // req = {
    //   description: "checkingg",
    //   entity_horizontal: "Bet",
    //   solution_name: "solutionn",
    //   title: "bbbbbb",
    //   business_problem: "hhhh",
    //   solution_approach: "b",
    //   impact: "n",
    //   owners: "['selvika']",
    //   contributors: "['renuka']",
    //   confluencelink: "yyyy",
    //   addtechstack: "['UI', 'backend']",
    //   demovideolink: "yyyy",
    //   pdfdocument: 'documnet link',
    //   pptdocument: 'ppr link'
    // }
try{
        const data = await SolutionService.CreateSolution(req);
      if (!data) {
        return res.status(404).json({ error: 'Solution not found' });
      }
      return res.status(200).json(data);

} catch (err) {
      console.error('Error fetching solution by ID:', err);
      return res.status(500).json({ error: 'Error fetching solution' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      console.log('Fetching solution by ID:', id);

      const data = await SolutionService.getSolutionById(id);
      if (!data) {
        return res.status(404).json({ error: 'Solution not found' });
      }
      return res.status(200).json(data);

    } catch (err) {
      console.error('Error fetching solution by ID:', err);
      return res.status(500).json({ error: 'Error fetching solution' });
    }
  },

  async getfilters(req, res) {
    try {
      const data = await SolutionService.getfilters();
      const result = data.map(item => item.entityorhorizontal);

      if (!result.length) {
        return res.status(404).json({ error: 'Filters not found' });
      }

      return res.status(200).json(result);

    } catch (err) {
      console.error('Error fetching filters:', err);
      return res.status(500).json({ error: 'Error fetching filters' });
    }
  }
};

export default SolutionController;