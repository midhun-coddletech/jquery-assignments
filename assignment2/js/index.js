$(document).ready(function() {
    let ageOption = '';
    for (let i = 1; i <= 100; i += 1) {
        ageOption += (`<option value="${i}">${i}</option>`);
    }
    $('#age').html(ageOption);
    $('.error-div').hide();
    $('#user-form').on('submit', function(event) {
        event.preventDefault();
        let username = $('#username').val().trim();
        let address = $('#address').val().trim();
        let dob = $('#dob').val();
        let age = $('#age').val();
        let gender = $('input[name="gender"]:checked').val();
        let terms = $('#agree-terms:checked').val();
        if(username.length < 1) {
            $('#name-error').show();
        } else {
            $('#name-error').hide();
        }
        if(address.length < 1) {
            $('#address-error').show();
        } else {
            $('#address-error').hide();
        }
        if(dob.length < 1) {
            $('#dob-error').show();
        } else {
            $('#dob-error').hide();
        }
        if(age.length > 3) {
            $('#age-error').show();
        } else {
            $('#age-error').hide();
        }
        if(!gender) {
            $('#gender-error').show();
        } else {
            $('#gender-error').hide();
        }
        if(!terms) {
            $('#terms-error').show();
        } else {
            $('#terms-error').hide();
        }
    })
});
