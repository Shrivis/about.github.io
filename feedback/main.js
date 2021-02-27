function validate() {
    var notvalid = 0;
    var fname = document.getElementById('fname');
    var mname = document.getElementById('mname');
    var lname = document.getElementById('lname');
    var suz = document.getElementById("suz");
    var option = document.getElementsByName('gender');

    // Clearing last warnnings
    document.getElementById("fnamev").innerHTML = '';
    document.getElementById("lnamev").innerHTML = '';
    document.getElementById("suzv").innerHTML = '';
    document.getElementById("genderv").innerHTML = '';
    if (fname.value == "") {
        document.getElementById("fnamev").innerHTML = "First Name cannot be blank";
        notvalid = 1;
    }
    if (lname.value == "") {
        document.getElementById("lnamev").innerHTML = "Last Name cannot be blank";
        notvalid = 1;
    }
    if (suz.value == "") {
        document.getElementById("suzv").innerHTML = "You must give a suggestion";
        notvalid = 1;
    }
    if (!(option[0].checked || option[1].checked || option[2].checked)) {
        document.getElementById("genderv").innerHTML = "Please Seclect your gender";
        notvalid = 1;
    }
    if (notvalid == 0) {
        var title;
        if(option[0].checked){
            title = 'Mr. ';
        }
        else if (option[1].checked) {
            title = 'Ms/Mrs. ';
        }
        else {
            title = 'Mx. ';
        }
        var div_count = document.getElementsByName('div_count').length;
        if(div_count > 4) {
            document.getElementById('hidden').innerHTML = "";
            div_count = 0;
        }
        var str =  `<div name="div_count" class="card my-2">
                        <div class="mx-2">
                                <p>${suz.value}</p>
                                <footer class="name">${title}${fname.value} ${mname.value} ${lname.value}</footer>
                        </div>
                    </div>`;
        var div = document.createElement("div");
        div.innerHTML = str;
        document.getElementById('hidden').appendChild(div);  
        document.getElementById("form").reset();
    }
}
function clear_win() {
    document.getElementById('hidden').innerHTML = "";
    document.getElementById("fnamev").innerHTML = '';
    document.getElementById("lnamev").innerHTML = '';
    document.getElementById("suzv").innerHTML = '';
    document.getElementById("genderv").innerHTML = '';
}