module.exports = {
  // presets: ['@vue/cli-plugin-babel/preset'],
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        polyfills: [
          'es.symbol',
          'es.map',
          'es.array.iterator',
          'es.object.assign',
          'es.array.iterator',
          'es.promise',
        ],
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
