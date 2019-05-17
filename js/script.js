jQuery(document).ready(function () {

    var apiBase = 'http://statenweb.mockable.io/conversions/';

    $('.inches').on("click", function (event) {
        event.preventDefault();
        var input = $('#inches').val();

        axios.get(apiBase).then(function (response) {

            var num = response.data.centimetersInInch;

            var answer = input * num;
            $('#result1').html(answer);
        });
    });

    $('.centimeters').on("click", function (event) {
        event.preventDefault();
        var input2 = $('#centimeters').val();

        axios.get(apiBase).then(function (response) {

            var num2 = response.data.inchesInCm;
            var answer2 = input2 * num2;
            $('#result2').html(answer2);
        });
    })
});