const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const init = (app) => {
    if (typeof app.use !== 'function' ||
        typeof app.set !== 'function') {
        throw new Error('Invalid app');
    }

    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        extended: false,
    }));
    app.use(bodyParser.json());

    app.use(morgan('combined'));
};

module.exports = {
    init,
};