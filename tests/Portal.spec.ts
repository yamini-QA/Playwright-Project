import {test} from '@playwright/test';
import {LoginPage} from '../Pages/Loginpage';
let page;  let login;
test('log into application',async ({browser})=>{
    //create a new incognito browser context
    const context=await browser.newContext({
        //Browser instance is shared between all tests in the same worker - 
        //this makes testing efficient. However, 
        //each test runs in an isolated BrowserContext and gets a fresh environment.
    })
    //create a new page in pristine context
    page=await context.newPage();
    //create an object for login page 
    login=new LoginPage(page);
    // accessing the methods of that page class through that object 
     await login.gotoLoginPage();
    await login.login_with_Validcrdentials();
    
    await page.waitForTimeout(5000);
   
  })