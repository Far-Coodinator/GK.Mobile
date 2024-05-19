

// navigation bar functions gose here...
function openNav() {
  document.getElementById("nav-1").style.width = "250px";
}

function closeNav() {
  document.getElementById("nav-1").style.width = "0";
}

// slide showing content gose here....
let s_index = 0;
s_Slides();

function s_Slides() {
let i;
let slider = document.getElementsByClassName("sliding-pic");
let doted_dots = document.getElementsByClassName("doted-doted");
for (i = 0; i < slider.length; i++) {
  slider[i].style.display = "none";  
}
s_index++;
if (s_index > slider.length) {s_index = 1}    
for (i = 0; i < doted_dots.length; i++) {
  doted_dots[i].className = doted_dots[i].className.replace(" active", "");
}
slider[s_index-1].style.display = "block";  
doted_dots[s_index-1].className += " active";
setTimeout(s_Slides, 2000); // Change image every 2 seconds
}

// this function for when the user click the category button 
// then all of the category which category the user clicked will show first 
function filter(category) {
let items = document.querySelectorAll('.item');
let container = document.querySelector('.items_grid');

items.forEach(function(item) {
  if (item.getAttribute('data-category') === category) {
    container.prepend(item);
  }
});
}


// this for onclick the (de) div will open and close and 
// again it will be return to the clicked area


var scrollPos = 0; // Variable to store scroll position

function show_hidden_div(divId) {
  // Store current scroll position
  scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.top = `-${scrollPos}px`; // Adjust body position to maintain scroll position
  
  let divToshow = document.getElementById(divId);

  // Hide all other hidden divs
  let hideall_divs = document.querySelectorAll('.hiddenDiv');
  hideall_divs.forEach(function(div) {
      div.style.display = 'none';
  });
  
  // divToshow the visibility of the selected hidden div
  if (divToshow.style.display === 'block') {
      divToshow.style.display = 'none';
      document.body.style.overflow = 'auto';
  } else {
      divToshow.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }
}

function hide_show_content(divId) {
  let div = document.getElementById(divId);
  div.style.display = "none";

  // Restore scroll position
  document.body.style.top = '';
  window.scrollTo(0, scrollPos);
  document.body.style.overflow = 'auto';
}


// buy function gose here........
let number = "+97474020623"
let content = `Can i make purchase this?
               or Can you provide any more detile about this product?`
let whatsapp = "https://wa.me/"

  function buy_ch_001_01(){
    let product = "https://far-coodinator.github.io/GKMobile.com/#ma-ch-001-01";
    let imageUrl = "https://m.media-amazon.com/images/I/513Dr1J4IdL._AC_UF1000,1000_QL80_.jpg";

    window.open(whatsapp + number + "?text=" + encodeURIComponent(product + content + "\n" + imageUrl))
  }




// document.getElementById("whatsapp-link").addEventListener("click", function(event) {
//   event.preventDefault();
  
//   // Image URL
//   var imageUrl = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww";
  
//   // Content
//   var content = "Can I make a purchase?";
  
//   // WhatsApp number
//   var phoneNumber = "74020643";
  
//   // Construct WhatsApp message URL
//   var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(content + "\n" + imageUrl);
  
//   // Open WhatsApp with the message
//   window.open(whatsappUrl, "_blank");
// });









