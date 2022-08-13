let meals = [];

const selectCardLunch = (el) => {
    const selectedLunch = document.querySelector('.js-lunch > .select-border');
    const circleLunch = document.querySelector('.js-lunch > .select-border > .card-info > .meal-info > .meal-price > .select-circle');
    if (selectedLunch) {
        selectedLunch.classList.remove('select-border');
        circleLunch.classList.remove('show');
        if (meals.length > 0) {
            for (let i = 0; i < meals.length; i++) {
                if (meals[i].meal === 'lunch') {
                    meals.splice(i, 1);
                }
            }
        }
    } 
    if (el !== selectedLunch) {
        el.classList.add('select-border');
        el.querySelector('.card-info > .meal-info > .meal-price > .select-circle').classList.add('show');
        meals.push({
            meal: 'lunch',
            name: el.querySelector('.card-info > .meal-info > .meal-title').innerText,
            value: el.querySelector('.card-info > .meal-info > .meal-price > p > strong').innerText
        })
        console.log(meals);
    }
    validateButton();
};

const selectCardDrink = (el) => {
    const selectedDrink = document.querySelector('.js-drink > .select-border');
    const circleDrink = document.querySelector('.js-drink > .select-border > .card-info > .meal-info > .meal-price > .select-circle');

    if(selectedDrink) {
        selectedDrink.classList.remove('select-border');
        circleDrink.classList.remove('show');
        if (meals.length > 0) {
            for (let i = 0; i < meals.length; i++) {
                if (meals[i].meal === 'drink') {
                    meals.splice(i, 1);
                }
            }
        }
    }
    if(el !== selectedDrink) {
        el.classList.add('select-border');
        el.querySelector('.card-info > .meal-info > .meal-price > .select-circle').classList.add('show');
        meals.push({
            meal: 'drink',
            name: el.querySelector('.card-info > .meal-info > .meal-title').innerText,
            value: el.querySelector('.card-info > .meal-info > .meal-price > p > strong').innerText
        })
        console.log(meals);
    }
    validateButton();
};

const selectCardDessert = (el) => {
    const selectedDessert = document.querySelector('.js-dessert > .select-border');
    const circleDessert = document.querySelector('.js-dessert > .select-border > .card-info > .meal-info > .meal-price > .select-circle');

    if(selectedDessert) {
        selectedDessert.classList.remove('select-border');
        circleDessert.classList.remove('show');
        if (meals.length > 0) {
            for (let i = 0; i < meals.length; i++) {
                if (meals[i].meal === 'dessert') {
                    meals.splice(i, 1);
                }
            }
        }
    }
    if(el !== selectedDessert) {
        el.classList.add('select-border');
        el.querySelector('.card-info > .meal-info > .meal-price > .select-circle').classList.add('show');
        meals.push({
            meal: 'dessert',
            name: el.querySelector('.card-info > .meal-info > .meal-title').innerText,
            value: el.querySelector('.card-info > .meal-info > .meal-price > p > strong').innerText
        })
        console.log(meals);
    }

    validateButton();
};

const validateButton = () => {
    const button = document.querySelector('.js-button');
    if (meals.length === 3) {
        button.classList.add('order-valid');
    } else {
        button.classList.remove('order-valid');
    }
};

const order = () => {
    let lunch;
    let drink;
    let dessert;
    let total = 0;
    if(meals.length === 3) {
        meals.forEach(meal => {
            if(meal.meal === 'lunch') {
                lunch = meal.name;
            } else if(meal.meal === 'drink') {
                drink = meal.name;
            } else if(meal.meal === 'dessert') {            
                dessert = meal.name;
            }
            
            total += Number(meal.value.replace(',', '.'));
        });
        let orderString = `Olá, gostaria de fazer o pedido:\n- Prato: ${lunch}\n
        - Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${total.toFixed(2)}`;
        
        str = `https://wa.me/5519992444889?text=${encodeURIComponent(orderString)}`;

        window.open(str, '_blank');

    // Olá, gostaria de fazer o pedido:
    // - Prato: Frango Yin Yang
    // - Bebida: Coquinha Gelada
    // - Sobremesa: Pudim
    // Total: R$ 27.70
    }
}

    

