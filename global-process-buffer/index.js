// instead of

process.env.PORT

// read from config utility

const { config } = require('./util');

config.port