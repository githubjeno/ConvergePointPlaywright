const common = `
    
   
    --require src/test/steps/*.js
`
module.exports = {
  default: `${common} src\test\features\*.feature`,
}