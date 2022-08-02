const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // to fix multi-word problem
   lintOnSave: false,
})


