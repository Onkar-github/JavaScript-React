const sizes = ["Regular","Medium","Large"];
const crusts = ["New Hand Tossed","Wheat Thin Crust","Cheese Burst","Fresh Pan Pizza","Classic Hand Tossed"];
const itemsData =[
{"id":"MIR101", "image":"https://i.ibb.co/SR1Jzpv/mirinda.png","type":"Beverage","name":"Mirinda","desc":"Mirinda","veg":"Yes"},
{"id":"PEP001", "image":"https://i.ibb.co/3vkKqsF/pepsiblack.png","type":"Beverage","name":"Pepsi Black Can","desc":"Pepsi Black Can","veg":"Yes"},
{"id":"LIT281", "image":"https://i.ibb.co/27PvTng/lit.png","type":"Beverage","name":"Lipton Iced Tea","desc":"Lipton Iced Tea","veg":"Yes"},
{"id":"PEP022", "image":"https://i.ibb.co/1M9xDZB/pepsi-new20190312.png","type":"Beverage","name":"Pepsi New","desc":"Pepsi New","veg":"Yes"},
{"id":"BPCNV1", "image":"https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png","type":"Burger Pizza","name":"Classic Non Veg","desc":"Oven-baked buns with cheese, peri-peri chicken, tomato & capsicum in creamy mayo","veg":"No"},
{"id":"BPCV03", "image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Classic Veg","desc":"Oven-baked buns with cheese, tomato & capsicum in creamy mayo","veg":"Yes"},
{"id":"BPPV04", "image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Premium Veg","desc":"Oven-baked buns with cheese, paneer, tomato, capsicum & red paprika in creamy mayo","veg":"Yes"},
{"id":"DIP033", "image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"Side Dish","name":"Cheesy Dip","desc":"An all-time favorite with your Garlic Breadsticks & Stuffed Garlic Bread for a Cheesy indulgence","veg":"Yes"},
{"id":"DIP072", "image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"Side Dish","name":"Cheesy Jalapeno Dip","desc":"A spicy, tangy flavored cheese dip is a an absolute delight with your favourite Garlic Breadsticks","veg":"Yes"},
{"id":"GAR952", "image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"Side Dish","name":"Garlic Breadsticks","desc":"Baked to perfection. Your perfect pizza partner! Tastes best with dip","veg":"Yes"},
{"id":"PARCH1", "image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"Side Dish","name":"Chicken Parcel","desc":"Snacky bites! Pizza rolls with chicken sausage & creamy harissa sauce","veg":"No"},
{"id":"PARVG7", "image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"Side Dish","name":"Veg Parcel","desc":"Snacky bites! Pizza rolls with paneer & creamy harissa sauce","veg":"Yes"},
{"id":"PATNV7", "image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"Side Dish","name":"White Pasta Italiano Non-Veg","desc":"Creamy white pasta with pepper barbecue chicken","veg":"No"},
{"id":"PATVG4", "image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"Side Dish","name":"White Pasta Italiano Veg","desc":"Creamy white pasta with herb grilled mushrooms","veg":"Yes"},
{"id":"DES044", "image":"https://i.ibb.co/gvpDKPv/Butterscotch.png","type":"Dessert","name":"Butterscotch Mousse Cake","desc":"Sweet temptation! Butterscotch flavored mousse","veg":"Yes"},
{"id":"DES028", "image":"https://i.ibb.co/nm96NZW/ChocoLava.png","type":"Dessert","name":"Choco Lava Cake","desc":"Chocolate lovers delight! Indulgent,gooey molten lava inside chocolate cake","veg":"Yes"},
{"id":"PIZVDV", "image":"https://i.ibb.co/F0H0SWG/deluxeveg.png","type":"Pizza","name":"Deluxe Veggie","desc":"Veg delight - onion, capsicum, grilled mushroom, corn & paneer","veg":"Yes"},
{"id":"PIZVFH", "image":"https://i.ibb.co/4mHxB5x/farmhouse.png","type":"Pizza","name":"Farmhouse","desc":"Delightful combination of onion, capsicum, tomato & grilled mushroom","veg":"Yes"},
{"id":"PIZVIT", "image":"https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png","type":"Pizza","name":"Indi Tandoori Paneer","desc":"It is hot. It is spicy. It is oh-soIndian. Tandoori paneer with capsicum, red paprika & mint mayo","veg":"Yes"},
{"id":"PIZVMG", "image":"https://i.ibb.co/MGcHnDZ/mexgreen.png","type":"Pizza","name":"Mexican Green Wave","desc":"Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno","veg":"Yes"},
{"id":"PIZVPP", "image":"https://i.ibb.co/cb5vLX9/peppypaneer.png","type":"Pizza","name":"PeppyPaneer","desc":"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika","veg":"Yes"},
{"id":"PIZVVE", "image":"https://i.ibb.co/gTy5DTK/vegextra.png","type":"Pizza","name":"VegExtravaganza","desc":"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese","veg":"Yes"},
{"id":"PIZNCP", "image":"https://i.ibb.co/b5qBJ9d/cheesepepperoni.png","type":"Pizza","name":"Chicken Pepperoni","desc":"A classic American taste! Relish the delectable flavor of Chicken Pepperoni,topped with extra cheese","veg":"No"},
{"id":"PIZNCD", "image":"https://i.ibb.co/GFtkbB1/ChickenDominator10.png","type":"Pizza","name":"Chicken Dominator","desc":"Loaded with double pepperbarbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers","veg":"No"},
{"id":"PIZNPB", "image":"https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png","type":"Pizza","name":"Pepper Barbecue & Onion","desc":"A classic favourite with pepperbarbeque chicken & onion","veg":"No"},
{"id":"PIZNIC", "image":"https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png","type":"Pizza","name":"Indi Chicken Tikka","desc":"The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo","veg":"No"}
] ;

itemsData.map(val => val.item=1 ) ;

let itemsArr= [] ;
let num = '' ; 

function createDD(id , arr , topVal='' , selVal='' , dis='' ){
let arr1 = arr.map(val => {
	let Select = selVal==val ? 'Selected' : ''  ;
	return '<option '+Select+'>'+val+'</option>' }) ;
let str = '<div class="form-group">'	            
str += '<Select id="'+id+'" class="form-control" '+dis+' > '
let header = selVal ? '' : 'Selected' ;
str += '<option value="" disabled '+header+'>'+topVal+'</option>'
str += arr1.join('') ; 
str += '</Select>' ;
str += '</div>' ;
return str  ;
}



function add1(id ){
let i = itemsArr.findIndex(val => val.id==id )
itemsArr[i].item += 1 ;
document.getElementById(id+'count2').innerHTML =itemsArr[i].item ;
document.getElementById(id+'count').innerHTML = itemsArr[i].item;
}

function activeBtn(id){
	console.log("sssssss")
		let i = itemsArr.findIndex(val => val.id == id )
		itemsArr.splice(i , 1 ) ;
showCart();

	if(!num){
	document.getElementById(id+'1').disabled= false ;
	document.getElementById(id+'2').disabled= false ;
	
	document.getElementById(id+'1').value = '' ;
	document.getElementById(id+'2').value = '' ;
	} 

let str = '<button class="btn btn-primary" onclick="addToCart(\''+id+'\')"> Add To Cart </button>'
document.getElementById(id+'btn').innerHTML = str ; 

}

function sub1(id ){
let i = itemsArr.findIndex(val => val.id==id )
itemsArr[i].item -= 1 ;
let number =itemsArr[i].item ;
console.log(number) ;
	if(number>0){
document.getElementById(id+'count2').innerHTML =number ;
document.getElementById(id+'count').innerHTML = number;
	}
	else activeBtn(id) ;
}

function createBtn(id , index=-1){
	console.log('weeweeeweeewew	')
	let str = '<div class="row text-center">' ;
str += '<button class="btn btn-success" onclick="sub1(\''+id+'\')"> - </button>'
str += '<button class="btn btn-secondary" id="'+id+'count"> 1 </button>'
str += '<button class="btn btn-danger"  onclick="add1(\''+id+'\')"> + </button>'
str += '</div>'
// console.log(str);

	  document.getElementById(id+'btn').innerHTML = str 
}

function disableBtn(id){
	document.getElementById(id+'1').disabled= true ;
	document.getElementById(id+'2').disabled= true ;
}





function addToCart(id , index){

let val = itemsData.find( val => val.id == id ) ;

	let data ={} ;   	let restoreData ={} ;

	if(num){
	data ={id: val.id , image: val.image , name:val.name , desc:val.desc , item: val.item} ;
	itemsArr.push(data) ;

	createBtn(id);
	}

	else{
	let dd1= document.getElementById(id+'1').value ;
	let dd2= document.getElementById(id+'2').value ;

		if(!dd1)  alert('Choose the Size before adding to cart') ;
		else if(!dd2)  alert('Choose the Crust before adding to cart') ;
		else '' ;

	if( dd1 && dd2){
		data ={id: val.id , image: val.image , name:val.name , desc:val.desc , dd1: dd1 , dd2: dd2 , item: val.item} ;
		itemsArr.push(data) ;
	createBtn(id);
	disableBtn(id) ;
		}
// console.log(itemsArr) ;
}
showCart() ;
}





function showCart(){
	let html = '' ;
	if( itemsArr.length==0 ){
html += '<h3 class="font-weight-bold text-center">Cart is empty</h3>' ;
	}
	else{
let arr = itemsArr.map( val => {
	let {image , name , desc , dd1 , dd2 , id , item} = val ;

	let str = '<div class="row border ">'
str += '<div class="col-4 ">';
str += '<img class="img-fluid d-block mx-auto my-4"  src="'+image+'" >'
str += '</div> ' ;
str += '<div class="col-8">'
str += '<h5 class="font-weight-bold ">'+name+'</h5>' ;
str += '<span><small>'+desc+'</small></span><br>' ;
		if(!num){
str += '<span>'+dd1+'</span>|' ;
str += '<span>'+dd2+'</span><br>' ;
		}
str += '<button class="btn btn-success" onclick="sub1(\''+id+'\')"> - </button>'
str += '<button class="btn btn-secondary" id="'+id+'count2">'+item+'</button>'
str += '<button class="btn btn-danger"  onclick="add1(\''+id+'\')"> + </button>'
str += '</div>' ;
str += '</div>' ;
	return str ; 
})
	html += '<h3 class="font-weight-bold text-center">Cart</h3>'
	html +=arr.join('') ;
}

document.getElementById('detail').innerHTML = html ;
}








function makeDD(index, id ){
let str ='' ;
		if(!num){
str += createDD(id+'1' , sizes , 'Select Size' , itemsArr[index].dd1 , 'disabled' ) ;
str += createDD(id+'2' , crusts , 'Select Crust' ,  itemsArr[index].dd2 , 'disabled' ) ;
}
else '' ;

return str ;
}

function showVeg( arr = itemsData){

	let arr1 = arr.map( val  => {

let {image='' ,name='' ,desc='' , id=''} = val ;
let index = itemsArr.findIndex(item => item.id == id ) ;

let str = '<div class="col-6 text-center border">'
str += '<img class="img-fluid pt-2" src="'+image+'">'
str += '<h4 class="font-weight-bold">'+name+'</h4>' ;
str += '<span><small>'+desc+'</small></span>' ;
str += '<div class="row justify-content-around ">'
  		
  if( index != -1 ) {
  	console.log(id )
str += '</div>' ;
str += '<div class="row justify-content-center" id=\''+id+'btn\'>'

str += '<button class="btn btn-success" onclick="sub1(\''+id+'\')"> - </button>'
str += '<button class="btn btn-secondary" id="'+id+'count">'+itemsArr[index].item+'</button>'
str += '<button class="btn btn-danger"  onclick="add1(\''+id+'\')"> + </button>'

str += '</div>' ;
str += '</div>' ;
  	  }
else {

	if(!num){
str += createDD(id+'1' , sizes , 'Select Size'  ) ;
str += createDD(id+'2' , crusts , 'Select Crust') ;
}
str += '</div>' ;
str += '<div class="row justify-content-center" id=\''+id+'btn\'>'
str += '<button class="btn btn-primary" onclick="addToCart(\''+id+'\','+index+' )"> Add To Cart </button>'
str += '</div>' ;
str += '</div>' ;
}
	return str ; 
}) ;

let s1 = '<div class="row my-4 border ">' ;
s1 += '<div class="col-8"><div class="row">'+arr1.join('')+'</div></div>' ;
s1 += '<div class="col-4" id="detail"><h3 class="font-weight-bold text-center">Cart is empty</h3></div>' ;
s1 += '</div>' ;
return s1 ;

}











show() ;

	function show(active , arr ){
	let str = createNavbar(active) ;
	active ? str +=showVeg(arr) :'' ;
document.getElementById('show').innerHTML = str ;
	showCart();
}

function showFrame1(){
	num ='' ;
 let arr = itemsData.filter( val => val.type=='Pizza' && val.veg == 'Yes')
	show(1 ,arr) ;
}
function showFrame2(){
	num ='' ;

 let arr = itemsData.filter( val => val.type=='Pizza' && val.veg == 'No')
	show(2 ,arr) ;
}
function showFrame3(){
	num=2 ;
 let arr = itemsData.filter( val => val.type=='Side Dish' )
	show(3 , arr) ;
}
function showFrame4(){
	num=2 ;
 let arr = itemsData.filter( val => val.type !='Pizza' && val.type != 'Side Dish')
	show(4 , arr) ;
}

	function createNavbar(active){
	let str = '<nav class=" navbar navbar-expand-lg navbar-light bg-light my-4">'
	str += '<a class="navbar-brand font-weight-bold">MyFavPizza</a> ' ;
	str += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navItem"> ' ;
	str += '<span class="navbar-toggler-icon"></span>'
	str += '</button>' ;
	str += '<div class="collapse navbar-collapse" id="navItem">'
	str += '<ul class="navbar-nav">'
	let active1 = active===1? 'active' : '' ;
	let active2 = active===2? 'active' : '' ;
	let active3 = active===3? 'active' : '' ;
	let active4 = active===4? 'active' : '' ;
	str += '<li class="nav-item '+active1+' " >'
	str += '<a class="nav-link" onclick="showFrame1()">Veg Pizza</a>'
	str +='</li>'
	str += '<li class="nav-item '+active2+' " >'
	str += '<a class="nav-link" onclick="showFrame2()">Non-Veg Pizza</a>'
	str +='</li>'
	str += '<li class="nav-item '+active3+' " >'
	str += '<a class="nav-link" onclick="showFrame3()">Side Dishes</a>'
	str +='</li>'
	str += '<li class="nav-item '+active4+' " >'
	str += '<a class="nav-link" onclick="showFrame4()">Other Items</a>'
	str +='</li>'
	str += '</ul>'
	str += '</div>' 
	str += '</nav>'
	return str ;
	}

