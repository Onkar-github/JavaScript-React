const product = [
	{"prodcode":"PEP122","prodname":"Pepsi","price":12,"category":"Food","offer":"10%"},
	{"prodcode":"COK238","prodname":"Coke","price":15,"category":"Food","offer":"15%"},
	{"prodcode":"MIR411","prodname":"Mirinda","price":30,"category":"Food","offer":"20%"},
	{"prodcode":"RB0277","prodname":"Red Bull","price":80,"category":"Food","offer":"None"},
	{"prodcode":"LUX831","prodname":"Lux","price":10,"category":"Soap","offer":"15%"},
	{"prodcode":"DOV672","prodname":"Dove","price":25,"category":"Soap","offer":"20%"},
	{"prodcode":"DET810","prodname":"Dettol","price":15,"category":"Soap","offer":"None"},
	{"prodcode":"PAN590","prodname":"Pantene","price":60,"category":"Shampoo","offer":"None"},
	{"prodcode":"SUN677","prodname":"Sunsilk","price":48,"category":"Shampoo","offer":"15%"},
	{"prodcode":"GAR004","prodname":"Garnier","price":75,"category":"Shampoo","offer":"10%"}
		];	
const orders = [
{"custname":"Jack Smith","mobile":"425361434","location":"Sector 14","slot":"12PM2PM","value":72.6,"items":[{"prodcode":"PEP122","quantity":2},{"prodcode":"COK238","quantity":4}]},

{"custname":"Mary Gomes","mobile":"723476123","location":"Sector 22","slot":"4PM6PM","value":130.60,"items":[{"prodcode":"SUN677","quantity":2},{"prodcode":"LUX831","quantity":4},
{"prodcode":"DET810","quantity":1}]},

{"custname":"Tim May","mobile":"835099614","location":"Pioneer Chowk","slot":"Before10AM","value":705,"items":[{"prodcode":"GAR004","quantity":6},{"prodcode":"RB0277","quantity":3},
{"prodcode":"MIR411","quantity":2}]}
		] ;

let locations = ['Sector	14A', 'Sector	15B','Sector	22', 'Pioneer	Chowk'] ;

let DeliverySlot =['Before	10AM','10AM-12PM','12PM-2PM','2PM-4PM','4PM-6PM','After	6PM'] ;

const pCode = product.map(val => val.prodcode) ;

	function showOrder() {
	let arr = orders.map(val => {
	let str = 'Customer Name : '+val.custname+' ,Moblie : '+val.mobile+' ,Location : '+val.location+' ,Delivery Slot : '+val.slot+'<br>'
	str += ' Order value : '+val.value+' ,Number of items: ' + findQuantity(val.items)   ;
	str += showItem(val.items)
	console.log(str) ;
	return str ; 
	}) ;
	let html = arr.join('') ;
	// console.log(arr.join(''));
	document.getElementById('table').innerHTML = html ;
	}

	function findQuantity(item){
		console.log(item) ;
	let quant = item.reduce( (acc, curr) => acc + curr.quantity , 0 ) ;
	return quant ;
	}

	function showItem(arr){
	let arr1 = arr.map(val => {
	let data = {} ;
	let findArr = product.find(val1=>  {		
	if(val1.prodcode == val.prodcode){
	data = {prodcode : val1.prodcode , prodname: val1.prodname ,price : val1.price , quantity: val.quantity , offer:val1.offer , newAmount: netAmount(val1.price,val.quantity , val1.offer) }
	}	})	;
	return data ;	
	}) ;

	let arr1map = arr1.map(val => {
		let str = '<tr>'
		str += '<td class="td1">'+val.prodcode+'</td>' 
		str += '<td class="td1">'+val.prodname+'</td>' 
		str += '<td class="td1">'+val.price+'</td>' 
		str += '<td class="td1">'+val.quantity+'</td>' 
		str += '<td class="td1">'+val.offer+'</td>' 
		str += '<td class="td1">'+val.newAmount+'</td>' 
		str += '</tr>'
		return str ;
		})	

		let header = '<tr>'
	header += '<th class="th1">Code</th>'
	header += '<th class="th1">Name</th>'
	header += '<th class="th1">Price</th>'
	header += '<th class="th1">Quantity</th>'
	header += '<th class="th1">Discount</th>'
	header += '<th class="th1">Net Amount</th>'
	header += '</tr>' ;
	let html = '<table class="table1">'+header+arr1map+'</table>' ;
	console.log(html) ;
	// document.getElementById('table').innerHTML = html ;
	return html;
	}

	function netAmount(price, quantity , offer){
		let index = offer.indexOf('%')
		dist = 0.01 *  offer.substring(0 ,index) ;
		let distAmount = price*quantity*dist ;
		let amount = price*quantity - distAmount ;
		return amount
	}
 
	function showProduct(arr){
	let arr1 = arr.map( (val, index)=> {
	let str = '<tr class="">'	;
	str += '<td class="'+getClass(index)+'">'+val.prodcode+'</td>' ;
	str += '<td class="'+getClass(index)+'">'+val.prodname+'</td>'
	str += '<td class="'+getClass(index)+'">'+val.price+'</td>'
	str += '<td class="'+getClass(index)+'">'+val.category+'</td>'
	str += '<td class="'+getClass(index)+'">'+val.offer+'</td>'
	str += '</tr>' ;
	return str ;
	})	;
	let header = '<tr>'
	header += '<th class="th1">Code</th>'
	header += '<th class="th1">Name</th>'
	header += '<th class="th1">Price</th>'
	header += '<th class="th1">Category</th>'
	header += '<th class="th1">Discount</th>'
	header += '</tr>' ;
	let html = '<table class="table1">'+header+arr1.join('')+'</table>' ;
	// return html ;
	document.getElementById('table').innerHTML = html ;
	}

	function getClass(num){
		// console.log(num) ;
	if(num%2==0) return 'td1' ;
	else return 'td2' ;
	}

	function createform(){
	let str = '<p class="p1">Customer Name</p> <input type="text" id="name" > <br>' 
	str += '<p class="p1">mobile Number</p> <input type="text" id="number"  > <br>' 
	str += '<p class="p1">Location</p>'+ CreateDD( 'id1' , locations , 'Choose Location')+ '<br> '
	str += '<p class="p1">Delivery Slot</p>' + CreateDD( 'id2' , DeliverySlot , 'Choose Delivery Slot') +' <br>' 
	str += '<p class="p1">Add to order</p>'+CreateDD('id3' , pCode , 'select Product' ) ;
	str +=  createCount('id4') ;
	str += '<button class="mainBtn" onclick="addOrder()">Add to Order</button> <br>'
	str += '<button class="editBtn" onclick="orderComplete()" >Order Complete</button> '
	str += '<button class="mainBtn" onclick="cancelOrder()" >Cancel Order </button> '
	// console.log(str) ;
	// document.getElementById('filter').innerHTML = '' ;
	document.getElementById('table').innerHTML = str ;
	}

	function createCount(id) {
		let opt ;
	let str = '<Select id=\''+id+'\'>'
		for(let i=1 ; i<=6 ; i++)
		 opt += '<option>'+i+'</option>'

	str +='<option>Selecet quantity </option>'
	str += opt + '</select>'	
	return str ; 
	}
	
	function CreateDD( id , arr , valOnTop , selectVal) {
	let arr1 = arr.map(val => {
		if(val == selectVal){
			console.log(val , selectVal) ;
		return '<option value=\''+val+'\' selected>'+val+'</option>' ;
	}
		else
		return '<option value=\''+val+'\'>'+val+'</option>'  ;
	}) ;
	let topVal = '<option value="">'+valOnTop+'</option> <br>';

	if(selectVal == '')
	 topVal = '<option selected value="">'+valOnTop+'</option> <br>';
	
	let html = '<select id="'+id+'" class=opt>'+topVal+arr1.join('')+'</select>' ;
	return html ;
	}

		let arr = [] ;
	function addOrder(){
	let code =document.getElementById('id3').value ;
	let qnty =document.getElementById('id4').value ;
	let data ={prodcode:code , quantity: +qnty } ;
	console.log(qnty) ;
	let index = arr.findIndex(val => val.prodcode == code) ;

	index>=0 ? arr[index].quantity += +qnty : arr.push(data) ;
	
	let str = addItem(arr) ;
	document.getElementById('temp').innerHTML = str ;
	}

	function addItem(){
		let arr1 = arr.map(val => {
	let data = {} ;
	let findArr = product.find(val1=>  {		
	if(val1.prodcode == val.prodcode){
	data = {prodcode : val1.prodcode , prodname: val1.prodname ,price : val1.price , quantity: val.quantity , offer:val1.offer , newAmount: netAmount(val1.price,val.quantity , val1.offer) }
	}	})	;
	return data ;	
	}) ;

	let arr1map = arr1.map(val => {
		let str = '<tr>'
		str += '<td class="td1">'+val.prodcode+'</td>' 
		str += '<td class="td1">'+val.prodname+'</td>' 
		str += '<td class="td1">'+val.price+'</td>' 
		str += '<td class="td1">'+val.quantity+'</td>' 
		str += '<td class="td1">'+val.offer+'</td>' 
		str += '<td class="td1">'+val.newAmount+'</td>' 
		str += '<td class="td1"><button class="removeBtn" onclick="remove(\''+val.prodcode+'\')">Remove</button></td>' 
		str += '</tr>'
		return str ;
		})	

		let header = '<tr>'
	header += '<th class="th1">Code</th>'
	header += '<th class="th1">Name</th>'
	header += '<th class="th1">Price</th>'
	header += '<th class="th1">Quantity</th>'
	header += '<th class="th1">Discount</th>'
	header += '<th class="th1">Net Amount</th>'
	header += '<th class="th1"></th>'
	header += '</tr>' ;
	let html = '<table class="table1">'+header+arr1map+'</table>' ;
	console.log(html) ;
	return html;
	}
	function remove(code){
		console.log(code)
		console.log(arr)
		let index = arr.findIndex(val => val.prodcode == code)  ;
		arr.splice(index ,1) ;
		let str = addItem(arr) ;
	document.getElementById('temp').innerHTML = str ;
	}


	function cancelOrder(){
		createform() ;
		arr = [] ;
	document.getElementById('temp').innerHTML = '' ;
	}

	function orderComplete(){
				const emptyArr=[] ;
		let data = {} ;
	let name = document.getElementById('name').value ;
	let number =  document.getElementById('number').value ;
	let location = document.getElementById('id1').value ;
	let slot = document.getElementById('id2').value ;

	if(name.length>=5){
	 data.custname = name ;
	 emptyArr[0]= true ;
	  	if(number.length==10 && !isNaN(number)){
	  	data.mobile = number	 ;
	    emptyArr[1]= true ;
	  		if(location){
	    	 data.location = location
	 		emptyArr[2]= true ;
	   	    	if(slot){
		    	data.slot = slot ; 
	 			emptyArr[3]= true ;
				}
				else alert('Select the Slot') ;
		    }
			else alert('Select the location') ;
		}
	   else alert('Mobile number should have 10 chars') ;
	 }
	 else  alert('Name should be minimum 5 chars');
	


	if(emptyArr.length == 4){		

	data.value = totalAmount() ;
	data.items =  arr ;
	arr = [] ;
	document.getElementById('temp').innerHTML = '' ;
	console.log(data) ;
	orders.unshift(data) ;
	showOrder() ;
	}
   }

   function totalAmount(){
   	let finalAmount = arr.reduce( (acc , curr) => {
   	let {prodcode , quantity} = curr ;
   		let index = product.findIndex(item => item.prodcode == curr.prodcode) ;
   	let price = product[index].price ;
   	let offer = product[index].offer ;
   	acc += netAmount(price , quantity , offer ) ;
   	return acc ;
   	// return  acc + product[index].price*quantity  ;
   	} , 0)
   	return finalAmount ;
   }

