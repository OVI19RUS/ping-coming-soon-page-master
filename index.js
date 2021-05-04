function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function validate() {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.css("color", "green");
    } else {
      $result.css('display', 'flex');
      $result.text("Please provide a valid email address");
      $result.css("color", "hsl(354, 100%, 66%)");
      $('#email').css('border', 'hsl(354, 100%, 66%) solid 1px')
  
      setTimeout(function () {
        $result.text("");
        $result.css('display', 'none');
        $('#email').css('border', 'hsl(0, 6%, 24%) solid 1px')
      }, 4000)
    }
    return false;
  }
  
  $("#validate").on("click", validate);