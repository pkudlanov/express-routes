module.exports = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    req.hasLogged = true;
    next();
};
