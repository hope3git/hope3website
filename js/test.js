$(document).ready(function(){
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

 $('#stu_next').click(function(){
  var error_fname='';
  var error_lname='';
  // var error_dor='';
  var error_address='';
  var error_appsrc=''; 
  var error_phone='';
  var error_state='';
  var error_country='';
  var error_zipcode='';
  var error_city='';
  var error_dob=''; 
  // var error_firstgraduate = '';
  // var error_email = '';
  // var error_fmi = '';
  var error_home_region_type = '';
  var error_status = '';
  var error_plansAfterDegree = '';
  var error_admissionFor = '';
  var error_specifyPlansAfterDegree = '';
  var error_specifyAdmissionFor = '';
  var error_plansAfterDegree1 = '';
  var error_specifyPlansAfterDegree1 = '';

  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var mobile_validation = /^\d{10}$/;

  if($.trim($('#fname').val()).length==0)
  {
   error_fname = 'first name is required';
   $('#error_fname').text(error_fname);
   $('#fname').addClass('has-error');
  }
  else
  {
   error_fname='';
   $('#error_fname').text(error_fname);
   $('#fname').removeClass('has-error');
  }

  if($.trim($('#lname').val()).length == 0)
  {
   error_lname = 'Last Name is required';
   $('#error_lname').text(error_lname);
   $('#lname').addClass('has-error');
  }
  else
  {
   error_lname = '';
   $('#error_lname').text(error_lname);
   $('#lname').removeClass('has-error');
  }

  if($.trim($('#dob').val()).length == 0)
  {
   error_dob = 'Date-of-birth is required';
   $('#error_dob').text(error_dob);
   $('#dob').addClass('has-error');
  }
  else
  {
   error_dob = '';
   $('#error_dob').text(error_dob);
   $('#dob').removeClass('has-error');
  }

  // if($.trim($('#dor').val()).length == 0)
  // {
  //  error_dor = 'Date-of-Registration is required';
  //  $('#error_dor').text(error_dor);
  //  $('#dor').addClass('has-error');
  // }
  // else
  // {
  //  error_dor = '';
  //  $('#error_dor').text(error_dor);
  //  $('#dor').removeClass('has-error');
  // }

  if($.trim($('#address').val()).length == 0)
  {
   error_address = 'Address is required';
   $('#error_address').text(error_address);
   $('#address').addClass('has-error');
  }
  else
  {
   error_address = '';
   $('#error_address').text(error_address);
   $('#address').removeClass('has-error');
  }

  // if($.trim($('#sponsorship').val()) == 'Choose')
  // {
  //  error_sponsorship = 'What for Sponsorship is required';
  //  $('#error_sponsorship').text(error_sponsorship); 
  //  $('#sponsorship').addClass('has-error');
  // }
  // else
  // {
  //  error_sponsorship = '';
  //  $('#error_sponsorship').text(error_sponsorship);
  //  $('#sponsorship').removeClass('has-error');
  // }

  // if($.trim($('#state').val()).length == 0)
  // {
  //  error_state = 'State is required';
  //  $('#error_state').text(error_state);
  //  $('#state').addClass('has-error');
  // }
  // else
  // {
  //  error_state = '';
  //  $('#error_state').text(error_state);
  //  $('#state').removeClass('has-error');
  // }

  // if($.trim($('#state').val()) == 'Choose')
  // {
  //  error_state = 'This field is required';
  //  $('#error_state').text(error_state);
  //  $('#scl_state').addClass('has-error');
  // }
  // else
  // {
  //  error_state = '';
  //  $('#error_state').text(error_state);
  //  $('#scl_state').removeClass('has-error');
  // }

  if($.trim($('#appsrc').val())=='Choose')
  {
   error_appsrc = 'Source of application is required';
   $('#error_appsrc').text(error_appsrc);
   $('#appsrc').addClass('has-error');
  }
  else
  {
   error_appsrc = '';
   $('#error_appsrc').text(error_appsrc);
   $('#appsrc').removeClass('has-error');
  }

  if($.trim($('#regiontype').val())=='Choose')
  {
   error_home_region_type = 'Home Region Type is required';
   $('#error_regiontype').text(error_home_region_type);
   $('#regiontype').addClass('has-error');
  }
  else
  {
   error_home_region_type = '';
   $('#error_regiontype').text(error_home_region_type);
   $('#regiontype').removeClass('has-error');
  }

  // if($.trim($('#country').val()).length == 0)
  // {
  //  error_country = 'Country is required';
  //  $('#error_country').text(error_country);
  //  $('#country').addClass('has-error');
  // }
  // else
  // {
  //  error_country = '';
  //  $('#error_country').text(error_country);
  //  $('#country').removeClass('has-error');
  // }

  if($.trim($('#zipcode').val()).length == 0)
  {
   error_zipcode = 'Zipcode is required';
   $('#error_zipcode').text(error_zipcode);
   $('#zipcode').addClass('has-error');
  }
  else
  {
   error_zipcode = '';
   $('#error_zipcode').text(error_zipcode);
   $('#zipcode').removeClass('has-error');
  }

  // if($.trim($('#city').val()).length == 0)
  // {
  //  error_city = 'City is required';
  //  $('#error_city').text(error_city);
  //  $('#city').addClass('has-error');
  // }
  // else
  // {
  //  error_city = '';
  //  $('#error_city').text(error_city);
  //  $('#city').removeClass('has-error');
  // }

  if($.trim($('#city').val()) == 'Choose')
  {
   error_city = 'City is required';
   $('#error_city').text(error_city);
   $('#city').addClass('has-error');
  }
  else
  {
   error_city = '';
   $('#error_city').text(error_city);
   $('#city').removeClass('has-error');
  }
  
  if($.trim($('#status').val()) == 'Choose')
  {
   error_status = 'Living with field is required';
   $('#error_status').text(error_status);
   $('#status').addClass('has-error');
  }
  else
  {
   error_status = '';
   $('#error_status').text(error_status);
   $('#status').removeClass('has-error');
  }

  // if($.trim($('#email').val()).length == 0)
  // {
  //  error_email = 'Email is required';
  //  $('#error_email').text(error_email);
  //  $('#email').addClass('has-error');
  // }
  // else
  // {
  //  if (!filter.test($('#email').val()))
  //  {
  //   error_email = 'Invalid Email';
  //   $('#error_email').text(error_email);
  //   $('#email').addClass('has-error');
  //  }
  //  else
  //  {
  //   error_email = '';
  //   $('#error_email').text(error_email);
  //   $('#email').removeClass('has-error');
  //  }
  // }
  
  if($.trim($('#phone').val()).length == 0)
  {
   error_phone = 'Mobile Number is required';
   $('#error_phone').text(error_phone);
   $('#phone').addClass('has-error');
  }
  else
  {
   if (!mobile_validation.test($('#phone').val()))
   {
    error_phone = 'Invalid Mobile Number';
    $('#error_phone').text(error_phone);
    $('#phone').addClass('has-error');
   }
   else
   {
    error_phone = '';
    $('#error_phone').text(error_phone);
    $('#phone').removeClass('has-error');
   }
  }

  // if($.trim($('#fmi').val()).length == 0)
  // {
  //  error_fmi = 'Family_monthly_income is required';
  //  $('#error_fmi').text(error_fmi);
  //  $('#fmi').addClass('has-error');
  // }
  // else
  // {
  //  error_fmi = '';
  //  $('#error_fmi').text(error_fmi);
  //  $('#fmi').removeClass('has-error');
  // }

  if($.trim($('#admissionFor').val()) == 'Choose')
  {
   error_admissionFor = 'Seeking Admission For Field is required';
   $('#error_admissionFor').text(error_admissionFor);
   $('#admissionFor').addClass('has-error');
  }
  else
  {
   error_admissionFor = '';
   $('#error_admissionFor').text(error_admissionFor);
   $('#admissionFor').removeClass('has-error');
  }

  if($.trim($('#plansAfterDegree').val()) == 'Choose')
  {
   error_plansAfterDegree = 'Ambition (Choice 1) Field is required';
   $('#error_plansAfterDegree').text(error_plansAfterDegree);
   $('#plansAfterDegree').addClass('has-error');
  }
  else
  {
   error_plansAfterDegree = '';
   $('#error_plansAfterDegree').text(error_plansAfterDegree);
   $('#plansAfterDegree').removeClass('has-error');
  }

  if($.trim($('#plansAfterDegree1').val()) == 'Choose')
  {
   error_plansAfterDegree1 = 'Ambition (Choice 2) Field is required';
   $('#error_plansAfterDegree1').text(error_plansAfterDegree1);
   $('#plansAfterDegree1').addClass('has-error');
  }
  else
  {
   error_plansAfterDegree1 = '';
   $('#error_plansAfterDegree1').text(error_plansAfterDegree1);
   $('#plansAfterDegree1').removeClass('has-error');
  }

  if($.trim($('#admissionFor').val()) == 'Others' && $.trim($('#admissionForOthers').val()).length == 0)
  {
    error_specifyAdmissionFor = 'This field is required';
   $('#error_admissionForOthers').text(error_specifyAdmissionFor);
   $('#admissionForOthers').addClass('has-error');
  }
  else
  {
    error_specifyAdmissionFor = '';
   $('#error_admissionForOthers').text(error_specifyAdmissionFor);
   $('#admissionForOthers').removeClass('has-error');
  }

  if($.trim($('#plansAfterDegree').val()) == 'Others' && $.trim($('#plansOther').val()).length == 0)
  {
    error_specifyPlansAfterDegree = 'This field is required';
   $('#error_plansOther').text(error_specifyPlansAfterDegree);
   $('#plansOther').addClass('has-error');
  }
  else
  {
    error_specifyPlansAfterDegree = '';
   $('#error_plansOther').text(error_specifyPlansAfterDegree);
   $('#plansOther').removeClass('has-error');
  }

  if($.trim($('#plansAfterDegree1').val()) == 'Others' && $.trim($('#plansOther1').val()).length == 0)
  {
    error_specifyPlansAfterDegree1 = 'This field is required';
   $('#error_plansOther1').text(error_specifyPlansAfterDegree1);
   $('#plansOther1').addClass('has-error');
  }
  else
  {
    error_specifyPlansAfterDegree1 = '';
   $('#error_plansOther1').text(error_specifyPlansAfterDegree1);
   $('#plansOther1').removeClass('has-error');
  }

  if(error_home_region_type!='' || error_plansAfterDegree!='' ||error_plansAfterDegree1!='' || error_admissionFor!='' || error_specifyAdmissionFor!='' || error_specifyPlansAfterDegree!='' || error_specifyPlansAfterDegree1!='' || error_dob != '' || error_appsrc!='' || error_status!='' || error_phone!='' || error_city!='' || error_address!='' || error_fname!='' || error_lname!='' || error_zipcode!='' || error_state!='' || error_country!='')
  {
    $(window).scrollTop(0);
   return false;
    
  }
  else
  {
   $('#student_login_details').removeClass('active active_tab1');
   $('#student_details').removeClass('active');
   $('#student_login_details').addClass('inactive_tab1');
   $('#parent_login_details').removeClass('inactive_tab1');
   $('#parent_login_details').addClass('active_tab1 active');
   $('#parent_details').addClass('active in');
   $(window).scrollTop(0);
  }
 });
 
 $('#par_previous').click(function(){
  $('#parent_login_details').removeClass('active active_tab1');
  $('#parent_details').removeClass('active in');
  $('#parent_login_details').addClass('inactive_tab1');
  $('#student_login_details').removeClass('inactive_tab1');
  $('#student_login_details').addClass('active_tab1 active');
  $('#student_details').addClass('active in');
  $(window).scrollTop(0);
 });
 
 $('#par_next').click(function(){
  var error_f_fname ='';
  // var error_f_lname ='';
  var error_relation_type ='';
  // var error_f_email ='';
  var error_f_yearly_salary ='';
  var error_f_phone ='';
  var error_familymembers = '';
  
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var mobile_validation = /^\d{10}$/;


  if($.trim($('#f_fname').val()).length == 0)
  {
   error_f_fname = 'first name is required';
   $('#error_f_fname').text(error_f_fname);
   $('#f_fname').addClass('has-error');
  }
  else
  {
   error_f_fname = '';
   $('#error_f_fname').text(error_f_fname);
   $('#f_fname').removeClass('has-error');
  }

  if($.trim($('#familymembers').val()).length == 0)
  {
   error_familymembers = 'Family members count is required';
   $('#error_familymembers').text(error_familymembers);
   $('#familymembers').addClass('has-error');
  }
  else
  {
   error_familymembers = '';
   $('#error_familymembers').text(error_familymembers);
   $('#familymembers').removeClass('has-error');
  }

  // if($.trim($('#f_lname').val()).length == 0)
  // {
  //  error_f_lname = 'last name is required';
  //  $('#error_f_lname').text(error_f_lname);
  //  $('#f_lname').addClass('has-error');
  // }
  // else
  // {
  //  error_f_lname = '';
  //  $('#error_f_lname').text(error_f_lname);
  //  $('#f_lname').removeClass('has-error');
  // }

  if($.trim($('#relation_type').val()).length == 0)
  {
   error_relation_type = 'Relation type is required';
   $('#error_relation_type').text(error_relation_type);
   $('#relation_type').addClass('has-error');
  }
  else
  {
   error_relation_type = '';
   $('#error_relation_type').text(error_relation_type);
   $('#relation_type').removeClass('has-error');
  }

  // if($.trim($('#f_occupation').val()).length == 0)
  // {
  //  error_f_occupation = 'Father\'s ocupation is required';
  //  $('#error_f_occupation').text(error_f_occupation);
  //  $('#f_occupation').addClass('has-error');
  // }
  // else
  // {
  //  error_f_occupation = '';
  //  $('#error_f_occupation').text(error_f_occupation);
  //  $('#f_occupation').removeClass('has-error');
  // }

  if($.trim($('#f_yearly_salary').val()).length == 0)
  {
   error_f_yearly_salary = 'Yearly salary is required';
   $('#error_f_yearly_salary').text(error_f_yearly_salary);
   $('#f_yearly_salary').addClass('has-error');
  }
  else
  {
   error_f_yearly_salary = '';
   $('#error_f_yearly_salary').text(error_f_yearly_salary);
   $('#f_yearly_salary').removeClass('has-error');
  }

  // if($.trim($('#f_email').val()).length == 0)
  // {
  //  error_f_email = 'Email is required';
  //  $('#error_f_email').text(error_f_email);
  //  $('#f_email').addClass('has-error');
  // }
  // else
  // {
  //  if (!filter.test($('#f_email').val()))
  //  {
  //   error_f_email = 'Invalid Email';
  //   $('#error_f_email').text(error_f_email);
  //   $('#f_email').addClass('has-error');
  //  }
  //  else
  //  {
  //   error_f_email = '';
  //   $('#error_f_email').text(error_f_email);
  //   $('#f_email').removeClass('has-error');
  //  }
  // }

  // if($.trim($('#m_name').val()).length == 0)
  // {
  //  error_m_name = 'Mother\'s name is required';
  //  $('#error_m_name').text(error_m_name);
  //  $('#m_name').addClass('has-error');
  // }
  // else
  // {
  //  error_m_name = '';
  //  $('#error_m_name').text(error_m_name);
  //  $('#m_name').removeClass('has-error');
  // }

  // if($.trim($('#m_occupation').val()).length == 0)
  // {
  //  error_m_occupation = 'Mother\'s ocupation is required';
  //  $('#error_m_occupation').text(error_m_occupation);
  //  $('#m_occupation').addClass('has-error');
  // }
  // else
  // {
  //  error_m_occupation = '';
  //  $('#error_m_occupation').text(error_m_occupation);
  //  $('#m_occupation').removeClass('has-error');
  // }

  // if($.trim($('#m_yearly_income').val()).length == 0)
  // {
  //  error_m_yearly_income = 'Mother\'s Yearly Income is required';
  //  $('#error_m_yearly_income').text(error_m_yearly_income);
  //  $('#m_yearly_income').addClass('has-error');
  // }
  // else
  // {
  //  error_m_yearly_income = '';
  //  $('#error_m_yearly_income').text(error_m_yearly_income);
  //  $('#m_yearly_income').removeClass('has-error');
  // }

  if($.trim($('#f_phone').val()).length == 0)
  {
   error_f_phone = 'Mobile Number is required';
   $('#error_f_phone').text(error_f_phone);
   $('#f_phone').addClass('has-error');
  }
  else
  {
   if (!mobile_validation.test($('#f_phone').val()))
   {
    error_f_phone = 'Invalid Mobile Number';
    $('#error_f_phone').text(error_f_phone);
    $('#f_phone').addClass('has-error');
   }
   else
   {
    error_f_phone = '';
    $('#error_f_phone').text(error_f_phone);
    $('#f_phone').removeClass('has-error');
   }
  }
  
  // if($.trim($('#m_phone').val()).length == 0)
  // {
  //  error_m_phone = 'Mother\'s Mobile Number is required';
  //  $('#error_m_phone').text(error_m_phone);
  //  $('#m_phone').addClass('has-error');
  // }
  // else
  // {
  //  if (!mobile_validation.test($('#m_phone').val()))
  //  {
  //   error_m_phone = 'Invalid Mobile Number';
  //   $('#error_m_phone').text(error_m_phone);
  //   $('#m_phone').addClass('has-error');
  //  }
  //  else
  //  {
  //   error_m_phone = '';
  //   $('#error_m_phone').text(error_m_phone);
  //   $('#m_phone').removeClass('has-error');
  //  }
  // }

  if(error_f_phone!='' || error_f_fname!='' || error_f_yearly_salary!='' || error_relation_type!='')
  {
        $(window).scrollTop(0);
   return false;
  }
  else
  {
   $('#parent_login_details').removeClass('active active_tab1');
   $('#parent_details').removeClass('active');
   $('#parent_login_details').addClass('inactive_tab1');
   $('#education_10_details').removeClass('inactive_tab1');
   $('#education_10_details').addClass('active_tab1 active');
   $('#education10_details').addClass('active in');
   $(window).scrollTop(0);
  }
 });
 
 $('#education10_details_previous').click(function(){
  $('#education_10_details').removeClass('active active_tab1');
  $('#education10_details').removeClass('active in');
  $('#education_10_details').addClass('inactive_tab1');
  $('#parent_login_details').removeClass('inactive_tab1');
  $('#parent_login_details').addClass('active_tab1 active');
  $('#parent_details').addClass('active in');
  $(window).scrollTop(0);
 });
 
 $('#education10_details_next').click(function(){
  var error_mark_tot_10='';
  var error_mark_socscience_10='';
  var error_mark_science_10='';
  var error_scl10city = '';
  var error_mark_maths_10='';
  var error_mark_englang_10='';
  var error_mark_lang_10='';
  var error_scl10='';
  // var error_scl10city='';
  var error_year_10='';
  var error_scl_regiontype10='';
  var error_scl_state10='';
  var error_scl_country10='';



  if($.trim($('#scl10').val()).length == 0)
  {
   error_scl10 = 'This field is required';
   $('#error_scl10').text(error_scl10);
   $('#scl10').addClass('has-error');
  }
  else
  {
   error_scl10 = '';
   $('#error_scl10').text(error_scl10);
   $('#scl10').removeClass('has-error');
  }

  if($.trim($('#scl10city').val()) == 'Choose')
  {
   error_scl10city = 'This field is required';
   $('#error_scl10city').text(error_scl10city);
   $('#scl10city').addClass('has-error');
  }
  else
  {
   error_scl10city = '';
   $('#error_scl10city').text(error_scl10city);
   $('#scl10city').removeClass('has-error');
  }

  // if($.trim($('#scl_country10').val()).length == 0)
  // {
  //  error_scl_country10 = 'This field is required';
  //  $('#error_scl_country10').text(error_scl_country10);
  //  $('#scl_country10').addClass('has-error');
  // }
  // else
  // {
  //  error_scl_country10 = '';
  //  $('#error_scl_country10').text(error_scl_country10);
  //  $('#scl_country10').removeClass('has-error');
  // }

  // if($.trim($('#scl_state10').val())=='Choose')
  // {
  //  error_scl_state10 = 'This field is required';
  //  $('#error_scl_state10').text(error_scl_state10);
  //  $('#scl_state10').addClass('has-error');
  // }
  // else
  // {
  //  error_scl_state10 = '';
  //  $('#error_scl_state10').text(error_scl_state10);
  //  $('#scl_state10').removeClass('has-error');
  // }

  if($.trim($('#scl_regiontype10').val()) == 'Choose')
  {
   error_scl_regiontype10 = 'This field is required';
   $('#error_scl_regiontype10').text(error_scl_regiontype10);
   $('#scl_regiontype10').addClass('has-error');
  }
  else
  {
   error_scl_regiontype10 = '';
   $('#error_scl_regiontype10').text(error_scl_regiontype10);
   $('#scl_regiontype10').removeClass('has-error');
  }

  if($.trim($('#mark_lang_10').val()).length == 0)
  {
   error_mark_lang_10 = 'This field is required';
   $('#error_mark_lang_10').text(error_mark_lang_10);
   $('#mark_lang_10').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_lang_10').val())>=0&&$.trim($('#mark_lang_10').val())<=100){
   error_mark_lang_10 = '';
   $('#error_mark_lang_10').text(error_mark_lang_10);
   $('#mark_lang_10').removeClass('has-error');
    }
   else{
   error_mark_lang_10 = 'Must be a number less than or equal to 100';
   $('#error_mark_lang_10').text(error_mark_lang_10);
   $('#mark_lang_10').addClass('has-error');
  }
  }

  if($.trim($('#mark_englang_10').val()).length == 0)
  {
   error_mark_englang_10 = 'This field is required';
   $('#error_mark_englang_10').text(error_mark_englang_10);
   $('#mark_englang_10').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_englang_10').val())>=0&&$.trim($('#mark_englang_10').val())<=100){
   error_mark_englang_10 = '';
   $('#error_mark_englang_10').text(error_mark_englang_10);
   $('#mark_englang_10').removeClass('has-error');
    }
   else{
   
   error_mark_englang_10 = 'Must be a number less than or equal to 100';
   $('#error_mark_englang_10').text(error_mark_lang_10);
   $('#mark_englang_10').addClass('has-error');
  }
}

  if($.trim($('#mark_maths_10').val()).length == 0)
  {
   error_mark_maths_10 = 'This field is required';
   $('#error_mark_maths_10').text(error_mark_maths_10);
   $('#mark_maths_10').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_maths_10').val())>=0&&$.trim($('#mark_maths_10').val())<=100){
   error_mark_maths_10 = '';
   $('#error_mark_maths_10').text(error_mark_maths_10);
   $('#mark_maths_10').removeClass('has-error');
  
    }
   else{
   
   error_mark_maths_10 = 'Must be a number less than or equal to 100';
   $('#error_mark_maths_10').text(error_mark_maths_10);
   $('#mark_maths_10').addClass('has-error');
  }
}

  if($.trim($('#mark_science_10').val()).length == 0)
  {
   error_mark_science_10 = 'This field is required';
   $('#error_mark_science_10').text(error_mark_science_10);
   $('#mark_science_10').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_science_10').val())>=0&&$.trim($('#mark_science_10').val())<=100){
   error_mark_science_10 = '';
   $('#error_mark_science_10').text(error_mark_science_10);
   $('#mark_science_10').removeClass('has-error');
  
    }
   else{
   
   error_mark_science_10 = 'Must be a number less than or equal to 100';
   $('#error_mark_science_10').text(error_mark_science_10);
   $('#mark_science_10').addClass('has-error');
  }
}

  if($.trim($('#mark_socscience_10').val()).length == 0)
  {
   error_mark_socscience_10 = 'This field is required';
   $('#error_mark_socscience_10').text(error_mark_socscience_10);
   $('#mark_socscience_10').addClass('has-error');
  }
  else
  {
   if($.trim($('#mark_socscience_10').val())>=0&&$.trim($('#mark_socscience_10').val())<=100){
   error_mark_socscience_10 = '';
   $('#error_mark_socscience_10').text(error_mark_socscience_10);
   $('#mark_socscience_10').removeClass('has-error');
    }
   else{
   
   error_mark_socscience_10 = 'Must be a number less than or equal to 100';
   $('#error_mark_socscience_10').text(error_mark_socscience_10);
   $('#mark_socscience_10').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot_10').val()).length == 0)
  {
   error_mark_tot_10 = 'This field is required';
   $('#error_mark_tot_10').text(error_mark_tot_10);
   $('#mark_tot_10').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_tot_10').val())>=0&&$.trim($('#mark_tot_10').val())<=500){
   error_mark_tot_10 = '';
   $('#error_mark_tot_10').text(error_mark_tot_10);
   $('#mark_tot_10').removeClass('has-error');
  
    }
   else{
   
   error_mark_tot_10 = 'Must be a number less than or equal to 500';
   $('#error_mark_tot_10').text(error_mark_tot_10);
   $('#mark_tot_10').addClass('has-error');
  }
}

  if($.trim($('#year_10').val()) == 'Option')
  {
   error_year_10 = 'This field is required';
   $('#error_year_10').text(error_year_10);
   $('#year_10').addClass('has-error');
  }
  else
  {
   error_year_10 = '';
   $('#error_year_10').text(error_year_10);
   $('#year_10').removeClass('has-error');
  }
  
  if(error_scl10!='' || error_mark_lang_10!=''||error_mark_englang_10!='' || error_mark_maths_10!=''||error_mark_science_10!=''||error_mark_socscience_10!=''||error_mark_tot_10!=''||error_year_10!=''||error_scl_regiontype10!='')
  {
        $(window).scrollTop(0);

   return false;
  }
  else
  {
   $('#education_10_details').removeClass('active active_tab1');
   $('#education10_details').removeClass('active');
   $('#education_10_details').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  }

  $('#education12_details_previous').click(function(){
    $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_10_details').removeClass('inactive_tab1');
   $('#education_10_details').addClass('active_tab1 active');
   $('#education10_details').addClass('active in'); 
   $(window).scrollTop(0);
  })

  $('#education12_details_next').click(function(){
    var error_scl12='';
    var error_scl_regiontype12='';
    var error_scl_state12='';

    var error_scl12city='';
    var error_scl_country12='';
    var error_year_12='';
    // var error_regno12='';
    var error_mark_lang_12='';
    var error_mark_englang_12='';
    var error_sub12='';

    if($.trim($('#scl12').val()).length == 0)
  {
   error_scl12 = 'This field is required';
   $('#error_scl12').text(error_scl12);
   $('#scl12').addClass('has-error');
  }
  else
  {
   error_scl12 = '';
   $('#error_scl12').text(error_scl12);
   $('#scl12').removeClass('has-error');
  }

  if($.trim($('#scl12city').val()) == 'Choose')
  {
   error_scl12city = 'This field is required';
   $('#error_scl12city').text(error_scl12city);
   $('#scl12city').addClass('has-error');
  }
  else
  {
   error_scl12city = '';
   $('#error_scl12city').text(error_scl12city);
   $('#scl12city').removeClass('has-error');
  }

  // if($.trim($('#scl_state12').val())== 'Choose')
  // {
  //  error_scl_state12 = 'This field is required';
  //  $('#error_scl_state12').text(error_scl_state12);
  //  $('#scl_state12').addClass('has-error');
  // }
  // else
  // {
  //  error_scl_state12 = '';
  //  $('#error_scl_state12').text(error_scl_state12);
  //  $('#scl_state12').removeClass('has-error');
  // }

  // if($.trim($('#scl_country12').val()).length == 0)
  // {
  //  error_scl_country12 = 'This field is required';
  //  $('#error_scl_country12').text(error_scl_country12);
  //  $('#scl_country12').addClass('has-error');
  // }
  // else
  // {
  //  error_scl_country12 = '';
  //  $('#error_scl_country12').text(error_scl_country12);
  //  $('#scl_country12').removeClass('has-error');
  // }

  if($.trim($('#scl_regiontype12').val()) == 'Choose')
  {
   error_scl_regiontype12 = 'This field is required';
   $('#error_scl_regiontype12').text(error_scl_regiontype12);
   $('#scl_regiontype12').addClass('has-error');
  }
  else
  {
   error_scl_regiontype12 = '';
   $('#error_scl_regiontype12').text(error_scl_regiontype12);
   $('#scl_regiontype12').removeClass('has-error');
  }

  if($.trim($('#year_12').val())=='Choose')
  {
   error_year_12 = 'This field is required';
   $('#error_year_12').text(error_year_12);
   $('#year_12').addClass('has-error');
  }
  else
  {
   error_year_12 = '';
   $('#error_year_12').text(error_year_12);
   $('#year_12').removeClass('has-error');
  }

  // if($.trim($('#regno12').val()).length == 0)
  // {
  //  error_regno12 = 'This field is required';
  //  $('#error_regno12').text(error_regno12);
  //  $('#regno12').addClass('has-error');
  // }
  // else
  // {
  //  error_regno12 = '';
  //  $('#error_regno12').text(error_regno12);
  //  $('#regno12').removeClass('has-error');
  // }

  if($.trim($('#mark_lang_12').val()).length == 0)
  {
  //  error_mark_lang_12 = 'This field is required';
  //  $('#error_mark_lang_12').text(error_mark_lang_12);
  //  $('#mark_lang_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_lang_12').val())>=0&&$.trim($('#mark_lang_12').val())<=100){
   error_mark_lang_12 = '';
   $('#error_mark_lang_12').text(error_mark_lang_12);
   $('#mark_lang_12').removeClass('has-error');
    }
   else{
   error_mark_lang_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_lang_12').text(error_mark_lang_12);
   $('#mark_lang_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_englang_12').val()).length == 0)
  {
  //  error_mark_englang_12 = 'This field is required';
  //  $('#error_mark_englang_12').text(error_mark_englang_12);
  //  $('#mark_englang_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_englang_12').val())>=0&&$.trim($('#mark_englang_12').val())<=100){
   error_mark_englang_12 = '';
   $('#error_mark_englang_12').text(error_mark_englang_12);
   $('#mark_englang_12').removeClass('has-error');
    }
   else{
   error_mark_englang_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_englang_12').text(error_mark_englang_12);
   $('#mark_englang_12').addClass('has-error');
  }
  }

  if($.trim($('#sub12').val()) == 'Choose')
  {
   error_sub12 = 'This field is required';
   $('#error_sub12').text(error_sub12);
   $('#sub12').addClass('has-error');
  }
  else
  {
   error_sub12 = '';
   $('#error_sub12').text(error_sub12);
   $('#sub12').removeClass('has-error');
  }

  if(error_scl12!=''||error_scl_regiontype12!=''||error_year_12!=''||error_mark_lang_12!=''||error_mark_englang_12!=''||error_sub12!=''){
        $(window).scrollTop(0);

    return false;
  }
  else{
    if($.trim($('#sub12').val())=="Mathematics / Physics / Chemistry / Statistics"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects1').addClass('active in');     
   $('#mpcs').removeClass('fade'); 
   $('#mpcs').addClass('active');
   $(window).scrollTop(0);
  }

  else if($.trim($('#sub12').val())=="Accountancy / Commerce / Economics / History"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects2').addClass('active in');     
   $('#ceah').removeClass('fade'); 
   $('#ceah').addClass('active');
   $(window).scrollTop(0);
  }
  else if($.trim($('#sub12').val())=="Accountancy / Business Maths / Commerce / Economics"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects3').addClass('active in');     
   $('#ceab').removeClass('fade'); 
   $('#ceab').addClass('active');
   $(window).scrollTop(0);
  }
  else if($.trim($('#sub12').val())=="Accountancy / Commerce / Economics / Political Science"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects4').addClass('active in');     
   $('#ceap').removeClass('fade'); 
   $('#ceap').addClass('active');
   $(window).scrollTop(0);
  }
  else if($.trim($('#sub12').val())=="Commerce / Economics / Accountancy / Statistics"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects5').addClass('active in');     
   $('#ceas').removeClass('fade'); 
   $('#ceas').addClass('active');
   $(window).scrollTop(0);
  }

  else if($.trim($('#sub12').val())=="Biology / Chemistry / Mathematics / Physics"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects6').addClass('active in');     
   $('#mpcb').removeClass('fade'); 
   $('#mpcb').addClass('active');
   $(window).scrollTop(0);
  }
  else if($.trim($('#sub12').val())=="Botany / Chemistry / Physics / Zoology"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects7').addClass('active in');     
   $('#zpcb').removeClass('fade'); 
   $('#zpcb').addClass('active');
   $(window).scrollTop(0);
  }

  else if($.trim($('#sub12').val())=="Chemistry / Computer Science / Mathematics / Physics"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects8').addClass('active in');     
   $('#mpccs').removeClass('fade'); 
   $('#mpccs').addClass('active');
   $(window).scrollTop(0);
  }

  else if($.trim($('#sub12').val())=="Accountancy / Commerce / Computer Science / Economics"){
   $('#education_12_details').removeClass('active active_tab1');
   $('#education12_details').removeClass('active');
   $('#education_12_details').addClass('inactive_tab1');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#education_12_subjects').addClass('active_tab1 active');
   $('#education12_subjects9').addClass('active in');     
   $('#acce').removeClass('fade'); 
   $('#acce').addClass('active'); 
   $(window).scrollTop(0);
  }

  // else if($.trim($('#sub12').val())=="Agriculture Science / Biology / Computer Technology / Agriculture Practical"){
  //   $('#education_12_details').removeClass('active active_tab1');
  //   $('#education12_details').removeClass('active');
  //   $('#education_12_details').addClass('inactive_tab1');
  //   $('#education_12_subjects').removeClass('inactive_tab1');
  //   $('#education_12_subjects').addClass('active_tab1 active');
  //   $('#education12_subjects10').addClass('active in');     
  //   $('#abca').removeClass('fade'); 
  //   $('#abca').addClass('active'); 
  //   $(window).scrollTop(0);
  //  }
  }
});

$('#major1_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects1').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });
$('#major2_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects2').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });
$('#major3_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects3').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });
$('#major4_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects4').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });
$('#major5_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects5').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });
$('#major6_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects6').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });
$('#major7_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects7').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });
$('#major8_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects8').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });

$('#major9_prev').click(function(){
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects9').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#education_12_details').removeClass('inactive_tab1');
   $('#education_12_details').addClass('active_tab1 active');
   $('#education12_details').addClass('active in'); 
   $(window).scrollTop(0);
  });

  // $('#major10_prev').click(function(){
  //   $('#education_12_subjects').removeClass('active active_tab1');
  //  $('#education12_subjects10').removeClass('active');
  //  $('#education_12_subjects').addClass('inactive_tab1');
  //  $('#education_12_details').removeClass('inactive_tab1');
  //  $('#education_12_details').addClass('active_tab1 active');
  //  $('#education12_details').addClass('active in'); 
  //  $(window).scrollTop(0);
  // });

  $('#major1_next').click(function(){
    var error_mark_maths1_12='';
    var error_mark_phy1_12='';
    var error_mark_chem1_12='';
    var error_mark_stat1_12='';
    var error_mark_tot1_12='';

    if($.trim($('#mark_maths1_12').val()).length == 0)
  {
  //  error_mark_maths1_12 = 'This field is required';
  //  $('#error_mark_maths1_12').text(error_mark_maths1_12);
  //  $('#mark_maths1_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_maths1_12').val())>=0&&$.trim($('#mark_maths1_12').val())<=100){
   error_mark_maths1_12 = '';
   $('#error_mark_maths1_12').text(error_mark_maths1_12);
   $('#mark_maths1_12').removeClass('has-error');
    }
   else{
   error_mark_maths1_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_maths1_12').text(error_mark_maths1_12);
   $('#mark_maths1_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_phy1_12').val()).length == 0)
  {
  //  error_mark_phy1_12 = 'This field is required';
  //  $('#error_mark_phy1_12').text(error_mark_phy1_12);
  //  $('#mark_phy1_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_phy1_12').val())>=0&&$.trim($('#mark_phy1_12').val())<=100){
   error_mark_phy1_12 = '';
   $('#error_mark_phy1_12').text(error_mark_phy1_12);
   $('#mark_phy1_12').removeClass('has-error');
    }
   else{
   error_mark_phy1_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_phy1_12').text(error_mark_phy1_12);
   $('#mark_phy1_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_chem1_12').val()).length == 0)
  {
  //  error_mark_chem1_12 = 'This field is required';
  //  $('#error_mark_chem1_12').text(error_mark_chem1_12);
  //  $('#mark_chem1_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_chem1_12').val())>=0&&$.trim($('#mark_chem1_12').val())<=100){
   error_mark_chem1_12 = '';
   $('#error_mark_chem1_12').text(error_mark_chem1_12);
   $('#mark_chem1_12').removeClass('has-error');
    }
   else{
   error_mark_chem1_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_chem1_12').text(error_mark_chem1_12);
   $('#mark_chem1_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_stat1_12').val()).length == 0)
  {
  //  error_mark_stat1_12 = 'This field is required';
  //  $('#error_mark_stat1_12').text(error_mark_stat1_12);
  //  $('#mark_stat1_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_stat1_12').val())>=0&&$.trim($('#mark_stat1_12').val())<=100){
   error_mark_stat1_12 = '';
   $('#error_mark_stat1_12').text(error_mark_stat1_12);
   $('mark_stat1_12').removeClass('has-error');
    }
   else{
   error_mark_stat1_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_stat1_12').text(error_mark_stat1_12);
   $('#mark_stat1_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot1_12').val()).length == 0)
  {
  //  error_mark_tot1_12 = 'This field is required';
  //  $('#error_mark_tot1_12').text(error_mark_tot1_12);
  //  $('#mark_tot1_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot1_12').val())>=0&&$.trim($('#mark_tot1_12').val())<=600){
   error_mark_tot1_12 = '';
   $('#error_mark_tot1_12').text(error_mark_tot1_12);
   $('mark_tot1_12').removeClass('has-error');
    }
   else{
   error_mark_tot1_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot1_12').text(error_mark_tot1_12);
   $('#mark_tot1_12').addClass('has-error');
  }
  }

  if(error_mark_maths1_12!=''||error_mark_phy1_12!=''||error_mark_chem1_12!=''||error_mark_stat1_12!=''||error_mark_tot1_12!=''){
        $(window).scrollTop(0);
return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects1').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  });

  $('#major2_next').click(function(){
    var error_mark_comm2_12='';
    var error_mark_eco2_12='';
    var error_mark_acc2_12='';
    var error_mark_his2_12='';
    var error_mark_tot2_12='';

    if($.trim($('#mark_comm2_12').val()).length == 0)
  {
  //  error_mark_comm2_12 = 'This field is required';
  //  $('#error_mark_comm2_12').text(error_mark_comm2_12);
  //  $('#mark_comm2_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_comm2_12').val())>=0&&$.trim($('#mark_comm2_12').val())<=100){
   error_mark_comm2_12 = '';
   $('#error_mark_comm2_12').text(error_mark_comm2_12);
   $('#mark_comm2_12').removeClass('has-error');
    }
   else{
   error_mark_comm2_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_comm2_12').text(error_mark_comm2_12);
   $('#mark_comm2_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_eco2_12').val()).length == 0)
  {
  //  error_mark_eco2_12 = 'This field is required';
  //  $('#error_mark_eco2_12').text(error_mark_eco2_12);
  //  $('#mark_eco2_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_eco2_12').val())>=0&&$.trim($('#mark_eco2_12').val())<=100){
   error_mark_eco2_12 = '';
   $('#error_mark_eco2_12').text(error_mark_eco2_12);
   $('#mark_eco2_12').removeClass('has-error');
    }
   else{
   error_mark_eco2_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_eco2_12').text(error_mark_eco2_12);
   $('#mark_eco2_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_acc2_12').val()).length == 0)
  {
  //  error_mark_acc2_12 = 'This field is required';
  //  $('#error_mark_acc2_12').text(error_mark_acc2_12);
  //  $('#mark_acc2_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_acc2_12').val())>=0&&$.trim($('#mark_acc2_12').val())<=100){
   error_mark_acc2_12 = '';
   $('#error_mark_acc2_12').text(error_mark_acc2_12);
   $('#mark_acc2_12').removeClass('has-error');
    }
   else{
   error_mark_acc2_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_acc2_12').text(error_mark_acc2_12);
   $('#mark_acc2_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_his2_12').val()).length == 0)
  {
  //  error_mark_his2_12 = 'This field is required';
  //  $('#error_mark_his2_12').text(error_mark_his2_12);
  //  $('#mark_his2_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_his2_12').val())>=0&&$.trim($('#mark_his2_12').val())<=100){
   error_mark_his2_12 = '';
   $('#error_mark_his2_12').text(error_mark_his2_12);
   $('mark_his2_12').removeClass('has-error');
    }
   else{
   error_mark_his2_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_his2_12').text(error_mark_his2_12);
   $('#mark_his2_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot2_12').val()).length == 0)
  {
  //  error_mark_tot2_12 = 'This field is required';
  //  $('#error_mark_tot2_12').text(error_mark_tot2_12);
  //  $('#mark_tot2_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot2_12').val())>=0&&$.trim($('#mark_tot2_12').val())<=600){
   error_mark_tot2_12 = '';
   $('#error_mark_tot2_12').text(error_mark_tot2_12);
   $('mark_tot2_12').removeClass('has-error');
    }
   else{
   error_mark_tot2_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot2_12').text(error_mark_tot2_12);
   $('#mark_tot2_12').addClass('has-error');
  }
  }

  if(error_mark_comm2_12!=''||error_mark_eco2_12!=''||error_mark_acc2_12!=''||error_mark_his2_12!=''||error_mark_tot2_12!=''){
        $(window).scrollTop(0);

    return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects2').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  });

  $('#major3_next').click(function(){
    var error_mark_comm3_12='';
    var error_mark_eco3_12='';
    var error_mark_acc3_12='';
    var error_mark_bm3_12='';
    var error_mark_tot3_12='';

    if($.trim($('#mark_comm3_12').val()).length == 0)
  {
  //  error_mark_comm3_12 = 'This field is required';
  //  $('#error_mark_comm3_12').text(error_mark_comm3_12);
  //  $('#mark_comm3_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_comm3_12').val())>=0&&$.trim($('#mark_comm3_12').val())<=100){
   error_mark_comm3_12 = '';
   $('#error_mark_comm3_12').text(error_mark_comm3_12);
   $('#mark_comm3_12').removeClass('has-error');
    }
   else{
   error_mark_comm3_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_comm3_12').text(error_mark_comm3_12);
   $('#mark_comm3_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_eco3_12').val()).length == 0)
  {
  //  error_mark_eco3_12 = 'This field is required';
  //  $('#error_mark_eco3_12').text(error_mark_eco3_12);
  //  $('#mark_eco3_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_eco3_12').val())>=0&&$.trim($('#mark_eco3_12').val())<=100){
   error_mark_eco3_12 = '';
   $('#error_mark_eco3_12').text(error_mark_eco3_12);
   $('#mark_eco3_12').removeClass('has-error');
    }
   else{
   error_mark_eco3_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_eco3_12').text(error_mark_eco3_12);
   $('#mark_eco3_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_acc3_12').val()).length == 0)
  {
  //  error_mark_acc3_12 = 'This field is required';
  //  $('#error_mark_acc3_12').text(error_mark_acc3_12);
  //  $('#mark_acc3_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_acc3_12').val())>=0&&$.trim($('#mark_acc3_12').val())<=100){
   error_mark_acc3_12 = '';
   $('#error_mark_acc3_12').text(error_mark_acc3_12);
   $('#mark_acc3_12').removeClass('has-error');
    }
   else{
   error_mark_acc3_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_acc3_12').text(error_mark_acc3_12);
   $('#mark_acc3_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_bm3_12').val()).length == 0)
  {
  //  error_mark_bm3_12 = 'This field is required';
  //  $('#error_mark_bm3_12').text(error_mark_bm3_12);
  //  $('#mark_bm3_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_bm3_12').val())>=0&&$.trim($('#mark_bm3_12').val())<=100){
   error_mark_bm3_12 = '';
   $('#error_mark_bm3_12').text(error_mark_bm3_12);
   $('mark_bm3_12').removeClass('has-error');
    }
   else{
   error_mark_bm3_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_bm3_12').text(error_mark_bm3_12);
   $('#mark_bm3_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot3_12').val()).length == 0)
  {
  //  error_mark_tot3_12 = 'This field is required';
  //  $('#error_mark_tot3_12').text(error_mark_tot3_12);
  //  $('#mark_tot3_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot3_12').val())>=0&&$.trim($('#mark_tot3_12').val())<=600){
   error_mark_tot3_12 = '';
   $('#error_mark_tot3_12').text(error_mark_tot3_12);
   $('mark_tot3_12').removeClass('has-error');
    }
   else{
   error_mark_tot3_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot3_12').text(error_mark_tot3_12);
   $('#mark_tot3_12').addClass('has-error');
  }
  }

  if(error_mark_comm3_12!=''||error_mark_eco3_12!=''||error_mark_acc3_12!=''||error_mark_bm3_12!=''||error_mark_tot3_12!=''){
        $(window).scrollTop(0);
return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects3').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  });

  $('#major4_next').click(function(){
    var error_mark_comm4_12='';
    var error_mark_eco4_12='';
    var error_mark_acc4_12='';
    var error_mark_ps4_12='';
    var error_mark_tot4_12='';

    if($.trim($('#mark_comm4_12').val()).length == 0)
  {
  //  error_mark_comm4_12 = 'This field is required';
  //  $('#error_mark_comm4_12').text(error_mark_comm4_12);
  //  $('#mark_comm4_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_comm4_12').val())>=0&&$.trim($('#mark_comm4_12').val())<=100){
   error_mark_comm4_12 = '';
   $('#error_mark_comm4_12').text(error_mark_comm4_12);
   $('#mark_comm4_12').removeClass('has-error');
    }
   else{
   error_mark_comm4_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_comm4_12').text(error_mark_comm4_12);
   $('#mark_comm4_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_eco4_12').val()).length == 0)
  {
  //  error_mark_eco4_12 = 'This field is required';
  //  $('#error_mark_eco4_12').text(error_mark_eco4_12);
  //  $('#mark_eco4_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_eco4_12').val())>=0&&$.trim($('#mark_eco4_12').val())<=100){
   error_mark_eco4_12 = '';
   $('#error_mark_eco4_12').text(error_mark_eco4_12);
   $('#mark_eco4_12').removeClass('has-error');
    }
   else{
   error_mark_eco4_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_eco4_12').text(error_mark_eco4_12);
   $('#mark_eco4_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_acc4_12').val()).length == 0)
  {
  //  error_mark_acc4_12 = 'This field is required';
  //  $('#error_mark_acc4_12').text(error_mark_acc4_12);
  //  $('#mark_acc4_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_acc4_12').val())>=0&&$.trim($('#mark_acc4_12').val())<=100){
   error_mark_acc4_12 = '';
   $('#error_mark_acc4_12').text(error_mark_acc4_12);
   $('#mark_acc4_12').removeClass('has-error');
    }
   else{
   error_mark_acc4_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_acc4_12').text(error_mark_acc4_12);
   $('#mark_acc4_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_ps4_12').val()).length == 0)
  {
  //  error_mark_ps4_12 = 'This field is required';
  //  $('#error_mark_ps4_12').text(error_mark_ps4_12);
  //  $('#mark_ps4_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_ps4_12').val())>=0&&$.trim($('#mark_ps4_12').val())<=100){
   error_mark_ps4_12 = '';
   $('#error_mark_ps4_12').text(error_mark_ps4_12);
   $('mark_ps4_12').removeClass('has-error');
    }
   else{
   error_mark_ps4_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_ps4_12').text(error_mark_ps4_12);
   $('#mark_ps4_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot4_12').val()).length == 0)
  {
  //  error_mark_tot4_12 = 'This field is required';
  //  $('#error_mark_tot4_12').text(error_mark_tot4_12);
  //  $('#mark_tot4_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot4_12').val())>=0&&$.trim($('#mark_tot4_12').val())<=600){
   error_mark_tot4_12 = '';
   $('#error_mark_tot4_12').text(error_mark_tot4_12);
   $('mark_tot4_12').removeClass('has-error');
    }
   else{
   error_mark_tot4_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot4_12').text(error_mark_tot4_12);
   $('#mark_tot4_12').addClass('has-error');
  }
  }

  if(error_mark_comm4_12!=''||error_mark_eco4_12!=''||error_mark_acc4_12!=''||error_mark_ps4_12!=''||error_mark_tot4_12!=''){
        $(window).scrollTop(0);
return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects4').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  });

  $('#major5_next').click(function(){
    var error_mark_comm5_12='';
    var error_mark_eco5_12='';
    var error_mark_acc5_12='';
    var error_mark_stat5_12='';
    var error_mark_tot5_12='';

    if($.trim($('#mark_comm5_12').val()).length == 0)
  {
  //  error_mark_comm5_12 = 'This field is required';
  //  $('#error_mark_comm5_12').text(error_mark_comm5_12);
  //  $('#mark_comm5_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_comm5_12').val())>=0&&$.trim($('#mark_comm5_12').val())<=100){
   error_mark_comm5_12 = '';
   $('#error_mark_comm5_12').text(error_mark_comm5_12);
   $('#mark_comm5_12').removeClass('has-error');
    }
   else{
   error_mark_comm5_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_comm5_12').text(error_mark_comm5_12);
   $('#mark_comm5_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_eco5_12').val()).length == 0)
  {
  //  error_mark_eco5_12 = 'This field is required';
  //  $('#error_mark_eco5_12').text(error_mark_eco5_12);
  //  $('#mark_eco5_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_eco5_12').val())>=0&&$.trim($('#mark_eco5_12').val())<=100){
   error_mark_eco5_12 = '';
   $('#error_mark_eco5_12').text(error_mark_eco5_12);
   $('#mark_eco5_12').removeClass('has-error');
    }
   else{
   error_mark_eco5_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_eco5_12').text(error_mark_eco3_12);
   $('#mark_eco5_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_acc5_12').val()).length == 0)
  {
  //  error_mark_acc5_12 = 'This field is required';
  //  $('#error_mark_acc5_12').text(error_mark_acc5_12);
  //  $('#mark_acc5_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_acc5_12').val())>=0&&$.trim($('#mark_acc5_12').val())<=100){
   error_mark_acc5_12 = '';
   $('#error_mark_acc5_12').text(error_mark_acc5_12);
   $('#mark_acc5_12').removeClass('has-error');
    }
   else{
   error_mark_acc5_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_acc5_12').text(error_mark_acc5_12);
   $('#mark_acc5_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_stat5_12').val()).length == 0)
  {
  //  error_mark_stat5_12 = 'This field is required';
  //  $('#error_mark_stat5_12').text(error_mark_stat5_12);
  //  $('#mark_stat5_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_stat5_12').val())>=0&&$.trim($('#mark_stat5_12').val())<=100){
   error_mark_stat5_12 = '';
   $('#error_mark_stat5_12').text(error_mark_stat5_12);
   $('mark_stat5_12').removeClass('has-error');
    }
   else{
   error_mark_stat5_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_stat5_12').text(error_mark_stat5_12);
   $('#mark_stat5_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot5_12').val()).length == 0)
  {
  //  error_mark_tot5_12 = 'This field is required';
  //  $('#error_mark_tot5_12').text(error_mark_tot5_12);
  //  $('#mark_tot5_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot5_12').val())>=0&&$.trim($('#mark_tot5_12').val())<=600){
   error_mark_tot5_12 = '';
   $('#error_mark_tot5_12').text(error_mark_tot5_12);
   $('mark_tot5_12').removeClass('has-error');
    }
   else{
   error_mark_tot5_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot5_12').text(error_mark_tot5_12);
   $('#mark_tot5_12').addClass('has-error');
  }
  }

  if(error_mark_comm5_12!=''||error_mark_eco5_12!=''||error_mark_acc5_12!=''||error_mark_stat5_12!=''||error_mark_tot5_12!=''){
        $(window).scrollTop(0);
return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects5').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  });

  $('#major6_next').click(function(){
    var error_mark_maths6_12='';
    var error_mark_phy6_12='';
    var error_mark_chem6_12='';
    var error_mark_bio6_12='';
    var error_mark_tot6_12='';

    if($.trim($('#mark_maths6_12').val()).length == 0)
  {
  //  error_mark_maths6_12 = 'This field is required';
  //  $('#error_mark_maths6_12').text(error_mark_maths6_12);
  //  $('#mark_maths6_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_maths6_12').val())>=0&&$.trim($('#mark_maths6_12').val())<=100){
   error_mark_maths6_12 = '';
   $('#error_mark_maths6_12').text(error_mark_maths6_12);
   $('#mark_maths6_12').removeClass('has-error');
    }
   else{
   error_mark_maths6_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_maths6_12').text(error_mark_maths6_12);
   $('#mark_maths6_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_phy6_12').val()).length == 0)
  {
  //  error_mark_phy6_12 = 'This field is required';
  //  $('#error_mark_phy6_12').text(error_mark_phy6_12);
  //  $('#mark_phy6_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_phy6_12').val())>=0&&$.trim($('#mark_phy6_12').val())<=100){
   error_mark_phy6_12 = '';
   $('#error_mark_phy6_12').text(error_mark_phy6_12);
   $('#mark_phy6_12').removeClass('has-error');
    }
   else{
   error_mark_phy6_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_phy6_12').text(error_mark_phy6_12);
   $('#mark_phy6_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_chem6_12').val()).length == 0)
  {
  //  error_mark_chem6_12 = 'This field is required';
  //  $('#error_mark_chem6_12').text(error_mark_chem6_12);
  //  $('#mark_chem6_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_chem6_12').val())>=0&&$.trim($('#mark_chem6_12').val())<=100){
   error_mark_chem6_12 = '';
   $('#error_mark_chem6_12').text(error_mark_chem6_12);
   $('#mark_chem6_12').removeClass('has-error');
    }
   else{
   error_mark_chem6_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_chem6_12').text(error_mark_chem6_12);
   $('#mark_chem6_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_bio6_12').val()).length == 0)
  {
  //  error_mark_bio6_12 = 'This field is required';
  //  $('#error_mark_bio6_12').text(error_mark_bio6_12);
  //  $('#mark_bio6_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_bio6_12').val())>=0&&$.trim($('#mark_bio6_12').val())<=100){
   error_mark_bio6_12 = '';
   $('#error_mark_bio6_12').text(error_mark_bio6_12);
   $('mark_bio6_12').removeClass('has-error');
    }
   else{
   error_mark_bio6_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_bio6_12').text(error_mark_bio6_12);
   $('#mark_bio6_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot6_12').val()).length == 0)
  {
  //  error_mark_tot6_12 = 'This field is required';
  //  $('#error_mark_tot6_12').text(error_mark_tot6_12);
  //  $('#mark_tot6_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot6_12').val())>=0&&$.trim($('#mark_tot6_12').val())<=600){
   error_mark_tot6_12 = '';
   $('#error_mark_tot6_12').text(error_mark_tot6_12);
   $('mark_tot6_12').removeClass('has-error');
    }
   else{
   error_mark_tot6_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot6_12').text(error_mark_tot6_12);
   $('#mark_tot6_12').addClass('has-error');
  }
  }

  if(error_mark_maths6_12!=''||error_mark_phy6_12!=''||error_mark_chem6_12!=''||error_mark_bio6_12!=''||error_mark_tot6_12!=''){
        $(window).scrollTop(0);
return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects6').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  }); 

  $('#major7_next').click(function(){
    var error_mark_zoo7_12='';
    var error_mark_phy7_12='';
    var error_mark_chem7_12='';
    var error_mark_bot7_12='';
    var error_mark_tot7_12='';

    if($.trim($('#mark_zoo7_12').val()).length == 0)
  {
  //  error_mark_zoo7_12 = 'This field is required';
  //  $('#error_mark_zoo7_12').text(error_mark_zoo7_12);
  //  $('#mark_zoo7_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_zoo7_12').val())>=0&&$.trim($('#mark_zoo7_12').val())<=100){
   error_mark_zoo7_12 = '';
   $('#error_mark_zoo7_12').text(error_mark_zoo7_12);
   $('#mark_zoo7_12').removeClass('has-error');
    }
   else{
   error_mark_zoo7_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_zoo7_12').text(error_mark_zoo7_12);
   $('#mark_zoo7_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_phy7_12').val()).length == 0)
  {
  //  error_mark_phy7_12 = 'This field is required';
  //  $('#error_mark_phy7_12').text(error_mark_phy7_12);
  //  $('#mark_phy7_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_phy7_12').val())>=0&&$.trim($('#mark_phy7_12').val())<=100){
   error_mark_phy7_12 = '';
   $('#error_mark_phy7_12').text(error_mark_phy7_12);
   $('#mark_phy7_12').removeClass('has-error');
    }
   else{
   error_mark_phy7_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_phy7_12').text(error_mark_phy7_12);
   $('#mark_phy7_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_chem7_12').val()).length == 0)
  {
  //  error_mark_chem7_12 = 'This field is required';
  //  $('#error_mark_chem7_12').text(error_mark_chem7_12);
  //  $('#mark_chem7_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_chem7_12').val())>=0&&$.trim($('#mark_chem7_12').val())<=100){
   error_mark_chem7_12 = '';
   $('#error_mark_chem7_12').text(error_mark_chem7_12);
   $('#mark_chem7_12').removeClass('has-error');
    }
   else{
   error_mark_chem7_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_chem7_12').text(error_mark_chem7_12);
   $('#mark_chem7_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_bot7_12').val()).length == 0)
  {
  //  error_mark_bot7_12 = 'This field is required';
  //  $('#error_mark_bot7_12').text(error_mark_bot7_12);
  //  $('#mark_bot7_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_bot7_12').val())>=0&&$.trim($('#mark_bot7_12').val())<=100){
   error_mark_bot7_12 = '';
   $('#error_mark_bot7_12').text(error_mark_bot7_12);
   $('mark_bot7_12').removeClass('has-error');
    }
   else{
   error_mark_bot7_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_bot7_12').text(error_mark_bot7_12);
   $('#mark_bot7_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot7_12').val()).length == 0)
  {
  //  error_mark_tot7_12 = 'This field is required';
  //  $('#error_mark_tot7_12').text(error_mark_tot7_12);
  //  $('#mark_tot7_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot7_12').val())>=0&&$.trim($('#mark_tot7_12').val())<=600){
   error_mark_tot7_12 = '';
   $('#error_mark_tot7_12').text(error_mark_tot7_12);
   $('mark_tot7_12').removeClass('has-error');
    }
   else{
   error_mark_tot7_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot7_12').text(error_mark_tot7_12);
   $('#mark_tot7_12').addClass('has-error');
  }
  }

  if(error_mark_zoo7_12!=''||error_mark_phy7_12!=''||error_mark_chem7_12!=''||error_mark_bot7_12!=''||error_mark_tot7_12!=''){
        $(window).scrollTop(0);
return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects7').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  });

  $('#major8_next').click(function(){
    var error_mark_maths8_12='';
    var error_mark_phy8_12='';
    var error_mark_chem8_12='';
    var error_mark_cs8_12='';
    var error_mark_tot8_12='';

    if($.trim($('#mark_maths8_12').val()).length == 0)
  {
  //  error_mark_maths8_12 = 'This field is required';
  //  $('#error_mark_maths8_12').text(error_mark_maths8_12);
  //  $('#mark_maths8_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_maths8_12').val())>=0&&$.trim($('#mark_maths8_12').val())<=100){
   error_mark_maths8_12 = '';
   $('#error_mark_maths8_12').text(error_mark_maths8_12);
   $('#mark_maths8_12').removeClass('has-error');
    }
   else{
   error_mark_maths8_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_maths8_12').text(error_mark_maths8_12);
   $('#mark_maths8_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_phy8_12').val()).length == 0)
  {
  //  error_mark_phy8_12 = 'This field is required';
  //  $('#error_mark_phy8_12').text(error_mark_phy8_12);
  //  $('#mark_phy8_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_phy8_12').val())>=0&&$.trim($('#mark_phy8_12').val())<=100){
   error_mark_phy8_12 = '';
   $('#error_mark_phy8_12').text(error_mark_phy8_12);
   $('#mark_phy8_12').removeClass('has-error');
    }
   else{
   error_mark_phy8_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_phy8_12').text(error_mark_phy8_12);
   $('#mark_phy8_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_chem8_12').val()).length == 0)
  {
  //  error_mark_chem8_12 = 'This field is required';
  //  $('#error_mark_chem8_12').text(error_mark_chem8_12);
  //  $('#mark_chem8_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_chem8_12').val())>=0&&$.trim($('#mark_chem8_12').val())<=100){
   error_mark_chem8_12 = '';
   $('#error_mark_chem8_12').text(error_mark_chem8_12);
   $('#mark_chem8_12').removeClass('has-error');
    }
   else{
   error_mark_chem8_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_chem8_12').text(error_mark_chem8_12);
   $('#mark_chem8_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_cs8_12').val()).length == 0)
  {
  //  error_mark_cs8_12 = 'This field is required';
  //  $('#error_mark_cs8_12').text(error_mark_cs8_12);
  //  $('#mark_cs8_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_cs8_12').val())>=0&&$.trim($('#mark_cs8_12').val())<=100){
   error_mark_cs8_12 = '';
   $('#error_mark_cs8_12').text(error_mark_cs8_12);
   $('mark_cs8_12').removeClass('has-error');
    }
   else{
   error_mark_cs8_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_cs8_12').text(error_mark_cs8_12);
   $('#mark_cs8_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot8_12').val()).length == 0)
  {
  //  error_mark_tot8_12 = 'This field is required';
  //  $('#error_mark_tot8_12').text(error_mark_tot8_12);
  //  $('#mark_tot8_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot8_12').val())>=0&&$.trim($('#mark_tot8_12').val())<=600){
   error_mark_tot8_12 = '';
   $('#error_mark_tot8_12').text(error_mark_tot8_12);
   $('mark_tot8_12').removeClass('has-error');
    }
   else{
   error_mark_tot8_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot8_12').text(error_mark_tot8_12);
   $('#mark_tot8_12').addClass('has-error');
  }
  }

  if(error_mark_maths8_12!=''||error_mark_phy8_12!=''||error_mark_chem8_12!=''||error_mark_cs8_12!=''||error_mark_tot8_12!=''){
        $(window).scrollTop(0);
return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects8').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  });

  $('#major9_next').click(function(){
    var error_mark_acc9_12='';
    var error_mark_comm9_12='';
    var error_mark_comp9_12='';
    var error_mark_eco9_12='';
    var error_mark_tot9_12='';

    if($.trim($('#mark_acc9_12').val()).length == 0)
  {
  //  error_mark_acc9_12 = 'This field is required';
  //  $('#error_mark_acc9_12').text(error_mark_acc9_12);
  //  $('#mark_acc9_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_acc9_12').val())>=0&&$.trim($('#maracc9_12').val())<=100){
   error_mark_acc9_12 = '';
   $('#error_mark_acc9_12').text(error_mark_acc9_12);
   $('#mark_acc9_12').removeClass('has-error');
    }
   else{
   error_mark_acc9_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_acc9_12').text(error_mark_acc9_12);
   $('#mark_acc9_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_comm9_12').val()).length == 0)
  {
  //  error_mark_comm9_12 = 'This field is required';
  //  $('#error_mark_comm9_12').text(error_mark_comm9_12);
  //  $('#mark_comm9_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_comm9_12').val())>=0&&$.trim($('#mark_comm9_12').val())<=100){
   error_mark_comm9_12 = '';
   $('#error_mark_comm9_12').text(error_mark_comm9_12);
   $('#mark_comm9_12').removeClass('has-error');
    }
   else{
   error_mark_comm9_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_comm9_12').text(error_mark_comm9_12);
   $('#mark_comm9_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_comp9_12').val()).length == 0)
  {
  //  error_mark_comp9_12 = 'This field is required';
  //  $('#error_mark_comp9_12').text(error_mark_comp9_12);
  //  $('#mark_comp9_12').addClass('has-error');
  }
  else
  {
    if($.trim($('#mark_comp9_12').val())>=0&&$.trim($('#mark_comp9_12').val())<=100){
   error_mark_comp9_12 = '';
   $('#error_mark_comp9_12').text(error_mark_comp9_12);
   $('#mark_comp9_12').removeClass('has-error');
    }
   else{
   error_mark_comp9_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_comp9_12').text(error_mark_comp9_12);
   $('#mark_comp9_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_eco9_12').val()).length == 0)
  {
  //  error_mark_eco9_12 = 'This field is required';
  //  $('#error_mark_eco9_12').text(error_mark_eco9_12);
  //  $('#mark_eco9_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_eco9_12').val())>=0&&$.trim($('#mark_eco9_12').val())<=100){
   error_mark_eco9_12 = '';
   $('#error_mark_eco9_12').text(error_mark_eco9_12);
   $('mark_eco9_12').removeClass('has-error');
    }
   else{
   error_mark_eco9_12 = 'Must be a number less than or equal to 100';
   $('#error_mark_eco9_12').text(error_mark_eco9_12);
   $('#mark_eco9_12').addClass('has-error');
  }
  }

  if($.trim($('#mark_tot9_12').val()).length == 0)
  {
  //  error_mark_tot9_12 = 'This field is required';
  //  $('#error_mark_tot9_12').text(error_mark_tot9_12);
  //  $('#mark_tot9_12').addClass('has-error');
  }
  else
  {
    if($.trim($('mark_tot9_12').val())>=0&&$.trim($('#mark_tot9_12').val())<=600){
   error_mark_tot9_12 = '';
   $('#error_mark_tot9_12').text(error_mark_tot9_12);
   $('mark_tot9_12').removeClass('has-error');
    }
   else{
   error_mark_tot9_12 = 'Must be a number less than or equal to 600';
   $('#error_mark_tot9_12').text(error_mark_tot9_12);
   $('#mark_tot9_12').addClass('has-error');
  }
  }

  if(error_mark_acc9_12!=''||error_mark_comm9_12!=''||error_mark_comp9_12!=''||error_mark_eco9_12!=''||error_mark_tot9_12!=''){
        $(window).scrollTop(0);
return false;
  }
  else{
    $('#education_12_subjects').removeClass('active active_tab1');
   $('#education12_subjects9').removeClass('active');
   $('#education_12_subjects').addClass('inactive_tab1');
   $('#completion').removeClass('inactive_tab1');
   $('#completion').addClass('active_tab1 active');
   $('#endcompletion').addClass('active in');
   $(window).scrollTop(0);
   } 
  });

//   $('#major10_next').click(function(){
//     console.log("10th subject")
//     var error_mark_as10_12='';
//     var error_mark_bio10_12='';
//     var error_mark_comtech10_12='';
//     var error_mark_ap10_12='';
//     var error_mark_tot10_12='';

//     if($.trim($('#mark_as10_12').val()).length == 0)
//   {
//    error_mark_as10_12 = 'This field is required';
//    $('#error_mark_as10_12').text(error_mark_as10_12);
//    $('#mark_as10_12').addClass('has-error');
//   }
//   else
//   {
//     if($.trim($('#mark_as10_12').val())>=0&&$.trim($('#mark_as10_12').val())<=100){
//    error_mark_as10_12 = '';
//    $('#error_mark_as10_12').text(error_mark_as10_12);
//    $('#mark_as10_12').removeClass('has-error');
//     }
//    else{
//    error_mark_as10_12 = 'Must be a number less than or equal to 100';
//    $('#error_mark_as10_12').text(error_mark_as10_12);
//    $('#mark_as10_12').addClass('has-error');
//   }
//   }

//   if($.trim($('#mark_bio10_12').val()).length == 0)
//   {
//    error_mark_bio10_12 = 'This field is required';
//    $('#error_mark_bio10_12').text(error_mark_bio10_12);
//    $('#mark_bio10_12').addClass('has-error');
//   }
//   else
//   {
//     if($.trim($('#mark_bio10_12').val())>=0&&$.trim($('#mark_bio10_12').val())<=100){
//    error_mark_bio10_12 = '';
//    $('#error_mark_bio10_12').text(error_mark_bio10_12);
//    $('#mark_bio10_12').removeClass('has-error');
//     }
//    else{
//    error_mark_bio10_12 = 'Must be a number less than or equal to 100';
//    $('#error_mark_bio10_12').text(error_mark_bio10_12);
//    $('#mark_bio10_12').addClass('has-error');
//   }
//   }

//   if($.trim($('#mark_comtech10_12').val()).length == 0)
//   {
//    error_mark_comtech10_12 = 'This field is required';
//    $('#error_mark_comtech10_12').text(error_mark_comtech10_12);
//    $('#mark_comtech10_12').addClass('has-error');
//   }
//   else
//   {
//     if($.trim($('#mark_comtech10_12').val())>=0&&$.trim($('#mark_comtech10_12').val())<=100){
//    error_mark_comtech10_12 = '';
//    $('#error_mark_comtech10_12').text(error_mark_comtech10_12);
//    $('#mark_comtech10_12').removeClass('has-error');
//     }
//    else{
//    error_mark_comtech10_12 = 'Must be a number less than or equal to 100';
//    $('#error_mark_comtech10_12').text(error_mark_comtech10_12);
//    $('#mark_comtech10_12').addClass('has-error');
//   }
//   }

//   if($.trim($('#mark_ap10_12').val()).length == 0)
//   {
//    error_mark_ap10_12 = 'This field is required';
//    $('#error_mark_ap10_12').text(error_mark_ap10_12);
//    $('#mark_ap10_12').addClass('has-error');
//   }
//   else
//   {
//     if($.trim($('mark_ap10_12').val())>=0&&$.trim($('#mark_ap10_12').val())<=100){
//    error_mark_ap10_12 = '';
//    $('#error_mark_ap10_12').text(error_mark_ap10_12);
//    $('mark_ap10_12').removeClass('has-error');
//     }
//    else{
//    error_mark_ap10_12 = 'Must be a number less than or equal to 100';
//    $('#error_mark_ap10_12').text(error_mark_ap10_12);
//    $('#mark_ap10_12').addClass('has-error');
//   }
//   }

//   if($.trim($('#mark_tot10_12').val()).length == 0)
//   {
//    error_mark_tot10_12 = 'This field is required';
//    $('#error_mark_tot10_12').text(error_mark_tot10_12);
//    $('#mark_tot10_12').addClass('has-error');
//   }
//   else
//   {
//     if($.trim($('mark_tot10_12').val())>=0&&$.trim($('#mark_tot10_12').val())<=600){
//    error_mark_tot10_12 = '';
//    $('#error_mark_tot10_12').text(error_mark_tot10_12);
//    $('mark_tot10_12').removeClass('has-error');
//     }
//    else{
//    error_mark_tot10_12 = 'Must be a number less than or equal to 600';
//    $('#error_mark_tot10_12').text(error_mark_tot10_12);
//    $('#mark_tot10_12').addClass('has-error');
//   }
//   }

//   if(error_mark_as10_12!=''||error_mark_bio10_12!=''||error_mark_comtech10_12!=''||error_mark_ap10_12!=''||error_mark_tot10_12!=''){
//         $(window).scrollTop(0);
// return false;
//   }
//   else{
//     $('#education_12_subjects').removeClass('active active_tab1');
//    $('#education12_subjects10').removeClass('active');
//    $('#education_12_subjects').addClass('inactive_tab1');
//    $('#completion').removeClass('inactive_tab1');
//    $('#completion').addClass('active_tab1 active');
//    $('#endcompletion').addClass('active in');
//    $(window).scrollTop(0);
//    } 
//   });

  $('#deserve_prev').click(function(){
    if($.trim($('#sub12').val())=='Mathematics / Physics / Chemistry / Statistics'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects1').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
    }
   else if($.trim($('#sub12').val())=='Accountancy / Commerce / Economics / History'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects2').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
    }
    else if($.trim($('#sub12').val())=='Accountancy / Business Maths / Commerce / Economics'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects3').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
    }
    else if($.trim($('#sub12').val())=='Accountancy / Commerce / Economics / Political Science'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects4').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
  }
    else if($.trim($('#sub12').val())=='Commerce / Economics / Accountancy / Statistics'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects5').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
    }
    else if($.trim($('#sub12').val())=='Biology / Chemistry / Mathematics / Physics'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects6').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
    }
    else if($.trim($('#sub12').val())=='Botany / Chemistry / Physics / Zoology'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects7').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
    }
    else if($.trim($('#sub12').val())=='Chemistry / Computer Science / Mathematics / Physics'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects8').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
    }
    else if($.trim($('#sub12').val())=='Accountancy / Commerce / Computer Science / Economics'){
    $('#education_12_subjects').addClass('active active_tab1');
   $('#education12_subjects9').addClass('active');
   $('#education_12_subjects').removeClass('inactive_tab1');
   $('#completion').addClass('inactive_tab1');
   $('#completion').removeClass('active_tab1 active');
   $('#endcompletion').removeClass('active in');
   $(window).scrollTop(0);
    }
    // else if($.trim($('#sub12').val())=='Agriculture Science / Biology / Computer Technology / Agriculture Practical'){
    //   $('#education_12_subjects').addClass('active active_tab1');
    //  $('#education12_subjects10').addClass('active');
    //  $('#education_12_subjects').removeClass('inactive_tab1');
    //  $('#completion').addClass('inactive_tab1');
    //  $('#completion').removeClass('active_tab1 active');
    //  $('#endcompletion').removeClass('active in');
    //  $(window).scrollTop(0);
    //   }
  })

  $('#submit').click(function(){
    print('hello');
  // var error_deserve = '';
  // if($.trim($('#deserve').val()).length == 0)
  // {
  //  error_deserve = 'This field is required';
  //  $('#error_deserve').text(error_deserve);
  //  $('#deserve').addClass('has-error');
  // }
  // else
  // {
  //  error_deserve = '';
  //  $('#error_deserve').text(error_deserve);
  //  $('#deserve').removeClass('has-error');
  // }

  // if(error_deserve!=''){
  //   return false;
  // }
  // else{
    // $('#education_12_subjects').addClass('active active_tab1');
  //  $('#education12_subjects8').addClass('active');
  //  $('#education_12_subjects').removeClass('inactive_tab1');
  //  $('#completion').addClass('inactive_tab1');
  //  $('#completion').removeClass('active_tab1 active');
  //  $('#endcompletion').removeClass('active in');
  //  $(window).scrollTop(0);
  // $('#register_form').style.display="none";
  document.getElementById('register_form').style.display='none';
  document.getElementById('fullpage').style.display='none';
  // document.getElementById('scholarshiphope3').style.backgroundColor="grey";
  //}
  document.getElementById('loading').style.background = "url('spinner.gif') no-repeat center center";
  document.getElementById('loading').style.position = 'absolute';
  document.getElementById('loading').style.top = "0";
  document.getElementById('loading').style.left = "0px";
  document.getElementById('loading').style.height = "100%";
  document.getElementById('loading').style.width = "100%";
  document.getElementById('loading').style.zIndex = "99999";
  });
});
});

