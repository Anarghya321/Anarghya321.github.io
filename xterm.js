var main = function () {
    var text = "You're Late!                           ";
    var counter = 0;
    var times = 0;
    var addText = function () {
        if(times === 2) {
            $('#xterm').html(text);
            return;
        }
        if(counter === text.length) {
            $('#xterm').html('');
            counter = 0;
            times = times + 1;
        }
        else {
            $('#xterm').append(text.charAt(counter));
            counter = counter + 1;
        }
    };
    $('#xterm').html('');
    setInterval(addText, 150);
};
$(document).ready(main);