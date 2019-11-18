exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['./tests/spec.js'],
    capabilities: {
        browserName: 'chrome'
    }
}