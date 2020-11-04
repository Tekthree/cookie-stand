var dubaiLocation = {
  Name: 'dubai',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSale: 1.2,
  custPerHourArray: [],
  cookiesSoldEachHour: [],
  allCookiesNeeded: 0,
  
 
  makeCustPerHour: function(){
    //find customers per hour by taking in min and max, running it through a function to get Customers per hour
    for(var i=0; i<allHours.length; i++){
      
        var randomCustomerNumnber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers); //The maximum is inclusive and the minimum is inclusive
        this.custPerHourArray.push(randomCustomerNumnber);
      }
  },

  
  
  makeCookieSoldEachHour: function(){
    // loop over customers per hour array and times it to average cookie sale and push into cookies sold each hour array
    for(var i=0; i<this.custPerHourArray.length; i++){

      var cookieSoldProduct = this.custPerHourArray[i] * this.avgCookieSale;
      this.cookiesSoldEachHour.push(Math.round(cookieSoldProduct));
      // add all cookies needed
      this.allCookiesNeeded = this.allCookiesNeeded + Math.round(cookieSoldProduct);

    }



  },

  render: function(){
    // loop over cookies each hour the create and append to page
    // render to the dom
    var dubaiList = document.getElementById('dubai');
    var dubaiSection = document.getElementById('dubai-list');
    //make h2
    var h2Element = document.createElement('h2');
    //insert text
    h2Element.textContent = this.Name;
    // append to the page
    dubaiSection.appendChild(h2Element);
    
    for(var i=0; i<this.cookiesSoldEachHour.length;i++){
      var liElement = document.createElement('li');
      liElement.textContent = this.cookiesSoldEachHour[i]
      dubaiList.appendChild(liElement);
    }
    




  },
  

}


dubaiLocation.makeCustPerHour();
dubaiLocation.makeCookieSoldEachHour();
dubaiLocation.render();

//console.log(dubaiLocation.makeCookieSoldEachHour);
console.log(dubaiLocation.allCookiesNeeded);
console.log(dubaiLocation.cookiesSoldEachHour);
console.log(dubaiLocation.custPerHourArray);