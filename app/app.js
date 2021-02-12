"use strict";

var _express = _interopRequireDefault(require("express")),
    _helmet = _interopRequireDefault(require("helmet")),
    _cors = _interopRequireDefault(require("cors")),
    _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _helmet.default)()), app.use((0, _cors.default)());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: !0
})), app.use(bodyParser.json());
const port = 3000;
app.use('/', _routes.router), app.listen(3000), console.log("listen on port 3000");