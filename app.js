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








// Tokyo location




var tokyoLocation = {
  Name: 'tokyo',
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
    var tokyoList = document.getElementById('tokyo');
    var tokyoSection = document.getElementById('tokyo-list');
    //make h2
    var h2Element = document.createElement('h2');
    //insert text
    h2Element.textContent = this.Name;
    // append to the page
    tokyoSection.appendChild(h2Element);
    
    for(var i=0; i<this.cookiesSoldEachHour.length;i++){
      var liElement = document.createElement('li');
      liElement.textContent = this.cookiesSoldEachHour[i]
      tokyoList.appendChild(liElement);
    }
    




  },
  

}


tokyoLocation.makeCustPerHour();
tokyoLocation.makeCookieSoldEachHour();
tokyoLocation.render();

//console.log(tokyoLocation.makeCookieSoldEachHour);
console.log(tokyoLocation.allCookiesNeeded);
console.log(tokyoLocation.cookiesSoldEachHour);
console.log(tokyoLocation.custPerHourArray);



// Dubai location

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


// Paris Location


var parisLocation = {
  Name: 'paris',
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
    var parisList = document.getElementById('paris');
    var parisSection = document.getElementById('paris-list');
    //make h2
    var h2Element = document.createElement('h2');
    //insert text
    h2Element.textContent = this.Name;
    // append to the page
    parisSection.appendChild(h2Element);
    
    for(var i=0; i<this.cookiesSoldEachHour.length;i++){
      var liElement = document.createElement('li');
      liElement.textContent = this.cookiesSoldEachHour[i]
      parisList.appendChild(liElement);
    }
    




  },
  

}


parisLocation.makeCustPerHour();
parisLocation.makeCookieSoldEachHour();
parisLocation.render();

//console.log(parisLocation.makeCookieSoldEachHour);
console.log(parisLocation.allCookiesNeeded);
console.log(parisLocation.cookiesSoldEachHour);
console.log(parisLocation.custPerHourArray);



//lima location


var limaLocation = {
  Name: 'lima',
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
    var limaList = document.getElementById('lima');
    var limaSection = document.getElementById('lima-list');
    //make h2
    var h2Element = document.createElement('h2');
    //insert text
    h2Element.textContent = this.Name;
    // append to the page
    limaSection.appendChild(h2Element);
    
    for(var i=0; i<this.cookiesSoldEachHour.length;i++){
      var liElement = document.createElement('li');
      liElement.textContent = this.cookiesSoldEachHour[i]
      limaList.appendChild(liElement);
    }
    




  },
  

}


limaLocation.makeCustPerHour();
limaLocation.makeCookieSoldEachHour();
limaLocation.render();

//console.log(limaLocation.makeCookieSoldEachHour);
console.log(limaLocation.allCookiesNeeded);
console.log(limaLocation.cookiesSoldEachHour);
console.log(limaLocation.custPerHourArray);