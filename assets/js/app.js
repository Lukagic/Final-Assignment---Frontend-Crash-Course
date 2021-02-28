// slideshow

var slider = document.querySelector(".slider");

if (slider) {
    const slides = document.querySelector(".slider").children;
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const indicator = document.querySelector(".indicator");
    let index = 0;

    prev.addEventListener("click", function () {
        prevSlide();
        updateCircleIndicator();
        resetTimer();
    });

    next.addEventListener("click", function () {
        nextSlide();
        updateCircleIndicator();
        resetTimer();
    });

    // create circle indicators
    function circleIndicator() {
        for (let i = 0; i < slides.length; i++) {
            const div = document.createElement("div");

            div.setAttribute("onclick", "indicateSlide(this)");
            div.id = i;
            if (i == 0) {
                div.className = "active";
            }
            indicator.appendChild(div);
        }
    }

    circleIndicator();

    function indicateSlide(element) {
        index = element.id;
        changeSlide();
        updateCircleIndicator();
        resetTimer();
    }

    function updateCircleIndicator() {
        for (let i = 0; i < indicator.children.length; i++) {
            indicator.children[i].classList.remove("active");
        }
        indicator.children[index].classList.add("active");
    }

    function prevSlide() {
        if (index == 0) {
            index = slides.length - 1;
        } else {
            index--;
        }
        changeSlide();
    }

    function nextSlide() {
        if (index == slides.length - 1) {
            index = 0;
        } else {
            index++;
        }
        changeSlide();
    }

    function changeSlide() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        slides[index].classList.add("active");
    }

    function resetTimer() {
        // when click to indicator or controls button
        // stop timer
        clearInterval(timer);
        // then started again timer
        timer = setInterval(autoPlay, 4000);
    }

    function autoPlay() {
        nextSlide();
        updateCircleIndicator();
    }

    let timer = setInterval(autoPlay, 4000);

    //  end slideshow
}

// header overlay
var search_button = document.querySelector(".search_button");
var header_overlay = document.querySelector(".header-search__overlay");
search_button.onclick = () => {
    header_overlay.classList.toggle("show");
};
var headerSearchClose_button = document.querySelector(".header-search__close");
headerSearchClose_button.onclick = () => {
    header_overlay.classList.toggle("show");
};

// Listen for all clicks on the document
document.addEventListener(
    "click",
    function (event) {
        if (!event.target.closest(".header__drawers-list__item")) {
            shoppingcart_wrapper.classList.remove("show");
            document.body.classList.remove("modal-active");
        }
    },
    false
);

// minicart open close
var minicart_button = document.querySelector(".minicart_button");
var shoppingcart_wrapper = document.querySelector(".shoppingcart-wrapper");
minicart_button.onclick = () => {
    shoppingcart_wrapper.classList.add("show");
    document.body.classList.add("modal-active");
};

var minicartClose_button = document.querySelector(".minicart-close_button");
minicartClose_button.onclick = () => {
    shoppingcart_wrapper.classList.remove("show");
    document.body.classList.remove("modal-active");
};

// navigation open close
var navigation_button = document.querySelector(".navigation_button");
var header_navigation = document.querySelector(".header-navigation");
navigation_button.onclick = () => {
    header_navigation.classList.toggle("show");
};

var navigationClose_button = document.querySelector(".nav-close_button");
navigationClose_button.onclick = () => {
    header_navigation.classList.toggle("show");
};

// shopping options filter open
var expandShoppingOptions_button = document.querySelector(
    ".expand-shopping__button"
);
if (expandShoppingOptions_button) {
    var menu_wrapper5 = document.querySelector(".category-accordion");
    expandShoppingOptions_button.onclick = () => {
        menu_wrapper5.classList.toggle("show");
    };
}

// shopping options filter close

var closeShoppingOptions_button = document.querySelector(
    ".filter-close_button"
);
if (closeShoppingOptions_button) {
    var menu_wrapper5 = document.querySelector(".category-accordion");
    closeShoppingOptions_button.onclick = () => {
        menu_wrapper5.classList.toggle("show");
    };
}

// grid view on catalogue page

var btns = document.querySelectorAll(".view-mode-button");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        var catalogList = document.querySelector(".catalog-list");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if (this.classList.contains("btn-grid")) {
            catalogList.classList.remove("list");
            catalogList.classList.add("grid");
        } else if (this.classList.contains("btn-list")) {
            catalogList.classList.remove("grid");
            catalogList.classList.add("list");
        }
    });
}

// accordion menu

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// product page info toggle
var detailsHeader = document.querySelector(".info-header");
if (detailsHeader) {
    var detailsWrapper = document.querySelector(".details-wrapper");
    detailsHeader.onclick = () => {
        detailsWrapper.classList.toggle("show");
        if (detailsWrapper.classList.contains("show")) {
            detailsWrapper2.classList.remove("show");
        }
    };
}

var detailsHeader2 = document.querySelector(".info-header2");
if (detailsHeader2) {
    var detailsWrapper2 = document.querySelector(".details-wrapper2");
    detailsHeader2.onclick = () => {
        detailsWrapper2.classList.toggle("show");
        if (detailsWrapper2.classList.contains("show")) {
            detailsWrapper.classList.remove("show");
        }
    };
}

// product page color type switch
var blackFrisbeePick = document.querySelector(".black-frisbee");
if (blackFrisbeePick) {
    var orangeFrisbeePick = document.querySelector(".orange-frisbee");
    var largeFrisbee = document.querySelector(".product-large__image");
    var largeImage = document.querySelector(".product-large__image");
    var blackPicker = document.querySelector(".black-picker");
    var orangePicker = document.querySelector(".orange-picker");
    blackFrisbeePick.onclick = () => {
        blackFrisbeePick.classList.toggle("active-border");
        if (orangeFrisbeePick.classList.contains("active-border")) {
            orangeFrisbeePick.classList.remove("active-border");
            largeImage.src = "./assets/img/product-page/image 4.jpg";
        }
    };
    orangeFrisbeePick.onclick = () => {
        orangeFrisbeePick.classList.toggle("active-border");
        if (blackFrisbeePick.classList.contains("active-border")) {
            blackFrisbeePick.classList.remove("active-border");
            largeImage.src = "./assets/img/product-page/orange.jpg";
        }
    };
    blackPicker.onclick = () => {
        largeImage.src = "./assets/img/product-page/image 4.jpg";
    };
    orangePicker.onclick = () => {
        largeImage.src = "./assets/img/product-page/orange.jpg";
    };
}


/* Catalog Add to Cart */
function hideAllCatalog(event) {
    let catalogItem = document.querySelectorAll(".catalog-list-item");
    for (let counter = 0; counter < catalogItem.length; counter++) {
        catalogItem[counter].classList.add('hide');
    }
}

function showAllCatalog(event) {
    let catalogItem = document.querySelectorAll(".catalog-list-item");
    for (let counter = 0; counter < catalogItem.length; counter++) {
        catalogItem[counter].classList.remove('hide');
    }
}

function showColors(event) {
    if (event.target.className === 'active') {
        event.target.classList.remove('active');
        showAllCatalog(event);
        console.log("111");
        let layerTrigger = document.querySelectorAll(".layered-color .active");
        for (let counter = 0; counter < layerTrigger.length; counter++) {
            layerTrigger[counter].classList.remove('active');
        }

        let catalogItem = document.querySelectorAll(".catalog-list-item");
        for (let counter = 0; counter < catalogItem.length; counter++) {
            catalogItem[counter].classList.remove('show');
        }
    } else {
        hideAllCatalog(event);
        let layerTriggers = document.querySelectorAll(".layered-color .active");
        for (let counter = 0; counter < layerTriggers.length; counter++) {
            layerTriggers[counter].classList.remove('active');
        }
        event.target.classList.add('active');

        let pickedColor = event.target.attributes['data-color'].value;

        let catalogItem = document.querySelectorAll(".catalog-list-item");
        for (let counter = 0; counter < catalogItem.length; counter++) {
            catalogItem[counter].classList.remove('show');
        }

        let catalogItemActive = document.querySelectorAll('.catalog-list-item.color-' + pickedColor);
        for (let counter = 0; counter < catalogItemActive.length; counter++) {
            catalogItemActive[counter].classList.add("show");
        }
    }
}


// shopping cart on empty and counter for items
function removeItem(event) {
    event.preventDefault();
    let item = event.target.closest(".shoppingcart-item__container");
    event.stopPropagation();
    item.parentNode.removeChild(item);

    let itemNumber = document.querySelector("#minicart-content-wrapper")
        .children.length;
    document.querySelector(".shoppingcart-header__count").innerHTML =
        itemNumber + " Items in Cart";

    if (itemNumber >= 1) {
        document
            .querySelector(".shoppingcart-wrapper__content")
            .classList.remove("empty");
    } else {
        document
            .querySelector(".shoppingcart-wrapper__content")
            .classList.add("empty");
    }
}

/* Catalog Add to Cart */
var buttons = document.querySelectorAll(".catalog-product-cta");
for (var counter = 0; counter < buttons.length; counter++) {
    buttons[counter].addEventListener("click", function (event) {
        event.preventDefault();

        let item = event.target.closest(".catalog-list-item");

        let itemImage = item.querySelectorAll(".product-image")[0].children[0]
            .src;
        let itemTitle =
            item.querySelectorAll(".product-title")[0].textContent +
            "| Major League Ultimate";
        let itemColor = item.querySelectorAll(".hidden-color")[0].textContent;
        let itemPrice = item.querySelectorAll(".product-price")[0].children[0]
            .textContent;

        let obj = {
            Image: itemImage,
            Title: itemTitle,
            Color: itemColor,
            Price: itemPrice,
        };
        let itemInfo = JSON.stringify(obj);
        console.log(itemInfo);

        let itemContent =
            '<li class="shoppingcart-item__container">' +
            '<div class="shoppingcart-item__image-container"><img src="' +
            itemImage +
            '" alt="' +
            itemTitle +
            '" ></div>' +
            "<div>" +
            '<h3><a class="shoppingcart-item__title"' +
            '" href="layout-product-page.html">' +
            itemTitle +
            " </a>" +
            "</h3>" +
            '<dl class="shopping-cart__properties">' +
            '<dt tabindex="0">Color</dt>' +
            '<dd tabindex="0">' +
            " " +
            itemColor +
            "</dd>" +
            '<div class="price-wrapper"><dt tabindex"0">Price</dt>' +
            '<dd tabindex="0">' +
            " " +
            itemPrice +
            "</dd>" +
            '<div class="quantity-wrapper">' +
            '<dt class="quantity" tabindex="0">Qty</dt>' +
            '<dd><form><fieldset><legend>items qty form</legend><label for="qty">"heiItems In Cart"</label>' +
            '<input class="input" name="qty" type="number" placeholder="1">' +
            "</fieldset></form></dd></div></dl></div>" +
            '<div class="shoppingcart-item__actions"><a href="./layout-product-page.html"><img src="assets/img/cart/edit-icon.svg" alt=""></a> <a onclick="removeItem(event)" class="delete-item"><img src="assets/img/cart/delete-icon.svg" alt=""></a></div>' +
            "</li>";

        document.getElementById(
            "minicart-content-wrapper"
        ).innerHTML += itemContent;

        let itemNumber = document.querySelector("#minicart-content-wrapper")
            .children.length;
        document.querySelector(".shoppingcart-header__count").innerHTML =
            itemNumber + " Items in Cart";

        if (itemNumber >= 1) {
            document
                .querySelector(".shoppingcart-wrapper__content")
                .classList.remove("empty");
        } else {
            document
                .querySelector(".shoppingcart-wrapper__content")
                .classList.add("empty");
        }

        setTimeout(function () {
            document.body.classList.add("modal-active");
            shoppingcart_wrapper.classList.add("show");
            event.target.removeAttribute("disabled");
        }, 750);

        event.target.setAttribute("disabled", "disabled");
        event.target.innerHTML = "Added";
        setTimeout(function () {
            event.target.innerHTML = "Add to Cart";
        }, 1500);
    });
}

// product page add to cart
var productAddToCartButton = document.querySelector(".product-page_cta");

if (productAddToCartButton) {
    productAddToCartButton.addEventListener("click", function (event) {
        event.preventDefault();
        var productItemImage = document.querySelector(".product-large__image")
            .src;
        var productQuantity = document.getElementById("pp-qty").value;
        var productTitle = document.querySelector(".product-header")
            .textContent;
        var productPrice = document.getElementById("product-price").textContent;
        if (
            productItemImage ==
            "http://localhost:3000/assets/img/product-page/image%204.jpg"
        ) {
            productColor = "black";
        } else {
            productColor = "orange";
        }

        let obj = {
            Image: productItemImage,
            Title: productTitle,
            Color: productColor,
            Price: productPrice,
            Quantity: productQuantity,
        };

        let itemInfo = JSON.stringify(obj);
        console.log(itemInfo);

        let itemContent =
            '<li class="shoppingcart-item__container">' +
            '<div class="shoppingcart-item__image-container"><img src="' +
            productItemImage +
            '" alt="' +
            productTitle +
            '" ></div>' +
            "<div>" +
            '<h3><a class="shoppingcart-item__title"' +
            '" href="layout-product-page.html">' +
            productTitle +
            " </a>" +
            "</h3>" +
            '<dl class="shopping-cart__properties">' +
            '<dt tabindex="0">Color</dt>' +
            '<dd tabindex="0">' +
            " " +
            productColor +
            "</dd>" +
            '<div class="price-wrapper"><dt tabindex"0">Price</dt>' +
            '<dd tabindex="0">' +
            " " +
            productPrice +
            "</dd>" +
            '<div class="quantity-wrapper">' +
            '<dt class="quantity" tabindex="0">Qty</dt>' +
            '<dd><form><fieldset><legend>items qty form</legend><label for="qty">"heiItems In Cart"</label>' +
            '<input class="input" name="qty" type="number" placeholder="1" value="' +
            productQuantity +
            '" >' +
            "</fieldset></form></dd></div></dl></div>" +
            '<div class="shoppingcart-item__actions"><a href="./layout-product-page.html"><img src="assets/img/cart/edit-icon.svg" alt=""></a> <a onclick="removeItem(event)" class="delete-item"><img src="assets/img/cart/delete-icon.svg" alt=""></a></div>' +
            "</li>";

        document.getElementById(
            "minicart-content-wrapper"
        ).innerHTML += itemContent;
        let itemNumber = document.querySelector("#minicart-content-wrapper")
            .children.length;
        document.querySelector(".shoppingcart-header__count").innerHTML =
            itemNumber + " Items in Cart";

        if (itemNumber >= 1) {
            document.querySelector(".shoppingcart-wrapper__content").classList.remove("empty");
        } else {
            document
                .querySelector(".shoppingcart-wrapper__content")
                .classList.add("empty");
        }

        setTimeout(function () {
            document.body.classList.add("modal-active");
            shoppingcart_wrapper.classList.add("show");
            event.target.removeAttribute("disabled");
        }, 750);

        event.target.setAttribute("disabled", "disabled");
        event.target.innerHTML = "Added";
        setTimeout(function () {
            event.target.innerHTML = "Add to Cart";
        }, 1500);
    });
}
