import {Selector} from 'testcafe';
require("dotenv").config();


fixture('iFrameTest')
.page('http://localhost:3000/iframes')

.beforeEach(async t=>{

});

test('click on login',async t =>{
    await t
    .maximizeWindow()
    .switchToIframe('#frame-one-id')
    .click('#firstname')
    .typeText('#firstname','prateeks@lambdatest.com')
    .resizeWindow(1920, 1080)
    .typeText('#lastname','Singh')
    .switchToMainWindow()
    .switchToIframe('#frame-two-id')
    .click('#root > div > div > div > button > span.MuiButton-label-143')
    .switchToMainWindow()
    .switchToIframe('#frame-three-id')
    .typeText('#text-id','This is Prateek Accessing Iframes on Lambda as well as on local system')
    .switchToIframe('#frame-four-id')
    .click('#root > div > div > div > button > span.MuiButton-label-143')



    // .navigateTo('https://www.economist.com/science-and-technology/2020/08/25/robots-that-can-walk-are-now-striding-to-market?amp=1')
    // .wait(10000)
    // .click('#__next > div.masthead-wrapper > header > nav > a.ds-call-to-action')
    // .wait(30000)
    

});