
function square(x) {
  return x * x;
}




function toggleRed() {
  $('#second-div').toggleClass('red');
}


function onGotData(data) {
  var table = $('#my-table-body');
  data.rows.forEach(function(number) {
    table.append("<tr><td>" + number + "</td><td>" + square(number) + "</td></tr>")
  })
}

$.getJSON('https://robbie-c.github.io/cfg-ic-6/ajax/data.json', onGotData);


loadDataAndPopulateTable();

console.log('You opened the console! Try writing "2 + 2" and hitting enter!');
