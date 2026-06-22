import express from "express";
import {
    getAllUsersJSON,
    getAllUsersHTML,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../controller/user.js";

const router = express.Router();

router.get("/", getAllUsersJSON);
router.get("/html", getAllUsersHTML);
router.post("/", createUser);

router.route("/:id")
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

export default router;
