import{Page,test,expect} from '@playwright/test';
import { envSchema } from '../tests/envSchema';
require('dotenv').config();

test('basic test',async({page})=>{
    
    let env = envSchema.parse(process.env); 
    await page.goto('https://conserviceportalstaging.azureedge.net/payment-portal/status');
    await page.fill("#username",env.USERNAME);
    await page.fill("#password",env.PASSWORD);
    await page.click("#kc-login");
    
   
});

    
