import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  patchUser,
  getUserMiddleWare,
} from "../controller/user.js";

export const accountRouter = express.Router();

accountRouter.get("/", getAllUsers);
accountRouter.get("/:id", getUser);
accountRouter.post("/", createUser);
accountRouter.put("/:id", getUserMiddleWare, patchUser);
accountRouter.delete("/:id", getUserMiddleWare, deleteUser);
