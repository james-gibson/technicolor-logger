# technicolor-logger
A pretty logger for console logs in Node.


### Usage
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

Should produce:
    test

Please submit any issues or requests to GitHub issues.
