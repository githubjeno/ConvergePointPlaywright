Feature: Add To Cart Function
Scenario: Filtering and Adding Product to cart Function
Given user  navigates to Amazon.in homepage
When  user Click on Fashion and Click on Mens
And  Filter by Average customer review of 4 stars and Up
And   Filter by price Thousand to ThousandFiveHundred
And Select Puma and Allen Solly in Brands
And Count the number of results in the first page and log it to console
And Click second product and add it to Cart
Then Validate Number on the Cart is increased by 1

