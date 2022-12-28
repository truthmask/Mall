// import Parser from "./parser";

var input = document.getElementById('quantity');

input.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById('btn').click()
    }
})

function openWin(){
    var quantity = document.getElementById("quantity",).value;
    var price = quantity;
    var ozon = 'https://www.ozon.ru/search/?text=' + price;
    var wildberries = 'https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search=' + price;
    var aliexpress = 'https://aliexpress.ru/wholesale?SearchText=' + price;
    var yandexMarket = 'https://market.yandex.ru/catalog--avto/54418/list?srnum=1560&was_redir=1&rt=9&rs=eJwz4gtgrGLlOLtuDuMsRqbsUgAj9ASu&text=' + price;
    var lamoda = 'https://www.lamoda.ru/catalogsearch/result/?q=' + price;
    var sberMarket = 'https://sbermegamarket.ru/catalog/?q=' + price;
    let nnull = null;

    var w1 = 'w1'
    var w1 = 'w2'
    var w1 = 'w3'
    var w1 = 'w4'

    // if (price == quantity & nnull == null){
    //     myWindowOzon = window.open(ozon + price, 'w1')
    //     myWindowWildberries = window.open(wildberries + price, 'w2')
    //     myWindowAliexpress = window.open(aliexpress + price, 'w3')
    //     myWindowYandexMarket = window.open(yandexMarket + price, 'w4')
    //     myWindowLamoda = window.open(lamoda + price, 'w5', )
    //     myWindowSberMarket = window.open(sberMarket + price, 'w6')
    // }
    // else{
    //     alert('По вашему запросу ничего не найдено')
    // }

    myWindow = [ozon, wildberries, aliexpress, yandexMarket, lamoda, sberMarket]
    // var last = myWindow[myWindow.length - 1];

    for (let i = 0; i < myWindow.length; i++) {
        console.log( myWindow[i] );
        window.open( myWindow[i] )
        // window.open(myWindow[0], 5000)
        // Parser
    }
    

}

// function closeWin(){
//     myWindow.close()
// }


// var btn = document.getElementById('zakazat')
// btn.addEventListener( 'keyup', event => {
//     if( event.code === 'Enter' ) console.log('enter was pressed');
// });

// btn.addEventListener('keyup', someFunc())