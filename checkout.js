 //Your order is accepted 3 seconds : Your order is being cooked 8 seconds : 
    //Your order is ready 10 seconds : Order out for delivery 12 seconds : Order delivered
    function time() {
        alert("You ordered will be complete in 33 seconds")
        setTimeout(function () {
            alert("Your order is accepted")
        }, 3000)
        setTimeout(function () {
            alert("Your order is being cooked ")
        }, 11000)
        setTimeout(function () {
            alert("Your order is ready in  10 seconds")
        }, 21000)
        setTimeout(function () {
            alert("Order out for delivery in 12 seconds")
        }, 33000)

    }