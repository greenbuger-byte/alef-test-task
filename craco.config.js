const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@alef': path.resolve(__dirname, 'src'),
            '@utils': path.resolve(__dirname, 'src', 'utils'),
        }
    }
}