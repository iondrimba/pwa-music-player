module.exports = {
  globDirectory: 'public/',
  globPatterns: [
    '**/*.{png,xml,ico,html,json,txt,svg,js}'
  ],
  swDest: 'public/service-worker.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ]
};
