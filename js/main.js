// for fresher and experience
function toggleExperienceFields() {
    var experienceDropdown = document.getElementById("experience");
    var experienceFields = document.getElementById("experienceFields");

    if (experienceDropdown.value === "experienced") {
      experienceFields.style.display = "block";
    } else {
      experienceFields.style.display = "none";
    }
  }

// for date birth
document.addEventListener('DOMContentLoaded', function () {
    var daySelect = document.getElementById('day');
    var monthSelect = document.getElementById('month');
    var yearSelect = document.getElementById('year');
    var selectedDateInput = document.getElementById('selectedDate');

    // Populate day, month, and year dropdowns with options (you can modify this)
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.add(option);
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < months.length; i++) {
        var option = document.createElement('option');
        option.value = months[i];
        option.text = months[i];
        monthSelect.add(option);
    }

    for (var i = new Date().getFullYear(); i >= 1900; i--) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.add(option);
    }

    // Event listener for when the user selects a date
    daySelect.addEventListener('change', updateSelectedDate);
    monthSelect.addEventListener('change', updateSelectedDate);
    yearSelect.addEventListener('change', updateSelectedDate);

    function updateSelectedDate() {
        // Concatenate the selected date values and set it to the hidden input
        selectedDateInput.value = `${daySelect.value} ${monthSelect.value} ${yearSelect.value}`;
    }
});


// main js 

$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Previous',
            next : 'Next Step',
            finish : 'Submit',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var fullname = $('#first_name').val() + ' ' + $('#last_name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var username = $('#username').val();
            var gender = $('form input[type=radio]:checked').val();
            var address = $('#address').val();

            $('#fullname-val').text(fullname);
            $('#email-val').text(email);
            $('#phone-val').text(phone);
            $('#username-val').text(username);
            $('#address-val').text(address);
            $('#gender-val').text(gender);

            return true;
        }
    });
    $("#date").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-chevron-down"></i>',
    });
});
