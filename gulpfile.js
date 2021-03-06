const gulp = require('gulp')
const utils = require('./src/utils')
const removeTypes = require('./src/remove-types')
const path = require('path')

const root = path.resolve(__dirname).split('node_modules')[0]
const source = root + '\src'

gulp.task('default', () => {
  removeTypes.createAndScan(source).then(() => {
    gulp.watch('../../src/**/**', () => {
      if (!utils.dirExists(source)) {
        console.log('src does not exists!')
        return
      } else if (utils.dirExists(source) && !utils.dirExists(source.replace('src', 'dist'))) {
        return removeTypes.createAndScan(source)
      } else {
        return removeTypes.createAndScan(source)
      }
    })
  })
})
