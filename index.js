var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn")
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}


if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}


//notification popup
var settingsmenuu = document.querySelector(".settings-menuu");

function settingsMenuuToggle(){
    settingsmenuu.classList.toggle("settings-menuu-height")
}


//messages popup
var settingsmenuue = document.querySelector(".settings-menuue");

function settingsMenuueToggle(){
    settingsmenuue.classList.toggle("settings-menuue-height")
}


// //sharing popup
// var settingssmenuue = document.querySelector(".settingss-menuue");

// function settingssMenuueToggle(){
//     settingssmenuue.classList.toggle(".settingss-menuue-height")
// }



//upload wala poppu
var settingsmeenuue = document.querySelector(".containerr");

function settingsMeenuueToggle(){
    settingsmeenuue.classList.toggle("containerr-height")
}






//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');




//theme/display customisation

//open model
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//closes modal
const closeThemeModel = (e) => {
   if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none';
   }
}

//close model
themeModal.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModal);




// --------------------------------fonts-------------------------------

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
 

   
size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    } else if(size.classList.contains('font-size-2')){
        fontSize = '15px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    }  else if(size.classList.contains('font-size-3')){
        fontSize = '17px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }  else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    }  else if(size.classList.contains('font-size-5')){
        fontSize = '21px';
        root.style.setProperty('----sticky-top-left', '-12rem');
        root.style.setProperty('----sticky-top-right', '-33rem');
    }

     //change font size of the root html element
     document.querySelector('html').style.fontSize = fontSize;

})

})
//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}




//change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        let primary;
        changeActiveColorClass();
        //remove active class from colors

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})





// ---------------------share wala kaam---------------------------------------------
// let shareBtn = document.querySelector('.send-btn');
// let shareWindow = document.querySelector('.share-window');

// shareBtn.addEventListener('click', () => {
//     shareWindow.classList.toggle('active');
// });






firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("indexx.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})




function logout(){
    firebase.auth().signOut()
}











// const shareBtn = document.querySelector('.share-btn');
// const shareOptions = document.querySelector('.share-options');

// shareBtn.addEventListener('click', () => {
//     shareOptions.classList.toggle('active');
// })