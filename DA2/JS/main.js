// phần header
 //phần search  
x = document.querySelector('.header_information-link-search');
x.addEventListener('click',function(){

    // document.querySelector('.header_information-link-search-input').classList.add('header_information-link-search-input-right'); // chỉ mở click

    document.querySelector('.header_information-link-search-input').classList.toggle('header_information-link-search-input-right'); // công tắc ấn một lần thì mở ấn lần hai là tắt
})

// // slide
// var i=0;
// var images=[];
// var time =3000;


// // images list 
// images[0]='https://thaimarket.vn/images/db.svg';
// images[1]='https://thaimarket.vn/images/db.svg';
// images[2]='https://thaimarket.vn/images/db.svg';


// //Change image

// function changeimage(){
//     Document.slide.src=images[i];

//     if(i<images.length -1){
//         i++;

//     }
//     else{
//         setTimeout("changeimage()",time)
//     }

//     window.onload=changeimage;
// }

//slide banner
var i = 1;
    changeImage = function(){
    var imgs =['images/slider1.jpg','images/slider3.jpg','images/slider4.jpg','images/slider1.jpg']
    document.getElementById('slider_img-all').src=imgs[i];
    i++;
    if(i == 4){
        i=1;
    }
}
setInterval(changeImage,5000);// Hàm dùng để để thay đôi theo thời gian;

//slider-address
$('.img-slider-address').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:480,
        settings: {
          slidesToShow: 1,
          arrows:false,
        }
      }
    ]
  });


// dùng để click ra một form đặt hàng 

function clickclose(){
  form_order = document.querySelector('.slider-form-order-top');
  form_order.style.display='none';
}

slider_form_order = document.querySelector('.slider_order');
form_order = document.querySelector('.slider-form-order-top');
slider_form_order.addEventListener('click',function(){
  document.querySelector('.slider-form-order').classList.toggle('slider-form-order-top');
  form_order.style.display='block';
  
})







list_input=document.getElementsByClassName('.slider-form-order-input');
function clickorderbtn(){
  if(list_input.length > 0){
    alert('Đã gửi thành công !')
  }
  else{
    alert('Gửi không thành công!');
  }
}


var food_all=document.querySelector('.list-food-menu-all')
var food_all1=document.querySelector('.list-food-menu-all1')
var food_all2=document.querySelector('.list-food-menu-all2')
var food_all3=document.querySelector('.list-food-menu-all3')
var food_all4=document.querySelector('.list-food-menu-all4')
var food_all5=document.querySelector('.list-food-menu-all5')
var food_all6=document.querySelector('.list-food-menu-all6')
var btn_address1 =document.querySelector('.address-btn1');
var btn_address2 =document.querySelector('.address-btn2');
var btn_address3 =document.querySelector('.address-btn3');
var btn_address4 =document.querySelector('.address-btn4');
var btn_address5 =document.querySelector('.address-btn5');
var btn_address6 =document.querySelector('.address-btn6');
var btn_address7 =document.querySelector('.address-btn7');

function btn1(){
  food_all.style.display="block";
  food_all1.style.display="none";
  food_all2.style.display="none";
  food_all3.style.display="none";
  food_all4.style.display="none";
  food_all5.style.display="none";
  food_all6.style.display="none";
  btn_address1.style.background='#C09440'
  btn_address2.style.background='none'
  btn_address3.style.background='none'
  btn_address4.style.background='none'
  btn_address5.style.background='none'
  btn_address6.style.background='none'
  btn_address7.style.background='none'


}
function btn2(){
  food_all.style.display="none";
  food_all2.style.display="none";
  food_all3.style.display="none";
  food_all4.style.display="none";
  food_all5.style.display="none";
  food_all6.style.display="none";
  food_all1.style.display="block";
  btn_address1.style.background='none'
  btn_address3.style.background='none'
  btn_address4.style.background='none'
  btn_address5.style.background='none'
  btn_address6.style.background='none'
  btn_address7.style.background='none'
  btn_address2.style.background='#C09440'

}
function btn3(){
  food_all.style.display="none";
  food_all1.style.display="none";
  food_all3.style.display="none";
  food_all4.style.display="none";
  food_all5.style.display="none";
  food_all6.style.display="none";
  food_all2.style.display="block";
  btn_address1.style.background='none'
  btn_address4.style.background='none'
  btn_address5.style.background='none'
  btn_address6.style.background='none'
  btn_address7.style.background='none'
  btn_address2.style.background='none'
  btn_address3.style.background='#C09440'
}
function btn4(){
  food_all.style.display="none";
  food_all1.style.display="none";
  food_all2.style.display="none";
  food_all4.style.display="none";
  food_all5.style.display="none";
  food_all6.style.display="none";
  food_all3.style.display="block";
  btn_address1.style.background='none'
  btn_address3.style.background='none'
  btn_address5.style.background='none'
  btn_address6.style.background='none'
  btn_address7.style.background='none'
  btn_address2.style.background='none'
  btn_address4.style.background='#C09440'

}
function btn5(){
  food_all.style.display="none";
  food_all1.style.display="none";
  food_all2.style.display="none";
  food_all3.style.display="none";
  food_all5.style.display="none";
  food_all6.style.display="none";
  food_all4.style.display="block";
  btn_address1.style.background='none'
  btn_address3.style.background='none'
  btn_address4.style.background='none'
  btn_address6.style.background='none'
  btn_address7.style.background='none'
  btn_address2.style.background='none'
  btn_address5.style.background='#C09440'

}
function btn6(){
  food_all.style.display="none";
  food_all1.style.display="none";
  food_all2.style.display="none";
  food_all3.style.display="none";
  food_all4.style.display="none";
  food_all6.style.display="none";
  food_all5.style.display="block";
  btn_address1.style.background='none'
  btn_address3.style.background='none'
  btn_address4.style.background='none'
  btn_address5.style.background='none'
  btn_address7.style.background='none'
  btn_address2.style.background='none'
  btn_address6.style.background='#C09440'

}
function btn7(){
  food_all.style.display="none";
  food_all1.style.display="none";
  food_all2.style.display="none";
  food_all3.style.display="none";
  food_all4.style.display="none";
  food_all5.style.display="none";
  food_all6.style.display="block";
  btn_address1.style.background='none'
  btn_address3.style.background='none'
  btn_address4.style.background='none'
  btn_address5.style.background='none'
  btn_address6.style.background='none'
  btn_address2.style.background='none'
  btn_address7.style.background='#C09440'

}



    