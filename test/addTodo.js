const {Builder, By, Key } = require('selenium-webdriver');
// Diffrent asserts
const assert = require ('assert');
const should = require ('chai').should();
const expect = require('chai').expect;

// Mocha
describe('Add a todo to Lambda sample app', () =>{
    it('Successfully adds a todo', async () => {
        let driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        // following code uses the enter button in textbox instead of clicking on add button  
        //await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium',Key.ENTER);

        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium');
        await driver.findElement(By.css('#addbutton')).click();

        // Find what we just put into the list
        let todoText = await driver.findElement(By.css('li:last-child')).getText();
        
        // get the Third item of the list
        let items = await driver.findElements(By.css('li'));
        let thirdText = await items[2].getText();
        console.log(thirdText);
        
        // Asserts
        assert.equal(todoText,'Learn Selenium'); // Builtin Node
        expect(todoText).to.equal('Learn Selenium'); // Chai expect
        todoText.should.equal('Learn Selenium'); // chai should

        // Close browser and exit selenium
        await driver.quit();

    });
    it('This test should be pending');
});