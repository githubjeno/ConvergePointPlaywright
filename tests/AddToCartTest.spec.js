const{test,expect}=require('@playwright/test')
const{PomManager}=require('../Pages/PomManager')

test('TestingAddToCartFeature',async ({page})=>
{
    
    const POMManager=new PomManager(page)
    const homePage= POMManager.getHomePage()
    
    await  homePage.launchUrl()
    await  homePage.Click_On_Fashion_And_On_Mens()
    await  homePage.customer_Review_Of_4_Stars_And_Up()
    
    await homePage.filter_by_price_1000_To_1500()
   // await page.use()
    await homePage.allen_Solly_Brand_Selection()
    const products=await homePage.total_No_Of_Products()
    console.log(products.count())
    await homePage.adding_Second_Product_To_Cart()

    

    
    
})