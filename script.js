
let food_header = document.querySelector('.food-header')
let foodincounter = document.querySelector('.foodincounter')




function counter() {
    let innerhtml = ''
    data.forEach(data => {
        innerhtml += `
    <div class="fcc">
    <img src=${data.img}
    alt="Card 3">
    <h3>${data.h3}</h3>
    <button>Order Now</button>
    <span class="rate">₹${data.price}</span>  
    </div>`
    });
    foodincounter.innerHTML = innerhtml

}
counter()

let fcc = Array.from(document.querySelectorAll('.fcc'));

fcc.forEach((fccElement, index) => {
    let button = fccElement.querySelector('button');
    if (button) {
        button.addEventListener('click', () => {
            // Get the item data from the current element
            let foodItem = {
                img: data[index].img,
                h3: data[index].h3,
                price: data[index].price
            };

            // Add the item to the cart array and store it in localStorage
            cartItems.push(foodItem);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Redirect to cart page
            window.open('cart.html', '_blank');
        });

        fccElement.addEventListener('mouseover', () => {
            button.style.display = 'block'; // Show the button on mouseover

        });

        fccElement.addEventListener('mouseout', () => {
            button.style.display = 'none';
            // Hide the button when mouse leaves

        });


    }
    let i = 0; // Initial count

    function updateCartCount() {
        let cartcount = document.querySelector('.cart-count');
        cartcount.innerHTML = i; // Update the display
    }

    // Load existing cart items from localStorage if available
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let fcc = Array.from(document.querySelectorAll('.fcc'));

    fcc.forEach((fccElement, index) => {
        let button = fccElement.querySelector('button');

        if (button) {
            button.addEventListener('click', () => {
                // Increment the count and update the cart count display
                i++;
                updateCartCount();

                // Add the clicked item to the cart and store it in localStorage
                let foodItem = {
                    img: data[index].img,
                    h3: data[index].h3,
                    price: data[index].price


                };
                cartItems.push(foodItem);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                // Redirect to the cart page
                window.open('cart.html', '_blank');
            });

            fccElement.addEventListener('mouseover', () => {
                button.style.display = 'block';
            });

            fccElement.addEventListener('mouseout', () => {
                button.style.display = 'none';
            });
        }
    });

    updateCartCount(); // Initial update to set the cart count if there are existing items





});




function call() {
    let punjabi = document.querySelector('.punjabi')


    punjabi.addEventListener('click', () => {
        // Filter the 'data' array to get only the objects where h3 is 'Korean'
        let koreanFoods = data.filter(e => e.region === 'punjabi');

        // Create HTML content for all "Korean" objects
        let content = '';
        koreanFoods.forEach(e => {
            content += `
            <div class="fcc">
                <img src="${e.img}" alt="Food Image">
                <h3>${e.h3}</h3>
                 <span class="rate">₹${e.price}</span>  
            </div>
        `;

        });

        // Update the foodincounter element with the created content
        foodincounter.innerHTML = content;
    });


    let chinese = document.querySelector('.chinese')

    chinese.addEventListener('click', () => {
        let chineseFoods = data.filter(e => e.region === 'chinese');

        let content = '';
        chineseFoods.forEach(e => {
            content += `
            <div class="fcc">
                <img src="${e.img}" alt="Food Image">
                <h3>${e.h3}</h3>
                <span class="rate">₹${e.price}</span>  
            </div>
        `;
        });

        foodincounter.innerHTML = content;
    });


    let bengali = document.querySelector('.bengali')

    bengali.addEventListener('click', () => {
        let bengaliFoods = data.filter(e => e.region === 'bengali');

        let content = '';
        bengaliFoods.forEach(e => {
            content += `
            <div class="fcc">
                <img src="${e.img}" alt="Food Image">
                <h3>${e.h3}</h3>
                <span class="rate">₹${e.price}</span>  
            </div>
        `;
        });

        foodincounter.innerHTML = content;
    });



    let south = document.querySelector('.southindian')

    south.addEventListener('click', () => {
        let southFoods = data.filter(e => e.region === 'south indian');

        let content = '';
        southFoods.forEach(e => {
            content += `
            <div class="fcc">
                <img src="${e.img}" alt="Food Image">
                <h3>${e.h3}</h3>
                 <span class="rate">₹${e.price}</span>  
            </div>
        `;
        });

        foodincounter.innerHTML = content;
    });



    let gujarati = document.querySelector('.gujrati')

    gujarati.addEventListener('click', () => {
        let gujaratiFoods = data.filter(e => e.region === 'gujarati');

        let content = '';
        gujaratiFoods.forEach(e => {
            content += `
            <div class="fcc">
                <img src="${e.img}" alt="Food Image">
                <h3>${e.h3}</h3>
                <span class="rate">₹${e.price}</span>  
            </div>
        `;
        });

        foodincounter.innerHTML = content;
    });

    let all = document.querySelector('.all')

    all.addEventListener('click', () => {
        let allFoods = data.filter(e => e.all === 'all');

        let content = '';
        allFoods.forEach(e => {
            content += `
            <div class="fcc">
                <img src="${e.img}" alt="Food Image">
                <h3>${e.h3}</h3>
                <span class="rate">₹${e.price}</span>  
            </div>
        `;
        });

        foodincounter.innerHTML = content;
    });


    let korean = document.querySelector('.korean')

    korean.addEventListener('click', () => {
        let koreanFoods = data.filter(e => e.region === 'korean');

        let content = '';
        koreanFoods.forEach(e => {
            content += `
            <div class="fcc">
                <img src="${e.img}" alt="Food Image">
                <h3>${e.h3}</h3>
                <span class="rate">₹${e.price}</span>  
            </div>
        `;
        });

        foodincounter.innerHTML = content;
    });


    let contient = document.querySelector('.contitional')

    contient.addEventListener('click', () => {
        let contientFoods = data.filter(e => e.region === 'Contient');

        let content = '';
        contientFoods.forEach(e => {
            content += `
            <div class="fcc">
                <img src="${e.img}" alt="Food Image">
                <h3>${e.h3}</h3>
                <span class="rate">₹${e.price}</span>  
            </div>
        `;


        });

        foodincounter.innerHTML = content;
    });


    let spanish = document.querySelector('.spanish')

    spanish.addEventListener('click', () => {


        foodincounter.innerHTML = 'Sorry, Not Available';


    });


    let thai = document.querySelector('.thai')

    thai.addEventListener('click', () => {

        foodincounter.innerHTML = 'Sorry, Not Available';

    });



}

call()



let foodTypes = [
    { selector: '.punjabi', region: 'punjabi' },
    { selector: '.chinese', region: 'chinese' },
    { selector: '.bengali', region: 'bengali' },
    { selector: '.southindian', region: 'south indian' },
    { selector: '.gujrati', region: 'gujarati' },
    { selector: '.all', region: 'all' },
    { selector: '.korean', region: 'korean' },
    { selector: '.contitional', region: 'Contient' }
];

foodTypes.forEach(foodType => {
    let element = document.querySelector(foodType.selector);
    element.addEventListener('click', () => {
        // Filter items based on region
        let filteredFoods = data.filter(e => foodType.region === 'all' ? e.all === 'all' : e.region === foodType.region);

        // Generate HTML content for filtered items
        let content = '';
        filteredFoods.forEach((e, index) => {
            content += `
                <div class="fcc">
                    <img src="${e.img}" alt="Food Image">
                    <h3>${e.h3}</h3>
                    <button class="order-btn" style="display: none;">Order Now</button>
                </div>
            `;
        });

        // Insert the HTML into foodincounter
        foodincounter.innerHTML = content;

        // Add hover effect for "Order Now" button
        Array.from(document.querySelectorAll('.fcc')).forEach((fccElement, index) => {
            let button = fccElement.querySelector('.order-btn');

            // Show button on hover
            fccElement.addEventListener('mouseover', () => {
                button.style.display = 'block';
            });

            // Hide button when mouse leaves
            fccElement.addEventListener('mouseout', () => {
                button.style.display = 'none';
            });

            // Handle "Order Now" button click
            button.addEventListener('click', () => {
                let foodItem = {
                    img: filteredFoods[index].img,
                    h3: filteredFoods[index].h3,
                    price: filteredFoods[index].price
                };

                cartItems.push(foodItem);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                // Redirect to cart page
                window.open('cart.html', '_blank');
            });
        });
    });
});




//gsap

gsap.to(".banner", {
    rotate: 720,
    duration: 1,
})

// gsap.to(".navbar", {
//     duration: 1,
//     rotate:-360,
// })

// gsap.to(".social-media img",{
//     duration :.1,
//   filter: invert(1),
//     scrollTrigger:{
//         trigger: ".social-media img",
//         scroller:"body",
//         start:"top 80%",
//         },
//         stagger:1
// })