import { connection as db } from "../config/index.js"
class Agents {
    fetchAgents(req, res) {
        const qry = `
        SELECT agentID, agentCodeName, agentImage,
        agentRole, agentPrice
        FROM Agents;
        `
        db.query(qry, (err, results) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    fetchAgent(req, res) {
        const qry = `
        SELECT agentID, agentCodeName, agentImage,
        agentRole, agentPrice
        FROM Agents
        WHERE agentID = ?;
        `
        db.query(qry, [req.params.id], (err, result) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result,
            });
        });
    }
    addAgents(req, res) {
        const qry = `
        INSERT INTO Agents
        SET ?'
        `
        db.query(qry, [req.body], (err) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "A New Agent Has Been Added"
            });
        });
    }
    deleteAgent(req, res) {
        const qry = `
            delete from Agents
            where agentID = ${req.params.id}
            `;
        db.query(qry, [req.body], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "An Agent Has Been Removed.",
          });
        });
      }
      updateAgent(req, res) {
        const qry = `
            update Agents
            set ?
            where agentID = ${req.params.id}
            `;
        db.query(qry, [req.body], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "An Agent's Details Have Been Updated.",
          });
        });
      }
}
export {
    Agents
}