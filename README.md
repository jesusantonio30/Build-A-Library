
# Media Library

## Overview

This project implements a **Media Library** using JavaScript classes. It provides a base `Media` class that represents media items such as books and movies. The `Book` and `Movie` classes extend `Media`, inheriting core functionality while adding their own specific properties.

## Features

-   **Encapsulation**: Uses getters and setters to access and modify private properties.
    
-   **Check-out System**: Items can be checked in and out using the `toggleCheckOutStatus()` method.
    
-   **Ratings System**: Users can add ratings (0-10), and the average rating is calculated.
    
-   **Error Handling**: Ensures valid inputs for ratings, page numbers, and runtime.
    

## Classes

### `Media`

The base class for all media types.

#### Properties:

-   `_title`  _(string)_: The title of the media.
    
-   `_isCheckedOut`  _(boolean)_: Whether the item is checked out.
    
-   `_ratings`  _(array)_: Stores ratings given to the item.
    

#### Methods:

-   `toggleCheckOutStatus()`: Toggles the check-out status.
    
-   `getAverageRating()`: Returns the average rating.
    
-   `addRating(rate)`: Adds a rating (0-10) with validation.
    

----------

### `Book` (Extends `Media`)

Represents a book with an author and a page count.

#### Additional Properties:

-   `_author`  _(string)_: The author's name.
    
-   `_pages`  _(number)_: The number of pages.
    

#### Usage:

```
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything);
console.log(`Average rating: ${historyOfEverything.getAverageRating()}`);
```

----------

### `Movie` (Extends `Media`)

Represents a movie with a director and runtime.

#### Additional Properties:

-   `_director`  _(string)_: The director's name.
    
-   `_runTime`  _(string)_: The runtime in minutes.
    

#### Usage:

```
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(5);
speed.addRating(5);
console.log(speed);
console.log(`Average rating: ${speed.getAverageRating()}`);
```

## Technologies Used

-   JavaScript (ES6+ features such as classes and encapsulation)
