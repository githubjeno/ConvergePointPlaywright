const{HomePage}=require('../Pages/HomePage')

   class PomManager{
    constructor(page)
    {
    this.homePage= new HomePage(page)
   }


getHomePage()
{
    return this.homePage;
}
}module.exports = {HomePage}