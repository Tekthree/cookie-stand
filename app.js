'use strick'

// alert('Hi is this working');

var allHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];
//main objective is to find customers per hour by taking in min and max, running it through a function to get Customers per hour
// we want the product of average customers per hour and cookies per customer .

// render a list of Hours open with the total cookies per that hour
// Seattle
// 6am: 64 cookies sold  



// array of cookies sold each hour 
//credit for random number to MDN web docs
// alert('this is a test');

function Store (name,minCustomers,maxCustomers,avgCookieSale){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSale = avgCookieSale;
  this.custPerHourArray = [];
  this.cookiesSoldEachHour = [];
  this.allCookiesNeeded = 0;
  
  allStores.push(this);

}


Store.prototype.makeCustPerHour = function(){
  //find customers per hour by taking in min and max, running it through a function to get Customers per hour
  for(var i=0; i<allHours.length; i++){
    
      var randomCustomerNumnber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers); //The maximum is inclusive and the minimum is inclusive
      this.custPerHourArray.push(randomCustomerNumnber);
    }
}

  
  
Store.prototype.makeCookieSoldEachHour = function(){
  // loop over customers per hour array and times it to average cookie sale and push into cookies sold each hour array
  for(var i=0; i<this.custPerHourArray.length; i++){

    var cookieSoldProduct = this.custPerHourArray[i] * this.avgCookieSale;
    this.cookiesSoldEachHour.push(Math.round(cookieSoldProduct));
    // add all cookies needed
    this.allCookiesNeeded = this.allCookiesNeeded + Math.round(cookieSoldProduct);

  }



}

Store.prototype.render = function(){
  // loop over cookies each hour the create and append to page
  // render to the dom
 
  var storeParent = document.getElementById('seattle-list');

  //make a table row
  var trElement = document.createElement('tr');
  //append it to storeParent
  storeParent.appendChild(trElement);

  //make a td
  var tdElement = document.createElement('td')

  tdElement.textContent = this.name;
  //append it to table row
  trElement.appendChild(tdElement);



  // loop over cookies sold each hour
  // create table data
  // fill it with content
  // append it to the DOM
  for(var i=0; i<this.cookiesSoldEachHour.length;i++){
    var tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesSoldEachHour[i];
    trElement.appendChild(tdElement);
  
  
  }
  //create, and append cookie total
  tdElement = document.createElement('td');

  tdElement.textContent = this.allCookiesNeeded;

  trElement.appendChild(tdElement);

}
    
// grab tbody , make tablerow and append to parent
function makeHeaderRow(){
  var storeParent = document.getElementById('seattle-list');
  var trElement = document.createElement('tr');
  storeParent.appendChild(trElement);


  //make a table header
  var thElement = document.createElement('th');
  thElement.textContent = 'Location';
  trElement.appendChild(thElement);

  //loop over hours and add them to the table header
  for(var i = 0; i < allHours.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = allHours[i];
    trElement.appendChild(thElement);

  }



}

function makeFooterRow(){
  // loop over times then loop over totals and add them together

  var total = 0;
  //grab element, create table row and append
  var storeParent = document.getElementById('seattle-list');
  var trElement = document.createElement('tr');
  storeParent.appendChild(trElement);

  var tdElement = document.createElement('td');
  tdElement.textContent = 'Totals';
  trElement.appendChild(tdElement);

  for( var i = 0; i<allHours.length; i++){

    var totalhours = 0;

    for(var j=0; j<allStores.length; j++){
      totalhours += allStores[j].cookiesSoldEachHour[i];
      total += allStores[j].cookiesSoldEachHour[i];

    }

    var tdElement = document.createElement('td');
    tdElement.textContent = totalhours;
    trElement.appendChild(tdElement);

  }

  

}

  
  


makeHeaderRow();



// make object instance for each city
//Call methods for each city 

var seattle = new Store('Seattle', 23, 65, 6.3);
seattle.makeCustPerHour();
seattle.makeCookieSoldEachHour();
seattle.render();


var tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.makeCustPerHour();
tokyo.makeCookieSoldEachHour();
tokyo.render();


var dubai = new Store('Dubai', 11, 38, 3.7);
dubai.makeCustPerHour();
dubai.makeCookieSoldEachHour();
dubai.render();


var paris = new Store('Paris', 20, 38, 2.3);
paris.makeCustPerHour();
paris.makeCookieSoldEachHour();
paris.render();

var Lima = new Store('Lima', 2, 16, 4.6);
Lima.makeCustPerHour();
Lima.makeCookieSoldEachHour();
Lima.render();


makeFooterRow();