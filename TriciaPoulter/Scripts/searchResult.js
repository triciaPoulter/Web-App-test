
$('#search').datagrid({
    url:'https://api.github.com/users/robconery',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    method:'post',
    fitColumns:true,
    halign:'center',
    columns:[[{
        title:'Name',
        field: 'Name',
        width:100
},{
    title:'Location',
    field:'location',
    width:100

},{
title:'Avatar Url',
    field:'avatar_url',
width:100

},{
    title:'Repos Url',
    field:'repos-url',
    width:100
}]]
});
jsonCallback(
	{
	    "urls":
          [{
              "domainName": "https://api.github.com/users/robconery"
          },
              {
                  "domainName": "https://api.github.com/users/robconery/repos"
              }
          ]
	}
);

(function ($) {
    var url = 'https://api.github.com/users/robconery/scripts/jquery4u-sites.json?callback=?';

    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function (json) {
            console.dir(json.sites);
        },
        error: function (e) {
            console.log(e.message);
        }
    });

})(jQuery);

$.getJSON('https://api.github.com/users/robconery', function (data) {
    $('#output').html(data.contents);
});


$.getJSON('https://api.github.com/users/robconery/repos', function (data) {
    $('#output').html(data.contents);
});


$.ajax({
    type: "GET",
    dataType: "json",
    url: "https://api.github.com/users/robconery",
    success: function (data) {
        alert(data);
    }
});

//On the results page, show the username, location, avatar and the 5 repos with the highest stargazer_count.


function userData(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].login + '">' + arr[i].location + +arr[i].avatar_url + '</a><br>';
    }
    document.getElementByUsername("robconery").innerHTML = out;
}


function repoData(repo) {
    var out = "";
    var i;
    for (i = 0; i < repo.length; i++) {
        out += '<a href="' + repo[i].repos_url + '</a><br>';
    }
    document.getElementByUsername("robconery").innerHTML = out;
}

function results(res) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].login + '">' + arr[i].location + +arr[i].avatar_url + +arr[i].repos_url + '</a><br>';
    }
    document.getElementByUsername("robconery").innerHTML = out;
}
var arr = [
{
    "url": "https://api.github.com/users/robconery"
}
]
var repo = [
{
    "url": "https://api.github.com/users/robconery/repos"
}
];




