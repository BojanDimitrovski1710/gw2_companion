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

const api_url = 'https://api.guildwars2.com/';

async function check_raids(){
    const raid_url = api_url + 'v2/account/raids?access_token=';
    const raids = await fetch(raid_url + localStorage.getItem("api_key"));

    var data = await raids.json(); 
    
    check_bosses(data);
    
}

function check_bosses(data){
    
    data.forEach(raid_boss => {
        $('#' + raid_boss).css('color', 'lime');
    });
}

function submit_api(){
    api_key = document.getElementById("api_key_input").value;
    localStorage.setItem("api_key" , api_key)
 
}

function check_api(){
    alert(localStorage.getItem("api_key"));
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
