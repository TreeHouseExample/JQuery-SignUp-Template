var $hints = $("form span");

$hints.hide();

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

function passwordEvent()
{
  if( isPasswordValid() )
  {
    $password.next().hide();
  }
  else
  {
    $password.next().show();
  }
}

function confirmPasswordEvent()
{
  if( arePasswordMatching() )
  {
    $confirmPassword.next().hide();
  }
  else
  {
    $confirmPassword.next().show();
  }
}

function isPasswordValid()
{
  return $password.val().length > 8;
}

function arePasswordMatching()
{
  return $password.val() === $confirmPassword.val();
}

function canSubmit()
{
  return isPasswordValid && arePasswordMatching();
}

function enableSubmitEvent()
{
  $("#submit").prop("disabled", !canSubmit());
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();