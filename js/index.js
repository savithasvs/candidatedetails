$(document).ready(function () {
  $('#other_degree').hide();
  $('#other_department').hide();
  $('#back_to_select_dept').hide();
  $('#back_to_select_dept_text').hide();
  $('#other_reference').hide();
  $('#back_to_select').hide();
  $('#back_to_select_text').hide();
  $('#other_college').hide();
  $('#back_to_select_college').hide();
  $('#back_to_select_college_text').hide();
  $('#check').hide();

  $('#degree').change(function() {
    if ($('#degree').val() == 'Other') {
      $('#department').hide();
      $('#other_degree').show();
    } else {
      $('#department').show();
      $('#other_degree').hide();
      var dept = {
        BTech:['Information Technology','Aeronautical engineering','Marine engineering','Automobile engineering','Other'],
        
        BE:['Computer Science Engineering','Mechanical Engineering','Other'],

        Bsc:['Agriculture','Biotechnology','Zoology','Clinical Research & Healthcare Management','Forestry',
        'Microbiology','Nursing','Physiotherapy','Radiology','Bioinformatics','Physics','Chemistry','Botany','IT','Computer Science','Other'],

        Msc:['Agriculture','Geography','Analytical Chemistry','Geoinformatics','Applied Psychology',
        'Geology','Artificial Intelligence','Home Science','Big Data Analytics','Horticulture','Biochemistry','IT','Bioinformatics',
        'Inorganic Chemistry','Biomedical Science','Life Scien','Biotechnology','Mathematics','Botany','Medical Anatomy','Chemistry',
        'Medical Lab Technology','Clinical Research','Medical Surgical Nursing','Computer Science','Microbiology','Data Science',
        'Neuroscience','Development Studies','Nursing','Economics','Organic Chemistry','Electronics','Physics',
        'Environmental Science','Psychology','Food Technology','Statistics','Forensic Sciences','Zoology','Other'],
      };
      var degree = document.getElementById('degree');
      var selected = degree.value;
      //var previous = document.querySelectorAll('#department option');
      //previous.forEach(o => o.remove());
      $('#department option[value!=""]').remove();
      
      for (var j = 0; j < dept[selected].length; j++) {
        var dynamic_dept = document.createElement('OPTION');
        // dynamic_dept.innerHTML = dept[selected][j];
        dynamic_dept.innerHTML = dept[selected][j];
        department.appendChild(dynamic_dept);
      }
    }
  });

    // shows input area if other department is selcted
    $('#department').change(function() {
      // checks the value is other
      if ($('#department').val() == 'Other') {
        // uncheck the check box if it is already checked
        if($('#back_to_select_dept').prop('checked') == true){
          $('#back_to_select_dept').prop('checked', false)
        }
        // hides the department dropdown
        $('#department').hide();
        // shows the input area, checkbox and help text
        $('#other_department').show();
        $('#back_to_select_dept').show();
        $('#back_to_select_dept_text').show();
      }
    });
  
    // get back to the dropdown if checkbox is checked
    $('#back_to_select_dept').change(function() {
      if ($('#back_to_select_dept').val() == "1") {
        // shows the department dropdown
        $('#department').show();
        // makes the value as department in dropdown
        $('#department').val('');
        // hides the input area, checkbox and help text
        $('#other_department').hide();
        $('#back_to_select_dept').hide();
        $('#back_to_select_dept_text').hide();
      }
    })
  
    // show inputarea and checkbox if value is other
    $('#about').change(function() {
      // checks the values is other
      if ($('#about').val() == 'other') {
        // checks the checkbox is checked 
        if ($('#back_to_select').prop('checked') == true) {
          // uncheck the checkbox if it is checked
          $('#back_to_select').prop('checked', false)
        }
        // hides the dropdown
        $('#about').hide();
        // shows the inputarea
        $('#other_reference').show();
        // shows the checkbox and help text
        $('#back_to_select').show();
        $('#back_to_select_text').show();
      }
    });
  
    // checks the checkbox is checked
    $('#back_to_select').change(function() {
      // value will be 1 only if the checkbox is checked
      if ($('#back_to_select').val() == "1") {
        // shows about 
        $('#about').show();
        // selects the default value as selected
        $('#about').val('default');
        // hides the textarea, checkbox, and help text
        $('#other_reference').hide();
        $('#back_to_select').hide();
        $('#back_to_select_text').hide();
      }
    });
  

  // enable check svg if file is selected
  $('#resume').change(function() {
    $('#check').show();
  });

  // hide the check svg if inputs are reset
  $('#reset').mouseup(function(){
    $('#check').hide();
  });

});

// suggestion
var sug = {
  college: ['Dr.NGP Institute Of Tchnology','PSG Institute Of Technology','Kumaraguru Institute Of Technology' ,'Indian Institute Of Technology','Krishna Institute Of Technology','Loyola Institute Of Technology','Mahendra Institute Of Technlogy','KPR Institute Of Technology','Coimbatore Institute Of Technology' ],
  // years: ['2022','2021','2020','2019','2018','2017','2017'],
  skills: ["Node Js", "Mango DB", "Java Script", "Android Developer", "Web Developer", "React Native", "Networking", "Power programmer", "HTML"],
  // jobprofile: ['Android Developer', 'Web Developer', 'Software Engineer', 'Game Designer'],
  location: ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kancheepuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Perambalur", "Pudukottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Nilgiris", "Theni", "Thiruvallur", "Thiruvannamalai", "Thiruvarur", "Thirunelveli", " Tiruppur", "Trichirappalli", " Uticorin", "Vellore", "Villupuram ", " Virudhunagar"],
  portfolio: ["GitHub" , "LinkedIn" , "YouTube" , "Youtu.be"],
}

window.onload = function () {
  
  var currentYear = (new Date()).getFullYear();

  var years = document.getElementById("years");
  for (var i = 1950; i <= currentYear + 5; i++) {
    var option = document.createElement("OPTION");
    option.innerHTML = i;
    option.value = i;
    years.appendChild(option);
  }
  document.getElementById("department").options[0].disabled = true;
};

function getIp(callback) {
    fetch('https://ipinfo.io/json?token=13c67a1024d593', { headers: { 'Accept': 'application/json' } })
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: 'in',
        };
      })
      .then((resp) => callback(resp.country));
  }

  const phoneInputField = document.querySelector("#mobile");

  //const phoneInput = window.intlTelInput(phoneInputField, {
   // initialCountry: "auto",
    // separateDialCode: true,
   // preferredCountries: ["in", "us", "lk", "bt", "bd"],
   // geoIpLookup: getIp,
   // utilsScript:
    //  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",customContainer: "w-100"
 // });


 // document.getElementById("mobile").addEventListener("change", process, false);

 //function process() {

   // if (phoneInput.isValidNumber()) {
     // console.log("Success");
     // const phoneNumber = phoneInput.getNumber();
     // document.getElementById('mobile').value = phoneNumber;
      
    //}
    //else {
     // console.log("Error");
     // document.getElementById('mobile').value = ""
   // }
   // console.log(document.getElementById("mobile").value);

 // }
  const tagContainer = document.getElementById('skills');
const input = document.getElementById('myInput');

let tags = [];

input.addEventListener('keyup', (e) => {
  if (e.key === ',') {
    e.target.value.split(',').forEach(tag => {
      if (tags.includes(tag) || tag.length === 0 || tag.trim() === '') {
        //   clearTag(tags);
      } else {
        tags.push(tag);
      }

    });
    document.getElementById('myInput').value = tags;
    console.log(document.getElementById('myInput').value)
    addTags();
    input.value = '';
  }
});
function addTags() {
  reset();
  tags.slice().reverse().forEach(function (tag) {
    const input = createTag(tag);
    tagContainer.prepend(input);
    document.getElementById('skills').value = tags;
  });
}

function reset() {
  document.querySelectorAll('.tag').forEach(function (tag) {
    tag.parentElement.removeChild(tag);
  });
}

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class', 'material-icon');
  closeBtn.setAttribute('data-item', label);
  closeBtn.innerHTML = 'x';

 div.appendChild(span);
  div.appendChild(closeBtn);

  return div;
}

document.addEventListener('click', function (e) {
  if (e.target.tagName == 'I') {
    const value = e.target.getAttribute('data-item');
    const index = tags.indexOf(value);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    addTags();
  }
});

document.getElementById("myInput").addEventListener("blur", skill, false);
function skill(){
  document.getElementById('myInput').style.color='white';
  document.getElementById('myInput').value = document.getElementById('skills').value;
}
document.getElementById("myInput").addEventListener("click",skillOnClick,false);
function skillOnClick(){
  document.getElementById('myInput').style.color='black';
  document.getElementById('myInput').value = ''
}

function validateRecaptcha() {
let cap = false;
let upl = false;
  var response = grecaptcha.getResponse();
  if (response.length === 0) {

      alert("Captcha Not validated");
      cap = false;

  } else {
      cap = true;
  }

  var fileEmpty = document.getElementById('resume').value;
  
  if (fileEmpty == "") {
  
    alert("Please upload your resume to continue!");
    upl = false;
  
  }else {
    upl = true;
  } 
  return cap && upl;
  
}
