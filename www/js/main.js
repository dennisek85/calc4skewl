let calc = 0;

function render(){
    $('#display').val(calc);
}

$(document).on('click', '#1', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#2', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#3', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#4', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#5', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#6', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#7', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#8', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#9', function() {
    let value = $(this).data('value');
    calc = value;
    $('#display').val(calc);
    render();
})

$(document).on('click', '#reset', function() {
    calc = 0;
    $('#display').val(calc);
    render();
})

render();