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
        WHERE Agents = ${req.params.id};
        `
        db.query(qry, (err, result) => {
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
                msg: "New Agent was Added"
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
            msg: "The agent has been removed.",
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
            msg: "The agent's details have been updated.",
          });
        });
      }
}
export {
    Agents
}