// req => middleware -> res
// next passes the execution to the next function for example the 

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

module.exports = logger;