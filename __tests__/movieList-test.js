const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

// const {addMovie, deleteMovie, crossOffMovie} = require('../functions')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeEach(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit
})

test('movie functionality', async () => {
    await driver.findElement(By.xpath(`//input`)).sendKeys('The Batman')
    await driver.findElement(By.xpath(`//button[text()='Add']`)).click()
    await driver.sleep(3000)

    await driver.findElement(By.xpath(`//li/span[text()='The Batman']`)).click()
    await driver.sleep(3000)

    await driver.findElement(By.id('TheBatman')).click()
    await driver.sleep(3000)
})


// test('Add a movie', async () => {
//     await addMovie(driver)
// })

// test('Cross off Movie', async () => {
//     await crossOffMovie(driver)
// })