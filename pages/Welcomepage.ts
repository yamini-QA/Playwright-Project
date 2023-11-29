const{ test,expect} =require('@playwright/test');
import { Page,Locator } from "@playwright/test";
export class WelcomePage{
    constructor(public page:Page){
        this.page=page;
    }
    async NavigatetoUMS():Promise<void>
    {
       await  this.page.getByTestId('AppsIcon').first().click();
       await  this. page.getByText('User Permissions Management').click();
       
    }
}