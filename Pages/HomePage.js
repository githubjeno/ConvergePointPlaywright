const{expect}=require('@playwright/test')


class HomePage{

    
    
  constructor(page,context)
  {
      this.page=page
      this.browserContext=context
      this.fashion="//div[@id='nav-xshop']/a[contains(text(),'Fashion')]"
   // this.fashion= this.page.locator('#nav-xshop a:contains("Fashion")')
      this.mens="li#sobe_d_b_1_1 .sl-sobe-carousel-sub-card-image img"
      this.averageCustomerReview4StarsAndUp="div[aria-label='4 Stars & Up']"
      this.filterByPrice1000to1500="//span[contains(text(),'₹1,000 - ₹1,500')]/parent::a"
      this.pumaCheckBox="(//span[text()='Puma'])[3]"
      this.brand="//*[@id='brandsRefinements']/div/a/i"
      //this.allensolly="//*[@id='brandsRefinements']/descendant::i[3]"
      //this.allenSolly= "//*[@id='p_123/398346']/span/a"
         this.allenSolly="(//span[text()='Allen Solly'])"
      //page.locator("//ul[1]/span[1]/span[3]/li/span/a/div/label/i[@xpath='1']")
      this.noOfProducts=".s-main-slot.s-result-list.s-search-results.sg-row div[data-component-type=s-search-result]"
      this.sizeDropDown="//span[text()='Price']"
      this.addToCart="input#add-to-cart-button"
  }  
   
  
   
  async launchUrl()
     {
          await this.page.goto('https://www.amazon.in/')
          //await page.page.waitForTimeout(10000)
          await expect(this.page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
          console.log('url launched')

          
     }
     async  Click_On_Fashion_And_On_Mens()
     {
        await this.page.click(this.fashion);
        await expect(this.page.getByAltText('Amazon Fashion')).toBeVisible
        console.log("Fashion selected")

        await this.page.click(this.mens);
        await expect(this.page).toHaveTitle('Clothing for Men online : Best brands at best prices only on Amazon.in')
        console.log("men's section selected")
           
     }
    async  customer_Review_Of_4_Stars_And_Up()
    {
        await  this.page.click(this.averageCustomerReview4StarsAndUp) 
        
    }

    async filter_by_price_Thousand_To_Thousandfivehundred()
    {
        //await this.page.locator(this.filterByPrice1000to1500).click({force:true})
        //await  this.page.waitForSelector(this.filterByPrice1000to1500,{force:})
        try {
            await this.page.click(this.filterByPrice1000to1500,{force:true})
        } catch (error) { 
            await this.page.click(this.sizeDropDown)
            await this.page.click(this.filterByPrice1000to1500,{force:true})

        }
    }
    async allen_Solly_Brand_Selection()
    {
        
        try {
             const allenSollylinkText= await this.page.locator(this.allenSolly)
              await allenSollylinkText.last().click();
            //await this.page.locator.click(this.allenSolly,{force:true})
        } catch (error) { 
            await this.page.click(this.brand,{force:true})
            //await this.page.click(this.allenSolly,{force:true})
            const allenSollylinkText= await this.page.locator(this.allenSolly)
              await allenSollylinkText.last().click();


        }
    }
    async total_No_Of_Products()
    {
         await this.page.waitForTimeout(3000)
         const  products= await this.page.locator(this.noOfProducts)
         await this.page.screenshot({path: 'AllProducts.png', fullPage: true})
         const productsCount= await products.count()
         
         console.log(productsCount)
         
        
            
    }
    async adding_Second_Product_To_Cart()
    {   //img.s-image     (//img[@class='s-image'])
        const  products= await this.page.locator(this.noOfProducts).nth(1)
        const pagePromise=this.browserContext.waitForEvent('page')
        await products.locator("img.s-image").click()
        const newPage=await pagePromise
        await newPage.locator(this.addToCart).click()
        
        //products.nth(1).click()
    }

}
module.exports={HomePage};