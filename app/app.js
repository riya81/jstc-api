"use strict";var _express=_interopRequireDefault(require("express")),_helmet=_interopRequireDefault(require("helmet")),_cors=_interopRequireDefault(require("cors")),_routes=require("./routes");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const app=(0,_express.default)();app.use((0,_helmet.default)()),app.use((0,_cors.default)());const bodyParser=require("body-parser");app.use(bodyParser.urlencoded({extended:!0})),app.use(bodyParser.json());const port=3e3;app.use("/",_routes.router),app.listen(3e3),console.log("listen on port 3000");