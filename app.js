//------------------Global Function----------------
// all Plus(+) and minus(-) icon value increase or decrease  ----
    const increase_plus_btn = (id) => {document.getElementById(id).value++;};

    const decrease_minus_btn = (id) => {
        if(document.getElementById(id).value > 0){
             document.getElementById(id).value--;
            }};
//to removed or show a section
const removed_or_show = (block_item, none_item) => { 
    block_item.style.display = 'none'; 
    none_item.style.display = 'block';
};

//parse float phone and case default Price
const parse_Int_default_price = id => {return parseInt(document.getElementById(id).innerHTML);};

//---------------local Function--------------
// increase or decrease phone price with click plus or minus btn  ----
let phone_minus_btn = document.getElementById('phone_minus_btn');
let phone_plus_btn = document.getElementById('phone_plus_btn');

    phone_plus_btn.addEventListener('click',() => {
        increase_plus_btn('phone_input_value');
        let increase_phone_price = document.getElementById('phone_input_value').value * 1219;
        document.getElementById('phone_default_price').innerHTML = increase_phone_price;
        subtotal_tax_total();
        
    });
    
    phone_minus_btn.addEventListener('click', () => {
        decrease_minus_btn('phone_input_value');
        if(parse_Int_default_price('phone_default_price') > 0){
            let decrease_phone_price = document.getElementById('phone_input_value').value  * 1219;
            document.getElementById('phone_default_price').innerHTML = decrease_phone_price;
            subtotal_tax_total();
            
        }       
    });


// increase or decrease case price with click plus or minus btn  ----
let case_minus_btn = document.getElementById('case_minus_btn');
let case_plus_btn = document.getElementById('case_plus_btn');

    case_plus_btn.addEventListener('click', () => {
        increase_plus_btn('case_input_value');
        let increase_case_price = document.getElementById('case_input_value').value * 59;
        document.getElementById('case_default_price').innerHTML = increase_case_price;
        subtotal_tax_total();
    });

    case_minus_btn.addEventListener('click', () => {
        decrease_minus_btn('case_input_value');
            if(parse_Int_default_price('case_default_price') > 0){
                let decrease_case_price = document.getElementById('case_input_value').value * 59;
                document.getElementById('case_default_price').innerHTML = decrease_case_price;
                subtotal_tax_total();
            }
    });

//remove phone div or case div with click cross icon
let removed_phone_div = document.getElementById('removed_phone');
let removed_case_div = document.getElementById('removed_case');
//phone and cart div
let cart_item1 =  document.getElementById('cart_item1'); //mobile phone whole div
let cart_item2 =  document.getElementById('cart_item2');// case whole div
// product details section  removed button set
removed_phone_div.addEventListener('click', () => removed_or_show(cart_item1));//to removed phone div
removed_case_div.addEventListener('click', () => removed_or_show(cart_item2));//to removed case div


//subtotal, Tax, Total --> counter
    const subtotal_tax_total = function(){
        let phone_default_price = parseFloat(document.getElementById('phone_default_price').innerHTML);
        let case_default_price = parseFloat(document.getElementById('case_default_price').innerHTML);
        let subtotal = phone_default_price + case_default_price;
        let tax = Math.round((subtotal * 5) / 100);
        let total = subtotal + tax;
    
        document.getElementById('subtotal').innerHTML = subtotal;
        document.getElementById('tax').innerHTML = tax;
        document.getElementById('total').innerHTML = total;
       
        return [phone_default_price, case_default_price, subtotal, tax, total];
    };


//checkout button event
let check_out_btn = document.getElementById('check_out');
check_out_btn.addEventListener('click', () =>{
    //set product information in confirm section
    document.getElementById('phone_quantity_confirm').innerHTML = document.getElementById('phone_input_value').value;    
    document.getElementById('case_quantity_confirm').innerHTML = document.getElementById('case_input_value').value;
    document.getElementById('phone_price_confirm').textContent = subtotal_tax_total()[0];
    document.getElementById('case_price_confirm').textContent =  subtotal_tax_total()[1];
    document.getElementById('subtotal_confirm').innerHTML = subtotal_tax_total()[2];
    document.getElementById('tax_confirm').innerHTML = subtotal_tax_total()[3];
    document.getElementById('total_confirm').innerHTML = subtotal_tax_total()[4];
    alert('Please Registration');

    removed_or_show(product_details_area, login_area);//to removed  product_details_area and show login_area area
});



//submit btn
let submit_btn  = document.getElementById('submit_btn');

    submit_btn.addEventListener('click', function() {
        const get_name = document.getElementById('name_input');
        const get_email = document.getElementById('email_input');
        const get_phone = document.getElementById('phone_input');
        const get_address = document.getElementById('address_input');
    
        if( get_name.value.length == 0 || get_email.value.length == 0 || get_phone.value.length == 0 || get_address.value.length == 0){
            alert('Please Fill All Form');
        }
        else if( get_name.value.length > 0 && get_email.value.length > 0 && get_phone.value.length > 0 && get_address.value.length > 0){
            
            document.getElementById('show_name_me').innerHTML = get_name.value;
            document.getElementById('show_email').innerHTML = get_email.value;
            document.getElementById('show_phone').innerHTML = get_phone.value;
            document.getElementById('show_address').innerHTML = get_address.value;

            removed_or_show(login_area, show_information_area );//to removed login area and show information area
        
        }
});


//product detail_area, login_area and show_information_area  ---Section---  
let product_details_area = document.getElementById('product_details');
let login_area = document.getElementById('login_area');
let show_information_area  = document.getElementById('show_information');

//reload and check out btn
let reload_btn = document.getElementById('reload');

//reload window
reload_btn.addEventListener('click', () => window.location.reload());


//edit and confirm btn
let edit_btn = document.getElementById('edit_btn');
edit_btn.addEventListener('click',() => removed_or_show(show_information_area, login_area));//to removed information area and show login area

// confirm and thanked area
let thanked_area = document.getElementById('thanked_area');
let confirm_btn  = document.getElementById('confirm_btn');
confirm_btn.addEventListener('click', () => {confirm('Are You Confirm?');removed_or_show(show_information_area, thanked_area);});//to removed show_information_area area and thanked_area area
//goto home
let home_btn = document.getElementById('home_btn');
home_btn.addEventListener('click', () =>{removed_or_show(thanked_area, product_details_area);});///to removed  thanked_area area and show product details area

//goto button
let goto_btn = document.getElementById('goto_btn');
goto_btn.addEventListener('click', ()=> removed_or_show(login_area, product_details_area));//to removed  login area and show product details area
