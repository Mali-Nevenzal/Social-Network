//import { getAllMembers, getMember, UpdateMember, deleteMember, addMember } from "../service/memberService.js";

export default class usersController {
    async getMemberById(req, res, next) {
        try {

            const testService = new TestService();
            const resultItems = await testService.getTest()
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }

    }
    async getAllMembers(req, res, next) {
        try {
            const data = await getAllMembers();
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
        catch (err) {
            res.status(404).end("Error while searching member")
            next(err);
        }
    }

    async updateMember(req, res, next) {
        try {
            const response = await UpdateMember(req.params.id, req.body);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while updating member")
            next(err);
        }
    }
    async deleteMember(req, res, next) {
        try {
            const response = await deleteMember(req.params.id);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while deleting member")
            next(err);
        }
    }
    async addMember(req, res, next) {
        try {
            const response = await addMember(req.body);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while adding member")
            next(err);
        }
    }
}