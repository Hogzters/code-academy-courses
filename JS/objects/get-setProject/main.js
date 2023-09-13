const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck){
      if(typeof mealToCheck === 'string') {
        return menu._meal = mealToCheck;
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck === 'number') {
        return menu._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price){
        return `Today's Special is ${this._meal} for $${this._price}.`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    },
  };
  menu._meal = 'Pizza';
  menu._price = 5; 
  console.log(menu.todaysSpecial);
  