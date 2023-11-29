const{ test,expect} =require('@playwright/test');
const{ LoginPage } =require('../Pages/Loginpage');
const{welcomepage}=require('../Pages/Welcomepage');
let page;
let login;let wpage;let ETeamName;let Tpage;let DTeam;
test.beforeAll(async ({browser})=>{
  const context=await browser.newContext({
    viewport:{width:1280,height:720}
  })
  page=await context.newPage();
  login=new LoginPage(page);
  wpage=new welcomepage(page);
   await login.gotoLoginPage();
  await login.login_with_Validcrdentials();
  //await expect(wpage).toHaveTitle('User Permissions Management');
  await page.waitForTimeout(5000);
 await wpage.NavigatetoUMS();
 await page.waitForTimeout(3000);
})
test.afterAll(async()=>{
 // await browser.close();
 await login.logout();
 //await context.close();
 await page.close();
})
test('addteam',async({})=>{ 
  await Tpage.Addsubteam_under_department('OneMoreTest');
  await wpage.NavigatetoUMS();
  await page.waitForTimeout(5000);
})
test('deleteteam',async({})=>{
 await DTeam.DeleteTeam();
})
test('Editeteam',async({})=>{
 await ETeamName.ediTeamName();
 await page.waitForTimeout(3000);
 
})
test('addmembertoteam',async({})=>{
  await ETeamName.AddMembertoSubteam();
})