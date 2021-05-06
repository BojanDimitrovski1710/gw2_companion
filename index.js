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
    });
}

function submit_api(){
    api_key = document.getElementById("api_key_input").value;
    //enter validation here
    if(api_key!="")
        localStorage.setItem("api_key" , api_key)
    document.getElementById("api_key_input").value = "";
 
}

var menu_state = 1;
function collapse_api_menu(){
    if(!menu_state){
        $("#api_key_menu").css("width", "auto");
        $("#api_key_menu").css("border", "2px solid black");
        $(".api_key_menu_item").css("display", "inline-block");
        $("#api_key_menu_btn").html("<")
        menu_state = 1;
    }else{
        $(".api_key_menu_item").css("display", "none");
        alert("im here");
        $("#api_key_menu").css("width", "0%");
        $("#api_key_menu").css("border", "0px solid black");
        
        $("#api_key_menu_btn").html("=")
        menu_state = 0;
    }
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
