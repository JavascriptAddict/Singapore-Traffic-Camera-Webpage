// Written by Mario L.
function run(){

    var d = new Date();
    var n = d.getFullYear();
    $("#year").append(n + '&nbsp;M.L');

}

function submitForm(){

    var form = $("#form").serializeArray()
    var url = form[0].value;
    var pageset = form[1].value;

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json', 
        success: function(res) {
            var items = res.items[0].cameras;
            createPagination(pageset, items);
            displayInitial();
        }
    });
}

function createPagination(pageset, data){

    var html = '';
    $("#pagination").empty();

    // Initialize PageJS with number of results per page needed and data array
   var paginationboxes =  PageJS.initialize(pageset, data); 

    for(var count = 0; count < paginationboxes.length; count++){
        html += '<li class="page-item"><a class="page-link" href="#" id="'+paginationboxes[count]+'" onclick="changePage(this.id)">'+paginationboxes[count]+'</a></li>'
    }
    $("#pagination").append(html);

}

function displayInitial(){

    var html = '';
    $("#imageholder").empty();

    // Set page to 1 to show initial page
    var Boxes = PageJS.changePage(1);

    for(var count = 0; count < Boxes.length; count++){
        html += '<div class="col-md-4">\
        <div class="card mb-4 shadow-sm">\
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="'+Boxes[count].image+'"></img>\
        </div>\
      </div>';
    }
    $("#imageholder").append(html);
}

function changePage(page){

    var html = '';
    $("#imageholder").empty();
    
    // Use Page number or ID to change page
    var tempArray = PageJS.changePage(page);
    
    for(var count = 0; count < tempArray.length; count++){
        html += '<div class="col-md-4">\
        <div class="card mb-4 shadow-sm">\
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="'+tempArray[count].image+'"></img>\
          <div class="card-body">\
              <div class="d-flex justify-content-between align-items-center">\
                <small class="text-muted">'+tempArray[count].camera_id+'</small>\
              </div>\
              </div>\
        </div>\
      </div>'
    }
    $("#imageholder").append(html);
}