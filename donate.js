var addActiveClass = function(buttonPressed){
    document.getElementById('paytm').classList.remove('button-active');
    document.getElementById('upi').classList.remove('button-active');
    document.getElementById('bank').classList.remove('button-active');
    buttonPressed.classList.add("button-active");
}

document.getElementById('paytm').addEventListener('click',function(){

    addActiveClass(document.getElementById('paytm'));
    var block=document.getElementById('payment-block');
    block.innerHTML='<img src="https://picsum.photos/id/12/300/500">';
})

document.getElementById('upi').addEventListener('click',function(){

    addActiveClass(document.getElementById('upi'));
    var block=document.getElementById('payment-block');
    block.innerHTML='<img src="https://picsum.photos/id/24/300/500">';
})

document.getElementById('bank').addEventListener('click',function(){

    addActiveClass(document.getElementById('bank'));
    var block=document.getElementById('payment-block');
    block.innerHTML='<img src="https://picsum.photos/id/36/300/500">';
})