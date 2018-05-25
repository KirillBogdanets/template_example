const gulp = require("gulp");
const envs = require("./protractor.environments");
const gulpTasks = require("template").tasks(gulp, envs);