/*  Module 5: Declare and instantiate classes in TypeScript
    Lab End  */

/*  EXERCISE 1
    TODO: Convert the three functions to a new class called BuildArray by defining the 
    properties, constructor, and accessors, converting the sortAscending2 and sortDescending2
    functions to private methods of the class, and converting the buildArray2 function to
    a public method of the class. */

class BuildArray {
    private _items: number;
    private _sortOrder: 'ascending' | 'descending';

    constructor (items: number, sortOrder: 'ascending' | 'descending') {
        this._items = items;
        this._sortOrder = sortOrder;
    }

    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }

    // Comparison function that tells the sort method how to sort numbers in ascending order
    private sortDescending = (a: number, b: number) => {
        if (a > b) {
            return -1;;
        } else if (b > a) {
            return 1;;
        } else {
            return 0;
        }
        }
        // Comparison function that tells the sort method how to sort numbers in ascending order
    private sortAscending = (a: number, b: number) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
        }
    // This function builds an array of unique random numbers containing the number of items based on the number passed to it.
    // The sortOrder parameter determines whether to sort the array in ascending or descending order.
    buildArray(): number[] {
        let randomNumbers: number[] = [];
        let nextNumber: number;
        for (let i = 0; i < this.items; i++) {
            nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            } else {
                i--;
            }
        }
        if (this._sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        } else {
            return randomNumbers.sort(this.sortDescending);
        } 
    }
}

/*  TODO: Update the testArray1 and testArray2 variable declarations to instantiate 
    new BuildArray objects. Call the buildArray2 method on the objects and return the 
    result to the console. */

    let testArray1 = new BuildArray(12, 'ascending');
    let testArray2 = new BuildArray(8, 'descending');
    
    console.log(testArray1.buildArray());
    console.log(testArray2.buildArray());