function _cleanAddress(address) {
  //Logger.log("running function, adress is:" + address);
  //Logger.log("and type is" + typeof address);

  var rows = [];
  var cols = [];

  /* sets empty cells. could be changed to '' or ' ' depending how we want to handle blanks in Mailchimp. */

  var streetAddress = "unknown address";
  var city = "unknown city";
  var state = "unkown state";
  var zipCode = "unkown zip"; 
  var county = "unkown county";

  /*get geocoder*/ 
  var geocoder = Maps.newGeocoder().setBounds( 43.498449, -96.454251, 47.900570, -90.567619).setRegion('us');

  {
    var response = geocoder.geocode(address);
    if (response.status == "OK"){

      if (response.results.length == 1){
          var addressComponents = response.results[0].address_components;
          addressComponents.forEach((component) => {
        if (component.types.includes("street_number")) {
          streetAddress = component.long_name;
        } else if (component.types.includes("route")) {
          streetAddress += " " + component.long_name;
        } else if (component.types.includes("locality")) {
          city = component.long_name;
        } else if (component.types.includes("administrative_area_level_1")) {
          state = component.short_name;
        } else if (component.types.includes("postal_code")) {
          zipCode = component.long_name;
        } else if (component.types.includes("administrative_area_level_2")) {
          county = component.long_name;
        }});
      cols.push(streetAddress);
      cols.push(city);
      cols.push(state);
      cols.push(zipCode);
      cols.push(county);
      rows.push(cols);
      }
      else {

        /* when the geocoder has multipe results, user can step in and see which one makes more sense based on other data about the pettition signer*/ 

        cols.push("multiple results");
        rows.push(cols);
      }
    
    }
    else {
      cols.push(response.status);
      rows.push(cols);
    }
  }
  return rows;
}

/**
 * Calls geocoder to confirm address existence and reformats address.
 *
 * @param {address} the address, in any format. 
 * @param {celltwo} a boolean denoting whether and address has been geocoded yet 
 * @return an array with formatted address, city, state, zip and county. any feilds the geocoder can't find return "unknown" 
 * @cleanAddress 
 */

function cleanAddress(address) {
  var currentStatus = SpreadsheetApp.getActiveSheet().getRange("A1").getValue();
  Logger.log(currentStatus);
  
  /* Using a cell to toggle the function on and off is a simple solution to problem of goecoder being called too many times and incurring unneceary costs. A more developed version could add a UI for this*/ 

  if (currentStatus != "GO" || address.length == 0 || address == " "){
    Logger.log("stopped")
    return; 
  }
  else {
    return _cleanAddress(address);
  }

}
