window.onresize = function () {
    resize();
};

const productHtml = '<div onclick="\showProductDetail(%number)"><img src="%source" alt="%name"><h3>%name</h3><p>%description</p></div>';
let temp = "";
let shownProducts = 3;

const productDetailHtml = '<a id="product-detail-close" onclick="productDetailClose()">&times;</a><img src="%source" alt="%name"><h2>%name</h2><p>%description</p>';

let products = [
    ["Test1|Das hier ist einfach das erste Test Produkt für diesen fiktiven Online-Shop und ich kann hier halt einfach irgendetwas reinschreiben, was dann hinterher an den verschiedenen Stellen angezeigt wird und so weiter und so fort bla bla bla :))", "test1.jpg"],
    ["Test2|Das hier ist einfach das zweite Test Produkt für diesen fiktiven Online-Shop und ich kann hier halt einfach irgendetwas reinschreiben, was dann hinterher an den verschiedenen Stellen angezeigt wird und so weiter und so fort bla bla bla :))", "test1.jpg"],
    ["Test3|Das hier ist einfach das dritte Test Produkt für diesen fiktiven Online-Shop und ich kann hier halt einfach irgendetwas reinschreiben, was dann hinterher an den verschiedenen Stellen angezeigt wird und so weiter und so fort bla bla bla :))", "test1.jpg"],
    ["Test4|Das hier ist einfach das vierte Test Produkt für diesen fiktiven Online-Shop und ich kann hier halt einfach irgendetwas reinschreiben, was dann hinterher an den verschiedenen Stellen angezeigt wird und so weiter und so fort bla bla bla :))", "test1.jpg"],
    ["Test5|Das hier ist einfach das fünfte Test Produkt für diesen fiktiven Online-Shop und ich kann hier halt einfach irgendetwas reinschreiben, was dann hinterher an den verschiedenen Stellen angezeigt wird und so weiter und so fort bla bla bla :))", "test1.jpg"],
    ["Test6|Das hier ist einfach das sechste Test Produkt für diesen fiktiven Online-Shop und ich kann hier halt einfach irgendetwas reinschreiben, was dann hinterher an den verschiedenen Stellen angezeigt wird und so weiter und so fort bla bla bla :))", "test1.jpg"],
];

reload()

function reload() {
    resize();
    document.getElementById("products").style.opacity = "100";
    document.getElementById("product-detail").style.opacity = "0";
    document.getElementById("product-detail").style.marginTop = "-100rem";
    temp = "";
    shownProducts = 3;
    renderProducts();
    document.getElementById("show-more-products").style.opacity = "100";
    document.getElementById("show-more-products").style.cursor = "pointer";
}

function showMoreProducts() {
    shownProducts = shownProducts + 3;
    renderProducts();
}

function renderProducts() {
    if (shownProducts >= products.length) {
        document.getElementById("show-more-products").style.opacity = "0";
        document.getElementById("show-more-products").style.cursor = "default";
    } else {
        document.getElementById("show-more-products").style.opacity = "100";
        document.getElementById("show-more-products").style.cursor = "pointer";
    }
    for (let i = 0; i < shownProducts; i++) {
        addProductToPage(products[i], i);
    }

    document.getElementById("products").innerHTML = temp;
    temp = "";

}

function addProductToPage(product, number) {
    temp += productHtml.replace("%number", number).replace(/%name/g, product[0].split("|")[0]).replace("%description", product[0].split("|")[1]).replace("%source", product[1]);
}

function showProductDetail(number) {

    document.getElementById("show-more-products").style.opacity = "0";
    document.getElementById("show-more-products").style.cursor = "default";
    document.getElementById("product-detail").style.opacity = "100";
    document.getElementById("product-detail").style.marginTop = "6rem";

    let product = products[number];

    document.getElementById("product-detail").innerHTML = productDetailHtml.replace("%source", product[1]).replace(/%name/g, product[0].split("|")[0]).replace("%description", product[0].split("|")[1]);

}

function productDetailClose() {
    document.getElementById("product-detail").style.opacity = "0";
    renderProducts();
    setTimeout(function () {
        document.getElementById("product-detail").style.marginTop = "-100rem";
    }, 250);
}

function resize() {
    let i = window.innerWidth / 2 - 355;
    document.getElementById("product-detail").style.left = i.toString() + "px";
}