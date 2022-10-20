"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("./Controller/postController");
const userController_1 = require("./Controller/userController");
const router = (0, express_1.Router)();
router.get('/gymclass', postController_1.getGymClass);
router.post('/gymclass', postController_1.postGymClass);
router.get('/user', userController_1.getUser);
router.post('/user', userController_1.postUser);
router.put('/user', userController_1.updateUser);
exports.default = router;