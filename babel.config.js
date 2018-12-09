module.exports = function(api) {

    // dynamic config: require cache opt
    // gets cleared on environment change
    api.cache.invalidate(() => process.env.NODE_ENV);

    const presets = {
        presets: [
            ['@babel/preset-env'],
        ],
    };

    return presets;

};