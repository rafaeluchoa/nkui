const shelljs = require("shelljs");

shelljs.cp("-R", "frontend/assets/*", "target/frontend/");
