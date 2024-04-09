const playwright = require("playwright")
const { Before, After, BeforeAll, AfterAll } = require("@cucumber/cucumber")



BeforeAll(async () => {
  console.log("Launch Browser")
  global.browser = await playwright["chromium"].launch({ headless: false })
})

Before(async () => {
    console.log("Create new context page")
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
   // await global.page.waitForTimeout(10000)
  })

  After(async () => {
    console.log("Close context and page")
    await global.context.close()
    await global.page.close()
  })

AfterAll(async () => {
  console.log("Close Browser")
  await global.browser.close()
})



