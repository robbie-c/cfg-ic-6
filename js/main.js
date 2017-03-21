function toggleRed() {
  $('#second-div').toggleClass('red');
}

function square(x) {
  return x * x;
}

function loadDataAndPopulateTable() {
  $.getJSON('https://robbie-c.github.io/cfg-ic-6/ajax/data.json', function(data) {
    var table = $('#my-table-body');
    data.rows.forEach(function(number) {
      table.append("<tr><td>" + number + "</td><td>" + square(number) + "</td></tr>")
    })
  })
}

loadDataAndPopulateTable();

console.log('You opened the console! Try writing "2 + 2" and hitting enter!');
