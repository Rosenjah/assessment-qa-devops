import {Builder, Capabilities, By} from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
  driver.get('http://localhost:3000/')
})

afterAll(async () => {
  driver.quit()
})

test('Title shows up when page loads', async () => {
  const title = await driver.findElement(By.id('title'))
  const displayed = await title.isDisplayed()
  expect(displayed).toBe(true)
})

test('Characters appear when Draw is clicked', async () => {
  await driver.findElement(By.id('draw')).click()
  await driver.sleep(1500)
  const div_choices = await driver.findElement(By.id('choices')).getText()
  expect(div_choices.length).toBeGreaterThan(0)
})

test('On Draw button click it disappears', async () => {
  await driver.findElement(By.id('draw')).click()
  await driver.sleep(1500)
  const button_draw = await driver.findElement(By.id('draw')).getText()
  expect(button_draw).toBe('')
})
