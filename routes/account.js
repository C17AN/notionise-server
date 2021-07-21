import express from "express";
import { createUser } from "../controller/user";

export const router = express.Router();
router.post("/user", createUser);
