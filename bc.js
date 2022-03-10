import {Selector} from 'testcafe';

require("dotenv").config();



fixture('GAP')
.page('https://the-internet.herokuapp.com/login')

.beforeEach(async t=>{

});

test('Slowness',async t =>{
    
    await t
    //.wait(10000)
    //.click(XPathSelector('/html/body/div[1]/main/div[6]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/a/div/img'))
    .typeText('#username','tomsmith')
    .typeText('#password','SuperSecretPassword!')
    .click('#login > button')
    
    
   
   // .maximizeWindow()
   
    // .switchToIframe('#frame-one-id')
    // .click('#firstname')
    // .typeText('#firstname','prateeks@lambdatest.com')
    // .resizeWindow(1920, 1080)
    // .typeText('#lastname','Singh')
    // .switchToMainWindow()
    // .switchToIframe('#frame-two-id')
    // .click('#root > div > div > div > button > span.MuiButton-label-143')
    // .switchToMainWindow()
    // .switchToIframe('#frame-three-id')
    // .typeText('#text-id','This is Prateek Accessing Iframes on Lambda as well as on local system')
    // .switchToIframe('#frame-four-id')
    // .click('#root > div > div > div > button > span.MuiButton-label-143')



    // .navigateTo('https://www.economist.com/science-and-technology/2020/08/25/robots-that-can-walk-are-now-striding-to-market?amp=1')
    // .wait(10000)
    // .click('#__next > div.masthead-wrapper > header > nav > a.ds-call-to-action')
    // .wait(30000)
    

});