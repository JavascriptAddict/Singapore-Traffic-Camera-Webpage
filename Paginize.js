// Written by Mario L.
var Paginize = {

    pageSet: 0,
    data: 0,
    boxSegment: 0,
    segmentedArray: 0,
    currentSegment: 0,
    lowestSegment: 0,
    highestSegment: 0,

    // Input a data array into dataArray variable E.g [{data: "This is PageJS"}, {"data": "It helps with pagination"}]
    // Input amount of results to show on each BoxId E.g. 5
    initialize: function(showAmt, dataArray, boxSet) {
        this.pageSet = showAmt;
        this.data = dataArray;
        this.boxSegment = boxSet;
        this.calculatePages();
        // var temp = this.calculatePages();
        // Returns BoxId numbers after calculation and ID to set for each number box
        // return temp;
    },
    // Create Pagination Boxes Numbering
    calculatePages: function() {
        var pagesArray = [];
        var boxSetArray = [];
        var paginationBoxes = this.data.length/this.pageSet;
        paginationBoxes = Math.ceil(paginationBoxes);
        for(var count = 0; count < paginationBoxes; count++){
            var pageNumber = count + 1;
            pagesArray.push(pageNumber);
        }
        while (pagesArray.length > 0) {
            var segment = pagesArray.splice(0, this.boxSegment);
            boxSetArray.push(segment);
          }
        // Use the numbers in pagesArray to set the numbers for the pagination and ID of each box
        this.segmentedArray = boxSetArray;
        this.currentSegment = 0;
        this.lowestSegment = 0;
        this.highestSegment = this.segmentedArray.length - 1;
        // return boxSetArray;
    }, 
    // Return sliced data array 
    changePage: function(BoxId) {
        var startingArrayNum = (BoxId * this.pageSet) - this.pageSet;
        var endingArrayNum = (BoxId * this.pageSet);
        var tempArray = this.data.slice(startingArrayNum, endingArrayNum);
        return tempArray;
    },
    changeBoxSegment: function(direction){
        var tempSegment;
        if(direction == -1){
            if(direction == -1 && this.currentSegment > 0){
                tempSegment = this.currentSegment - 1;
            }
            else{
                tempSegment = this.lowestSegment;
            }
        }
        else{
            if(direction == 1 && this.currentSegment < this.highestSegment){
                tempSegment = this.currentSegment + 1;
            }
            else{
                tempSegment = this.highestSegment;
            }
        }
        this.currentSegment = tempSegment;
        return this.segmentedArray[tempSegment];
    },
}


