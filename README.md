# AddressCleaner
 Google Script created to help speed up the upload process of petition signatures from a google sheet to a mass email platform.  
 
 ## The Problem 
 All adresses had been entered in a blank feild with no formatting guidelines and many had originally been handwritten. The format was not standardized; some had a street adress, city state and zip code, while others simply listed a city or state. Some listed street adress and city without zip code. In order to upload contacts to mail chimp, we needed street adress, city, state and zip code all in seperate columns. Additionally, we wanted to tag mailchimp contacts by county in order to send constituents information relevant to their specific county.  Staff had previously been manually googling adresses to confirm that they were valid and to find the missing zip codes and counties, then entering that information into seperate columns. This extremely time consuming process had created a bottle neck which prevented people from being added to the email list in a timely manner. 

 [Data Before](/asEntered)

## The Solution 

  In order to save staff time, I created a google script which put the user inputted data into a geocoder. The geocoder validates the adress, and, if it is valid, returns it in standardized format - city, street, zip code. The script then assigns those return values to the appropriate columns in the spreadsheet. It is writted in google apps script, a script specifically for adding 

  [Data After](/dataAfter)