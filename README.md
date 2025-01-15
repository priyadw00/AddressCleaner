# AddressCleaner
 Google Script created to fix bottle neck between collecting new contacts and adding them to mass emails and reduce staff data entry time. 

 ## The Problem 
 
The organization I was working for stored pettition signatures in a google sheet before uplaoding them to our email platform, Mailchimp. Adresses had been entered in a blank feild with no formatting guidelines and many had originally been handwritten. The format was not standardized; some had a street adress, city state and zip code, while others simply listed a city or state. Some listed street adress and city without zip code. In order to upload contacts to Mailchimp, we needed street adress, city, state and zip code in seperate columns. Additionally, we wanted to tag contacts by county in order to send constituents information relevant to their specific county.  Staff had previously been manually googling adresses to confirm that they were valid and to find the missing zip codes and counties, then entering that information into seperate columns before importing the contacts. This extremely time consuming process had created a bottle neck which prevented new contacts from being added to the email list in a timely manner and lowered engagement from new contacts, as well as wasting hundreds of hours of staff time. 

 ![Several rows of a spreasheet with adresses in various formats ](/asEntered.png)


## The Solution 

  To save staff time and get new contacts into the system faster, I created a custom script to automate the process of finding the address online and seperating it into the necesary columns. The script passes the user inputted data into a geocoder. The geocoder validates the address based on google maps data, and, if it is valid, returns it in standardized format - city, street, zip code, and county. The script then assigns those return values to the appropriate columns in the spreadsheet. It also had functionality to handle missing information, and to alert the user when there are two adresses which match the users input. 
  
  I experimented with a few geocoders and found Google's to be the most reliable and lowest cost for our volume of data. The solution is writted in Google Apps Script, a language specifically for developing scripts for the google suite that is similar to Javascript. 

  ![Several rows of a spreasheet with addresses seperated into multiple columns](/dataAfter.png)