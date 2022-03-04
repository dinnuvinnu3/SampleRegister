var valueSel = {
    "FrontEnd" : ["HTML", "CSS", "JavaScript", "Angular"],
    "Backend" : ["PHP", "MySQL", "Laravel", "MongoDB"]
}

var places = {
    "online" : ["Remote"],
    "offline" : ["Hyderabad", "Bangalore", "Delhi", "Pune", "Mumbai", "Chennai"]
}

window.onload = function(){
    var courseSel = document.getElementById("course");
    var techSel = document.getElementById("technology");

    for(var x in valueSel){
        courseSel.options[courseSel.options.length] = new Option(x, x);
    }

    courseSel.onchange = function() {
        techSel.length = 1;
        var z = valueSel[this.value];
        //document.write(z[0]);
        for (var i = 0; i < z.length; i++) {
            techSel.options[techSel.options.length] = new Option(z[i], z[i]);
        }
    }

    var prgtype = document.getElementById('program');
    var locations = document.getElementById('loc');

    for(var x in places){
        prgtype.options[prgtype.options.length] = new Option(x, x);
    }

    prgtype.onchange = function(){
        locations.length = 1;
        var z = places[this.value];
        for(var i=0; i<z.length; i++){
            locations.options[locations.options.length] = new Option(z[i], z[i]);
        }
    }
}

function checkV(){
    var fm = document.forms["myForm"];
    var c = fm["telugu"];
    var c1 = fm["english"];
    var c2 = fm["hindi"];
    var c3 = fm["tamil"];
    
    if(c.checked == false && c1.checked == false && c2.checked == false && c3.checked == false){
        document.getElementById('msg').innerHTML = "<li>Please check atleast one</li>";
        return false;
    }
    document.getElementById('table').style.display = "block";
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var email = row.insertCell(1);
    var phonno = row.insertCell(2);
    var gender = row.insertCell(3);
    var course = row.insertCell(4);
    var technology = row.insertCell(5);
    var prgmtype = row.insertCell(6);
    var location = row.insertCell(7);
    var address = row.insertCell(8);
    var languages = row.insertCell(9);
    var totLanguages = "";
    if(c.checked == true){ totLanguages += c.value + ", "; }
    if(c1.checked == true){ totLanguages += c1.value + ", "; }
    if(c2.checked == true){ totLanguages += c2.value + ", "; }
    if(c3.checked == true){ totLanguages += c3.value + ", "; }
    var lang = totLanguages.substring(0, totLanguages.length - 2);
    languages.innerHTML = lang;
    var nm = fm["name"].value;
    var eml = fm["email"].value;
    var phone = fm["phn_no"].value;
    var gen = fm["gender"].value;
    var crse = fm["course"].value;
    var tech = fm["technology"].value;
    var ptype = fm["program"].value;
    var place = fm["loc"].value;
    var add = fm["address"].value;
    name.innerHTML = nm;
    email.innerHTML = eml;
    phonno.innerHTML = phone;
    gender.innerHTML = gen;
    course.innerHTML = crse;
    technology.innerHTML = tech;
    prgmtype.innerHTML = ptype;
    location.innerHTML = place;
    address.innerHTML = add;
    languages.innerHTML = lang;
    /*document.getElementById('n').innerHTML = "Name";
    document.getElementById('e').innerHTML = "Email"
    document.getElementById('pn').innerHTML = "Phone Number"
    document.getElementById('r-name').innerHTML = nm;
    document.getElementById('r-email').innerHTML = eml;
    document.getElementById('r-phnno').innerHTML = phone;*/
    return false;             
    /*var fm = document.forms["myForm"];
    var c = fm["telugu"];
    var c1 = fm["english"];
    var c2 = fm["hindi"];
    var c3 = fm["tamil"];
    
    if(c.checked == false && c1.checked == false && c2.checked == false && c3.checked == false){
        document.getElementById('msg').innerHTML = "<li>Please check atleast one</li>";
        return false;
    }
    document.getElementById('table').style.display = "block";
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var email = row.insertCell(1);
    var phonno = row.insertCell(2);
    var gender = row.insertCell(3);
    var course = row.insertCell(4);
    var technology = row.insertCell(5);
    var prgmtype = row.insertCell(6);
    var location = row.insertCell(7);
    var address = row.insertCell(8);
    var languages = row.insertCell(9);
    var totLanguages = "";
    if(c.checked == true){ totLanguages += c.value + ", "; }
    if(c1.checked == true){ totLanguages += c1.value + ", "; }
    if(c2.checked == true){ totLanguages += c2.value + ", "; }
    if(c3.checked == true){ totLanguages += c3.value + ", "; }
    let lang = totLanguages.substring(0, totLanguages.length - 2);
    languages.innerHTML = lang;
    var nm = fm["name"].value;
    var eml = fm["email"].value;
    var phone = fm["phn_no"].value;
    var gen = fm["gender"].value;
    var crse = fm["course"].value;
    var tech = fm["technology"].value;
    var ptype = fm["program"].value;
    var place = fm["loc"].value;
    var add = fm["address"].value;
    name.innerHTML = nm;
    email.innerHTML = eml;
    phonno.innerHTML = phone;
    gender.innerHTML = gen;
    course.innerHTML = crse;
    technology.innerHTML = tech;
    prgmtype.innerHTML = ptype;
    location.innerHTML = place;
    address.innerHTML = add;
    languages.innerHTML = lang;
    return false;
    */                                                                                                      
}