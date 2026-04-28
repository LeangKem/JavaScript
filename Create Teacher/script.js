$(document).ready(function () {
  $("#teacherForm").on("submit", function (e) {
    e.preventDefault(); // Stop form from refreshing

    let isValid = true;

    // 1. Reset all previous error styles
    $("input").removeClass("input-error");
    $(".error-text").hide();
    $("#mainWarning").hide();

    // 2. Validate Teacher Code
    if ($("#teacherCode").val().trim() === "") {
      showFieldError("#teacherCode");
      isValid = false;
    }

    // 3. Validate Full Name (At least 5 characters)
    if ($("#fullName").val().trim().length < 5) {
      showFieldError("#fullName");
      isValid = false;
    }

    // 4. Validate Contact
    if ($("#contact").val().trim() === "") {
      showFieldError("#contact");
      isValid = false;
    }

    // 5. Final Check
    if (!isValid) {
      $("#mainWarning").show(); // Show the "Warning! Invalid input(s)" text
    } else {
      alert("Teacher created successfully!");
    }
  });

  // Helper to show Red Outline and Red Letters
  function showFieldError(selector) {
    $(selector).addClass("input-error");
    $(selector).next(".error-text").show();
  }

  // Optional: Clear error when teacher starts typing again
  $("input").on("input", function () {
    $(this).removeClass("input-error");
    $(this).next(".error-text").hide();

    // Hide bottom warning if user starts fixing fields
    if ($(".input-error").length === 0) {
      $("#mainWarning").hide();
    }
  });
});
