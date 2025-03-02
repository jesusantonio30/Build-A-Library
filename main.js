class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    };
  
    get isCheckedOut() {
      return this._isCheckedOut;
    };
  
    get ratings() {
      return [...this._ratings];
    };
  
    set isCheckedOut(val) {
      if (typeof val === 'boolean'){
        this._isCheckedOut = val;
      }else {
        console.log('Invalid value: isCheckedOut must be a boolean');
      }
    };
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    };
  
    getAverageRating() {
      let rateSum = this._ratings.reduce( (accu, currVal) => accu + currVal, 0);
      return this._ratings.length === 0 ? 0 : rateSum / this._ratings.length;
    };
  
    addRating(rate) {
      if (typeof rate === 'number' && rate >= 0 && rate <= 10) {
        this._ratings.push(rate);
      }else {
        console.log('Invalid rating: Must be a number between 0 and 10');
      }
    };
  };
  
  class Book extends Media {
    constructor(title, author, pages){
      super(title);
      this._author = author;
      if (typeof pages === 'number' && pages >= 1){
      this._pages = pages;
      }else {
      throw new Error('Invalid input: Must be a positive number');
      }
    };
  
      get author(){
        return this._author;
      };
  
      get pages(){
        return this._pages;
      };
  
  }
  
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      if (typeof runTime === 'number' && runTime >= 1){
        this._runTime = runTime + ' min';
      }else {
        throw new Error('Invalid input: Must be a positive number');
      }
    };
  
    get director() {
      return this._director;
    };
  
    get runTime() {
      return this._runTime;
    };
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
  
  
  historyOfEverything.toggleCheckOutStatus();
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything);
  console.log(`Average rating: ${historyOfEverything.getAverageRating()}`);
  
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  speed.toggleCheckOutStatus();
  speed.addRating(1);
  speed.addRating(5);
  speed.addRating(5);
  
  console.log(speed);
  console.log(`Average rating: ${speed.getAverageRating()}`);