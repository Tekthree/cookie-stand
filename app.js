'use strick'

alert('Hi is this working');

var allHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//main objective is to find customers per hour by taking in min and max, running it through a function to get Customers per hour
// we want the product of average customers per hour and cookies per customer .

// render a list of Hours open with the total cookies per that hour
// Seattle
// 6am: 64 cookies sold  



// array of cookies sold each hour 
//credit for random number to MDN web docs

var seattleLocation = {
  cityName: 'seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSale: 6.3,
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
    var seattleList = document.getElementById('seattle');
    var seattleSection = document.getElementById('seattle-list');
    //make h2
    var h2Element = document.createElement('h2');
    //insert text
    h2Element.textContent = this.cityName;
    // append to the page
    seattleSection.appendChild(h2Element);
    
    for(var i=0; i<this.cookiesSoldEachHour.length;i++){
      var liElement = document.createElement('li');
      liElement.textContent = this.cookiesSoldEachHour[i]
      seattleList.appendChild(liElement);
    }
    




  },
  

}


seattleLocation.makeCustPerHour();
seattleLocation.makeCookieSoldEachHour();
seattleLocation.render();

//console.log(seattleLocation.makeCookieSoldEachHour);
console.log(seattleLocation.allCookiesNeeded);
console.log(seattleLocation.cookiesSoldEachHour);
console.log(seattleLocation.custPerHourArray);