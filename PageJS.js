// Written by Mario L.
var PageJS = {

    pageSet: 0,
    data: 0,

    // Input a data array into dataArray variable E.g [{data: "This is PageJS"}, {"data": "It helps with pagination"}]
    // Input amount of results to show on each BoxId E.g. 5
    initialize: function(showAmt, dataArray) {
        pageSet = showAmt;
        data = dataArray;
        var temp = this.calculatePages();
        // Returns BoxId numbers after calculation and ID to set for each number box
        return temp;
    },
    // Create Pagination Boxes Numbering
    calculatePages: function() {
        var pagesArray = [];
        var paginationBoxes = data.length/pageSet;
        paginationBoxes = Math.ceil(paginationBoxes);
    
        for(var count = 0; count < paginationBoxes; count++){
            var pageNumber = count + 1;
            pagesArray.push(pageNumber);
        }
        // Use the numbers in pagesArray to set the numbers for the pagination and ID of each box
        return pagesArray;
    }, 
    // Return sliced data array 
    changePage: function(BoxId) {
        var startingArrayNum = (BoxId * pageSet) - pageSet;
        var endingArrayNum = (BoxId * pageSet);
        var tempArray = data.slice(startingArrayNum, endingArrayNum);
        return tempArray;

    }

}


