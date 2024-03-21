import { connection as db } from "../config/index.js"
class Agents {
    fetchAgents(req, res) {
        const qry = `
        SELECT agentID, agentCodeName, agentImage,
        agentRole, agentPrice, agentGender, agentStatus,
        agentTier
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
        agentRole, agentPrice, agentGender, agentStatus,
        agentTier, agentDesc 
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
      async updateAgent(req, res) {
        let data = req.body
        const qry = `
            update Agents
            SET ?
            WHERE agentID = ${req.params.id}
            `;
        db.query(qry, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The Agent's Details Was Updated",
          });
        });
      }
}
export {
    Agents
}