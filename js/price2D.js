/**
 * Created by Valued Customer on 8/12/2014.
 */

jQuery(document).ready(function($) {

    var calcs = {
        price :  1.00,
        width:   0,
        length:  0,
        quantity:0,
        cost:    0.00
        };

    $('#calculate').on('click',function(){
//        alert('in calc');
        event.preventDefault();
        var priceBool = getPrice();
        var widthBool = getWidth();
        var lengthBool = getLength();
        console.log('Booleans: '+ priceBool + widthBool + lengthBool);
        if (priceBool && widthBool && lengthBool) {
            calcQuantity();
            calcCost();
        }
    });

    function getPrice(){
        var pBox = document.getElementById('priceBox');
        calcs.price = parseFloat(pBox.value);
        if (calcs.price <= 0 || isNaN(calcs.price)) {
<<<<<<< HEAD
            $('pBox').addClass('badBox');
            alert("Please enter a price per sq ft");
            return false
        }
        $('pBox').removeClass('badBox');
=======
            $(pBox).addClass("badBox");
            alert("Please enter a price per sq ft");
            return false
        }
        $(pBox).removeClass("badBox");
>>>>>>> e8896f687979572a0bb48ad849a07dc34f4e2b1e
        return true
    }

    function getWidth() {
        var wBox = document.getElementById('widthBox');
        calcs.width = parseFloat(wBox.value);
//        console.log('width' + calcs.width);
        if (calcs.width <= 0 || isNaN(calcs.width)){
            $(wBox).addClass('badBox');
            alert('Please enter the room width in ft.');
            return false
        }
        $(wBox).removeClass('badBox');
        return true
    }

    function getLength(){
        var lBox = document.getElementById('lengthBox');
        calcs.length = parseFloat(lBox.value);
//        console.log('length' + calcs.length);
        if (calcs.length <= 0 || isNaN(calcs.length)){
            $(lBox).addClass('badBox');
            alert('Please enter the room length in ft.');
            return false
        }
        $(lBox).removeClass('badBox');
        return true
    }

    function calcQuantity() {
        calcs.quantity = calcs.width * calcs.length;
//        console.log('calc' + calcs);
        document.getElementById('quantityBox').value = calcs.quantity;
    }

    function calcCost() {
        calcs.cost = calcs.quantity * calcs.price;
        document.getElementById('areaCostBox').value = calcs.cost;
    }
});

