// stars.js
stars = {
    init: function(url) {
        var that = this;
        $.getJSON(url,
            function(data){
                for(var className in data){
                    var classData = data[className];
                    that.render(classData, className);
                }
            }
        );
    },

    render: function(data, name) {
        var li = "";
        for (var i = 0; i < data.length; i++) {
            var nickname = data[i].nickname;
            var site = data[i].site;
            var content = data[i].content || '';

            li += '<div class="card" onclick="window.open(\'' + site + '\', \'_blank\')">' +
                '<div class="card-header">' +
                '<a href="' + site + '" target="_blank" rel="noopener">' + nickname + '</a>' +
                '</div>' +
                '<div class="card-content">' +
                '<div>' + content + '</div>' +
                '</div>' +
                '</div>';
        }
        $(name).append(li);
    }
};

$(document).ready(function() {
    stars.init("./allStars.json");
});
