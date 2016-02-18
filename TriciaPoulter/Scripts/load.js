
$(document).ready(function () {
    $.getJSON("/jsonData/rob.json", function (data) {
        $.each(data.name, function () {
                $("ul").append("<li>Name: " + this['name'] + "</li><li>Location: " + this['location'] + "</li><li>Avatar_url: " + this['avatar_url'] + "</li><li>Repos url: " + this['repos_url'] + "</li>");
            });
            $("#name").text(data.name);
            $("#location").text(data.location);
            $("#avatar_url").text(data.avatar_url);
            $("#repos_url").text(data.repos_url);
        })
        $.getJSON("/jsonData/repos.json", function (data) {
            $("#stargazers_url").text(data.stargazers_url);
        })
    });
    $("button").click(function () {
        $("#div1").load("/jsonData/rob.json");

        var $table = $("#tableId"); 

        $.each(json, function (index, value) {
            var $row = $('<tr/>');
            $('<td/>').text(value.name).appendTo($row);
            $('<td/>').text(value.location).appendTo($row);
            $('<td/>').text(value.avatar_url).appendTo($row);

            $table.append($row);
        });
    })


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
