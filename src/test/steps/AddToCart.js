          
         const{test,expect, chromium}= require('@playwright/test')
         const{Given,When,Then,Before, BeforeAll,setDefaultTimeout}= require('@cucumber/cucumber')
         const { HomePage }=require('../../../Pages/HomePage');
         

         setDefaultTimeout(1000*60*2)
          
         //const poManager= new PomManager()
       

         var homePage;
          
         BeforeAll(async function(){
          browser = await chromium.launch({headless:false,channel:'chrome'});
          const context= await browser.newContext({
            screenshot: 'only-on-failure',
          })
          page = await context.newPage();
          // const  poManager = new PomManager(page);
         //  global.homePage= poManager.getHomePage(page)
            homePage= new HomePage(page,context)
           //console.log('beforeall')
          })
         

         Given('user  navigates to Amazon.in homepage', async function () {
          await homePage.launchUrl()
          console.log('homepage launched')
           
         });

   

         When('user Click on Fashion and Click on Mens',async function () {
           await  homePage.Click_On_Fashion_And_On_Mens()
         });

   

         When('Filter by Average customer review of {int} stars and Up',async function (int) {
             await homePage.customer_Review_Of_4_Stars_And_Up()
          
         });

   

         When('Filter by price Thousand to ThousandFiveHundred',async function () {
           await homePage.filter_by_price_Thousand_To_Thousandfivehundred()
          
         });

   

         When('Select Puma and Allen Solly in Brands', function () {
             homePage.allen_Solly_Brand_Selection()
         });

  

         When('Count the number of results in the first page and log it to console', function () {
               homePage.total_No_Of_Products()
               
         });


         When('Click second product and add it to Cart', function () {
               homePage.adding_Second_Product_To_Cart()
         });

   

         Then('Validate Number on the Cart is increased by {int}', function (int) {
         // Then('Validate Number on the Cart is increased by {float}', function (float) {
           
         });