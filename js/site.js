$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {

 //username variables
  var usernameId = '#username';
  var usernameLabel = '#input-username label';
  var typeText = 'input[type="text"]';
  
  //password variables
  var passwordId = '#password';
  var passwordLabel = '#input-password label';
  var typePassword = 'input[type="password"]';
  
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  //Function Calls
  addClassFocus(usernameId, usernameLabel, typeText);
  addClassFocus(passwordId, passwordLabel, typePassword);
  addClassClick('h1', usernameLabel, usernameId);
  removeClassBlur(usernameId, usernameLabel, typeText);
  removeClassBlur(passwordId, passwordLabel, typePassword);
  resetForms();
  
  //validate input
  $('#username, #password').on('keyup focus blur', function() {
    var currentUsernameVal = $('#username').val();
    var currentPassVal = $('#password').val();
    if (currentUsernameVal.length !==0 && currentPassVal.length !== 0) {
      $('#submit').addClass('active');
    } else {
      $('#submit').removeClass('active');
    }
  });
  
  //Form submit action
  $( "#login-form" ).submit(function( event ) {
    event.preventDefault();
  });

  //function for addCLass/focus
  function addClassFocus(element, impactedElement, affectedElement) {
    $(element).on('focus', function() {
      $(impactedElement).addClass('login-active');
      $(affectedElement).addClass('login-active');
      $(impactedElement).css("color", "grey");
    });
  }
  
  //function for addClass/click
  function addClassClick(element, impactedElement, affectedElement) {
    $(element).on('click', function() {
      $(impactedElement).addClass('login-active');
      $(affectedElement).focus();
      $(impactedElement).css("color", "grey");
    });
  }
  
  //function for removeClass/blur
  function removeClassBlur(element, impactedElement, affectedElement) {
    $(element).on('blur', function() {
      if($(element).val().length === 0) {
        $(impactedElement).removeClass('login-active');
        $(affectedElement).removeClass('login-active');
        $(impactedElement).css("color", "black");
      }
    });
  }
  
  function resetForms() {
    document.forms['login-form'].reset();
  }
});  
  
