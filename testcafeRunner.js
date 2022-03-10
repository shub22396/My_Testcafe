const createTestCafe = require('testcafe');
require("dotenv").config();
const browsers = [
  ['lambdatest:Chrome@91.0:Windows 10','lambdatest:Safari@14.0:MacOS Big sur','lambdatest:Chrome@91.0:Windows 10','lambdatest:Safari@14.0:MacOS Big sur','lambdatest:Chrome@91.0:Windows 10','lambdatest:Safari@14.0:MacOS Big sur',
  'lambdatest:Chrome@91.0:Windows 10','lambdatest:Safari@14.0:MacOS Big sur'],
];
console.log('LT_CAPABILITY_PATH',process.env.LT_CAPABILITY_PATH);
console.log('',process.env.LT_VERBOSE);
console.log(process.env.LT_ENABLE_TRACE);
console.log(process.env.LT_TEST_NAME);


const runTest = async browser => {
  console.log('starting tests');
  await createTestCafe('localhost', 1337)
    .then(tc => {
      testcafe = tc;
      const runner = testcafe.createRunner();
      return runner
        .src(['test.js','TestLambda.js'])
        .browsers(browser)
        .run();
    })
    .then(async failedCount => {
      console.log('Tests failed: ' + failedCount);
      await testcafe.close();
      return;
    });
}

const runAllBrowsers = async () => {
  for (const browser of browsers) {
    await runTest(browser);
  }
}
runAllBrowsers();