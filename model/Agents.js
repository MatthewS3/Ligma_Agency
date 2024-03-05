import { connection as db } from "../config/index.js"
class Agents {
    fetchAgents(req, res) {
        const qry = `
        SELECT agentID, agentCodeName, Agent Image,
        agentRole, agentPrice
        FROM Agents;
        `
        db.query(qry, (err, results) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchAgent(req, res) {
        const qry = `
        SELECT agentID, agentCodeName, Agent Image,
        agentRole, agentPrice
        WHERE Agents = ${req.params.id};
        `
        db.query(qry, (err, result) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: result[ 0 ]
            })
        })
    }
    addAgents(req, res) {
        const qry = `
        INSERT INTO Agents
        `
        db.query(qry, [req.body], (err) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "New Agent was Added"
            })
        })
    }
}
export {
    Agents
}