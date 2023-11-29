import{Page,Locator,expect} from "@playwright/test";
export class LoginPage
{ 
    //define element locators
    private readonly usernameInput='#username';
    private readonly passwordInput='#password';
    private readonly loginButton='#kc-login'; 
    constructor(public page:Page)
    {
        this.page=page;       
    }
    
    async gotoLoginPage()
    {
        await this.page.goto('url');
    }
    async login_with_Validcrdentials():Promise<void>
    {    
     await this.page.fill(this.usernameInput,'username');
        await this.page.fill(this.passwordInput,'password');
        await this.page.click(this.loginButton);
        
    }
    async logout(){       
      await this.page.click('//button[@data-cy="avatar"]');
      await  this.page.getByText('Logout');
    }
}