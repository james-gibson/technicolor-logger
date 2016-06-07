var log = require('./index.js');

var config ={
    "loggers": [{
        "name": "console",
        "levels": [
            "INFO",
            "WARN",
            "DEBUG",
            "ERROR",
            "FATAL"
        ],
        "colors": [{
            "level": "INFO",
            "color": "gray"
        }]
    }]
};

log.init(config);

log.info('test');
