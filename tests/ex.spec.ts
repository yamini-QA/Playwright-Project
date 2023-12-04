import{Page,test,expect} from '@playwright/test';
// import { envSchema } from '../tests/envSchema';
// require('dotenv').config();

test('basic test',async({page})=>{
    
    //let env = envSchema.parse(process.env); 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.fill("#username",env.USERNAME);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    // await page.fill("#password",env.PASSWORD);
    await page.locator("//*[text()=' Login ']").click();
    
   
});

    
