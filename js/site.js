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

  //toggle element variables
  var logInTroubleId = '#login-trouble';
  var logInTroubleInfoId = '#login-trouble-info';
  var contactId = '#contact';
  var contactInfoClass = '.contact-info';

  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  //Function Calls
  addClassFocus(usernameId, usernameLabel, typeText);
  addClassFocus(passwordId, passwordLabel, typePassword);
  addClassClick('h1', usernameLabel, usernameId);
  removeClassBlur(usernameId, usernameLabel, typeText);
  removeClassBlur(passwordId, passwordLabel, typePassword);
  hideAndToggle(logInTroubleId, logInTroubleInfoId);
  hideAndToggle(contactId, contactInfoClass);
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
  $( '#login-form' ).submit(function(event) {
    event.preventDefault();
    window.location.replace('academics/index.html'); // Takes users in soon as they submit
  });

  //checks to see if users enters "@hawk.iit.edu" or "@iit.edu" and  removes those parts
  $('#username').on('keyup focus blur', function() {
    var currentUserVal = $('#username').val();
    if (currentUserVal.match(/^(.+)@iit\.edu|^(.+)@hawk.iit.edu/))
    {
      $(this).next('input:password').focus();
      var uservalue=currentUserVal.match(/^(.+)@/)[1];
      $('#username').val(uservalue);

    }
  });

  //function to hide and toggle text
  function hideAndToggle(elementId, toggleElementId) {
    $(toggleElementId).hide();
    $(elementId).on('click', function(event){
      event.preventDefault();
      $(toggleElementId).toggle();
    });
  }

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