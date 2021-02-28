function validate() {

    // Data 
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

    // Validation 
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

    // Formatting suggetion message and creating a card
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
        var str =   `<div class="card my-2">
                        <div class="mx-2">
                                <p>${suz.value}</p>
                                <footer class="name">- ${title}${fname.value} ${mname.value} ${lname.value}</footer>
                        </div>
                    </div>`;
        localStorage.setItem(localStorage.length + 1, str);
        print(); // Prints five suggestions
    }
}

// Print fuction to print five random suggetion out of localStorage
function print() {
    document.getElementById('hidden').innerHTML = "";
    for (var i = 0; i < localStorage.length && i<5; i++){
        var div = document.createElement("div");
        div.innerHTML = localStorage.getItem(localStorage.key(i));
        document.getElementById('hidden').appendChild(div);  
    }
    // Adding show all button if total suggestions are greater than five
    if(localStorage.length > 5) {
        var str =  `<div class="align-self-end ml-auto"> 
                        <button type="button" onclick="printall()" class="btn card btn-secondary"> 
                            Show All
                        </button> 
                    </div> `
        var div = document.createElement("div");
        div.innerHTML = str;
        document.getElementById('hidden').appendChild(div);
    }
    document.getElementById("form").reset();
}

// Print function that prints all suggestions
function printall() {
    document.getElementById('hidden').innerHTML = "";
    for (var i = 0; i < localStorage.length; i++){
        var div = document.createElement("div");
        div.innerHTML = localStorage.getItem(localStorage.key(i));
        document.getElementById('hidden').appendChild(div);  
    }
    // Button to show only five suggestion
    var str =  `<div class="align-self-end ml-auto"> 
                        <button type="button" onclick="print()" class="btn card btn-secondary"> 
                            Show Less
                        </button> 
                    </div> `
    var div = document.createElement("div");
    div.innerHTML = str;
    document.getElementById('hidden').appendChild(div);
}

// Function to clear suggestion window and error messages
function clear_win() {
    if (window.matchMedia("(max-width: 500px)").matches) {
        document.getElementById("suz_win").style.height = "0vh";
    }
    document.getElementById('hidden').innerHTML = '';
    document.getElementById("fnamev").innerHTML = '';
    document.getElementById("lnamev").innerHTML = '';
    document.getElementById("suzv").innerHTML = '';
    document.getElementById("genderv").innerHTML = '';
    localStorage.clear();
}

// Calling Print();
print();