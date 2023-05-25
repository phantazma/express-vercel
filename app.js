const { getRouter } = require("stremio-addon-sdk");
const addonInterface = require("index");
const router = getRouter(addonInterface);
module.exports = function(req, res) {
    router(req, res, function() {
        res.statusCode = 404;
        res.end();
    });
}
