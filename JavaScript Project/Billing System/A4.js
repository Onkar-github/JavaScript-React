
	const bills = [
{"code":"PEP221","prod":"Pepsi","price":12,"instock":"Yes","category":"Beverages"},
{"code":"COK113","prod":"Coca Cola","price":18,"instock":"Yes","category":"Beverages"},
{"code":"MIR646","prod":"Mirinda","price":15,"instock":"No","category":"Beverages"},
{"code":"SLI874","prod":"Slice","price":22,"instock":"Yes","category":"Beverages"},
{"code":"MIN654","prod":"Minute Maid","price":25,"instock":"Yes","category":"Beverages"},
{"code":"APP652","prod":"Appy","price":10,"instock":"No","category":"Beverages"},
{"code":"FRO085","prod":"Frooti","price":30,"instock":"Yes","category":"Beverages"},
{"code":"REA546","prod":"Real","price":24,"instock":"No","category":"Beverages"},
{"code":"DM5461","prod":"Dairy Milk","price":40,"instock":"Yes","category":"Chocolates"},
{"code":"KK6546","prod":"Kitkat","price":15,"instock":"Yes","category":"Chocolates"},
{"code":"PER5436","prod":"Perk","price":8,"instock":"No","category":"Chocolates"},
{"code":"FST241","prod":"5 Star","price":25,"instock":"Yes","category":"Chocolates"},
{"code":"NUT553","prod":"Nutties","price":18,"instock":"Yes","category":"Chocolates"},
{"code":"GEM006","prod":"Gems","price":8,"instock":"No","category":"Chocolates"},
{"code":"GD2991","prod":"Good Day","price":25,"instock":"Yes","category":"Biscuits"},
{"code":"PAG542","prod":"Parle G","price":5,"instock":"Yes","category":"Biscuits"},
{"code":"MON119","prod":"Monaco","price":7,"instock":"No","category":"Biscuits"},
{"code":"BOU291","prod":"Bourbon","price":22,"instock":"Yes","category":"Biscuits"},
{"code":"MAR951","prod":"MarieGold","price":15,"instock":"Yes","category":"Biscuits"},
{"code":"ORE188","prod":"Oreo","price":30,"instock":"No","category":"Biscuits"}
	] ;

const categ =['Beverages','Chocolates','Biscuits'] ;
const stock = ['Yes','No'] ;
const range = ['<10' , '10-20' , '>20'] ;

let billItem =[] ;
let finalArr = bills ;
let indexId = '' ;
let ddVal = {} ; 



function itemIndex(code , arr=billItem){
return arr.findIndex(val => val.code == code) ;
}

function incItem(index , price){
	billItem[index].qty += 1 ;
	billItem[index].value += price ;
}

function addToList(cod){

let index = itemIndex(cod) ;

let billIndex = itemIndex(cod , bills) ;

let {code , prod , price } =  bills[billIndex] ;

let json = {} ;
	
	if(index >= 0){
		incItem(index , price) ;
	}

	else{
 json = {code: code , prod: prod , price: price , qty: 1 , value: price } ;
	billItem.push(json) ;
	}

	showFrame();
}

function sort(index){

	let id = 'id'+index ;
	 	indexId = index ;

	index===0 ? finalArr.sort((val1 , val2) => val1.code.localeCompare(val2.code)) : '' ;
	index===1 ? finalArr.sort((val1 , val2) => val1.prod.localeCompare(val2.prod)) : '' ;
	index===2 ? finalArr.sort((val1 , val2) => val1.category.localeCompare(val2.category)) : '' ;
	index===3 ? finalArr.sort((val1 , val2) => val1.price - val2.price ) : '' ;
	index===4 ? finalArr.sort((val1 , val2) => val1.instock.localeCompare(val2.instock)) : '' ;

	createTable() ;
let str = document.getElementById(id).innerHTML ;
	document.getElementById(id).innerHTML = str+'(X)' ;
}


function checkRange(price , range){

	if(range=='<10' && price<10 )		return true ;

	else if(range=='10-20' && (price>10 && price<20) )   return true  ;

	else if(range=='>20' && price>20 )		return true ;

	else false ;
}

function filtCateg(){
	let categVal = document.getElementById('filter1').value ;
	let stockVal = document.getElementById('filter2').value ;
	let rangeVal = document.getElementById('filter3').value ;
// console.log(ele.value) ;
	console.log(categVal, stockVal , rangeVal)

	if(categVal=='' && stockVal==''  && rangeVal==''){
		finalArr = bills ;
	}
	

	else if(categVal!='' && stockVal==''  && rangeVal==''){
		finalArr = bills.filter( val => val.category == categVal ) ;
	}
	else if(categVal=='' && stockVal!=''  && rangeVal==''){
		finalArr = bills.filter(val => val.instock == stockVal) ;
	}
	else if(categVal=='' && stockVal==''  && rangeVal!=''){
		finalArr = bills.filter( val => checkRange(val.price,rangeVal) ) ;
	}




	else if(categVal=='' && stockVal!=''  && rangeVal!=''){
	finalArr = bills.filter( val=> val.instock==stockVal && checkRange(val.price , rangeVal) ) 
	}

	else if(categVal!='' && stockVal==''  && rangeVal!=''){
	finalArr = bills.filter( val=> val.category == categVal && checkRange(val.price , rangeVal)) 
	}

	else if(categVal!='' && stockVal!=''  && rangeVal==''){
	finalArr = bills.filter( val=> val.category == categVal && val.instock==stockVal) 
	}



	else if(categVal && stockVal  && rangeVal) {
	finalArr = bills.filter( val=> val.category == categVal && val.instock==stockVal && checkRange(val.price , rangeVal)) 
	}

	ddVal ={category: categVal  , stock: stockVal  , range: rangeVal } ;
console.log(ddVal) ;
createTable() ;
	indexId ? sort(indexId) : '' ;
}


function createDD(id , arr , topVal='', selVal='', onchangefn=''){
	let arr1 = arr.map(val => {
		let select = selVal==val ? 'Selected' : '' ;
		return	'<option '+select+'>'+val+'</option>'
	}) ;

	let str = '<div class="form-group">'
str += '<Select id="'+id+'" class="form-control" onchange="'+onchangefn+'()"> '
let header = selVal ? '' : 'Selected' ;
str += '<option value="" '+header+' >'+topVal+'</option>'
str += arr1.join('') ; 
str += '</Select>' ;
str += '</div>' ;
return str  ;
}

function add1(code , price){
	let index = billItem.findIndex(val => val.code == code) ;
	
	incItem(index , price) ;

	showFrame() ;
}
function delete1(code , price){
	let index = billItem.findIndex(val => val.code == code) ;

	billItem[index].qty -=1 ;
	billItem[index].value -= price ;
	billItem[index].qty==0 ? billItem.splice(index ,1) : '' ;
	showFrame() ;
}
function cancal(code){
	let index = billItem.findIndex(val => val.code == code) ;
	billItem.splice(index ,1)  ;
	showFrame() ;
}


function emptyCart(){
	billItem = [] ;
	alert('Closing the Current bill') ;
	showFrame() ;
}

function billData() {
	if(billItem.length > 0 ){
	console.log("bill")
	let arr = billItem.map(val => {
		let str = '<div class="row border">'
	str += '<div class="col-6">'
	str += val.code +' '+val.prod+' Price: '+val.price+' Quantity: '+val.qty+' value: '+val.value ;
	str += '</div>'
	str += '<div class="col-6">'
	str += '<button class="btn btn-success btn-sm"onclick="add1(\''+val.code+'\' , '+val.price+')"> + </button>'
	str += '<button class="btn btn-warning btn-sm"onclick="delete1(\''+val.code+'\', '+val.price+')"> - </button>'
	str += '<button class="btn btn-danger btn-sm" onclick="cancal(\''+val.code+'\')"> x </button>'
	str += '</div>'
	str += '</div>'
	console.log(str) ;
	return str 
	}) ;
	let s1 = arr.join('') ;
	s1 += '<button class="btn btn-primary" onclick="emptyCart()">Close Bill</button>'

	return s1 ;
	}
	else return '' ;
}

function totalItem(){
	let str = 'Item : '+ billItem.length 
	str += ', Quantity : '+ billItem.reduce((acc, curr)=> acc+curr.qty , 0 );
	str += ', Amount : ' +  billItem.reduce((acc, curr)=> acc+curr.value , 0 );
	return str ;
}


function billDetail(){
	let str = '<h4 class="mt-4"> Details Of Current Bill </h4>'
	str += totalItem() ;
	str += billData() ;
	return str ; 
}

function filterBlock(){
		let str ='<div class="row">'
	str += '<div class="col-3"><span class="col-3 font-weight-bold">Filter Products by : </span></div>'
	str += '<div class="col-9 ">'
	str += '<div class="row justify-content-between">'
	str += createDD('filter1' , categ , 'Select Category' , ddVal.category ,'filtCateg' ) ;
	str += createDD('filter2' , stock , 'Select in Stock' ,   ddVal.stock ,'filtCateg' ) ;
	str += createDD('filter3' , range , 'Select Price Range', ddVal.range ,'filtCateg' ) ;
	str += '</div>'
	str += '</div>'
	str += '</div>'
	return str ;
}


function createTable(){
	
const arr =	finalArr.map( (val , index) => {
	let {code , prod , price , category , instock} = val ;

let str ='<div class="row border">' 
str += '<div class="col-2">'+code+'</div>' ;
str += '<div class="col-2">'+prod+'</div>' ;
str += '<div class="col-2">'+category+'</div>' ;
str += '<div class="col-2">'+price+'</div>' ;
str += '<div class="col-2">'+instock+'</div>' ;
str += '<div class="col-2">' ;
str += '<button class="btn btn-secondary" onclick="addToList(\''+code+'\')"> Add To Bill </button>' ;
str +='</div>'
str +='</div>'
return str ;
}) ;

let table ='<div class="row border bg-dark text-white">' 
table += '<div id="id0" class="col-2" onclick="sort(0)">Code </div>' ;
table += '<div id="id1" class="col-2" onclick="sort(1)">Product </div>' ;
table += '<div id="id2" class="col-2" onclick="sort(2)">Category </div>' ;
table += '<div id="id3" class="col-2" onclick="sort(3)">Price </div>' ;
table += '<div id="id4" class="col-2" onclick="sort(4)">In Stock</div>' ;
table += '<div class="col-2" ></div>' ;
table +='</div>'
table += arr.join('') ;
document.getElementById('table').innerHTML = table;
}







function showBill(){
	let str = billDetail() ;
	str += '<h4 class="text-center"> Product List </h4>' ;
	str += filterBlock() ;
	 createTable() ;
	return str ;
}

show() 
 	function show(active){
 		let str = createNavbar() ;
 	active===1 ? str += showBill() : str +='' ;
 	document.getElementById('show').innerHTML = str  ;
 	}

function showFrame(){

	show(1) ;
}


function createNavbar(active){

	let str ='<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">'
str += '<a class="navbar-brand" href="#"> BillingSystem </a>' 
str += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navItem"> ' 
str += '<span class="navbar-toggler-icon"></span>'
str += '</button>' 
str += '<div class="collapse navbar-collapse" id="navItem">'
str += '<ul class="navbar-nav"> '
let active1 = active===1 ? 'active' : '' ;
str += '<li class="nav-item '+active1+' " >'
str += '<a class="nav-link" onclick="showFrame()">New Bill</a>'
str += '</li>'
str += '</ul>' 
str += '</div>' 
str += '</nav>' 
return str ;
}















