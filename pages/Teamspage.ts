import{Page,Locator} from '@playwright/test';
export class TeamsPage2{
   // private readonly togglebutton= page.locator('//*[@data-id="12"]/div/div/div/button');
    private readonly clickteambutton= 'Synergy12233';
    private readonly createsubteambutton='#addTeamButton';
    private readonly teamname='//*[@placeholder="Team Name"]';
    private readonly clickmanagedby='#userSearch';
    private readonly selectmanagedby='Adam Carter';
    private readonly savebutton='#saveTeamButton';

    constructor(public  page:Page){
        this.page=page;
    }
   async Addsubteam_under_department(stname)
   {
        await this.page.goto('https://qa-portal.conservice.com/user-permissions-management/usermanagement/teams');
        await this.page.getByText(this.clickteambutton).click(); 
        await this.page.locator(this.createsubteambutton).click();
        await this.page.locator(this.teamname).fill(stname);
        await this.page.locator(this.clickmanagedby).first().click();
        await this.page.getByText(this.selectmanagedby).click();
        await this.page.locator(this.savebutton).click();
    }
}