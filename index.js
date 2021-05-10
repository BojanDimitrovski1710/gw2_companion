var nav_state = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function openNav(){
    if(!nav_state){
        $('.left').css('width' , '20%')
        $('.right').css('width' , '80%')     
        $('.nav_bar_content li').css('display' , 'block')
        //border-bottom: 3px solid black;
        $('.left').css("border-right", '3px solid black')
        nav_state = 1;
    }else{
        $('.left').css('width' , '0%')
        $('.right').css('width' , '100%')
        $('.nav_bar_content li').css('display' , 'none')
        $('.left').css("border-right", 'none')
        nav_state = 0;
       
    }
}

var menu_state = 0;
async function collapse_api_menu(){
    if(!menu_state){
        $("#api_key_menu").css("width", "auto");
        $(".api_key_menu_item").css("display", "inline-block");
        $("#api_key_menu").css("border", "2px solid black");
        $("#api_key_menu_btn").html("<");
        menu_state = 1;
    }else{
        $("#api_key_menu").css("width", "0%");
        $(".api_key_menu_item").css("display", "none");
        $("#api_key_menu").css("border", "0px solid black");
        $("#api_key_menu_btn").html("=");
        menu_state = 0;
    }
}


//func to find out get the raid info from the api
const api_url = 'https://api.guildwars2.com/';

async function check_raids(){
    const raid_url = api_url + 'v2/account/raids?access_token=';
    const raids = await fetch(raid_url + localStorage.getItem("api_key"));

    var data = await raids.json(); 
    
    check_bosses(data);
    
}

//func to display what bosses have been killed so far
function check_bosses(data){  
    data.forEach(raid_boss => {
        $('#' + raid_boss).css('color', 'lime');
        $('#' + raid_boss).css('text-shadow', '1px 1px black');
    });
}

function validate_key(api){
    var api_parts= api.split("-");
    if(api_parts[0].length ===  8 && api_parts[1].length === 4 && api_parts[2].length === 4 && api_parts[3].length === 4 && api_parts[4].length === 20 && api_parts[5].length === 4 && api_parts[6].length === 4 && api_parts[7].length === 4 && api_parts[8].length === 12){
        return true;
    }else{
        alert("Invalid API key");
        return false;
    }
}

function submit_api(){
    api_key = document.getElementById("api_key_input").value;
    //enter validation here
    if(validate_key(api_key))
        localStorage.setItem("api_key" , api_key)
    document.getElementById("api_key_input").value = "";
 
}


async function check_characters(){
    const raid_url = api_url + 'v2/characters?access_token=';
    const raids = await fetch(raid_url + localStorage.getItem("api_key"));

    var data = await raids.json(); 
    
    console.log(data);

    console.log(data[1]);
    
} 




function remove_api(){
    localStorage.removeItem("api_key");
}

function check_api(){
    var api = localStorage.getItem("api_key");
    if(api != null){
        alert(api);
    }else{
        alert("No API key submitted")
    }
    
}

function CheckboxReadOnly() {
    return true;
 }

function open_about(){
    document.location.href = "./about.html";
}

function open_services(){
    document.location.href = "./services.html";
}

function open_contact(){
    document.location.href = "./contact.html"
}

function open_todo(){
    document.location.href = "./todo.html";
}

function open_home(){
    document.location.href = "./index.html";
}
