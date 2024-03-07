import express from 'express';
import bodyParser from 'body-parser';
import { agents } from '../model/index.js';

const agentRouter = express.Router()

// FETCH ALL AGENTS
agentRouter.get('/', (req, res) => {
    try {
        agents.fetchAgents(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Retrieve Agents"
        })
    }
})
agentRouter.get('/:id', (req, res) => {
    try {
        agents.fetchAgent(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Retrieve an Agent"
        })
    }
})
agentRouter.post('/addAgent', bodyParser.json(), (req, res) => {
    try {
        agents.addAgents(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Add an Agent"
        })
    }
})
agentRouter.patch('/updateAgent/:id', bodyParser.json(), (req, res) => {
    try {
        agents.updateAgent(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Update an Agent"
        })
    }
})
agentRouter.delete('/deleteAgent/:id', bodyParser.json(), (req, res)=> {
    try {
        agents.deleteAgent(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Delete an Agent"
        })
    }
})
export {
    agentRouter,
    express
}