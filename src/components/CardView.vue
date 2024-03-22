<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div id="container11">
        <div class="product-details">
            <slot name="cardTitle"></slot>
            <span class="hint-star star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </span>
            <slot name="cardDesc"></slot>
            <div class="control">
                <button @click="addToCart()" type="button" class="btn">
                    <span class="visa-card"><i class="fa fa-cc-visa" aria-hidden="true"></i></span>
                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                </button>
                <button type="button" class="btn">
                    <slot name="cardLink"></slot>
                </button>
            </div>
        </div>
        <div class="product-image">
            <slot name="cardImage"></slot>
            <div class="info">
                <slot name="cardInfo"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardView',
    methods: {
        addToCart() {
            const payload = {
            // Define your payload properties here
            // For example:
            agentImage: '',
            agentCodeName: '',
            agentTier: '',
            agentRole: '',
            agentPrice: ''
        };
            this.$store.dispatch('addToCart', payload);
        },
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap');

#container11 {
    background: #111;
    border: 2px solid #111;
    text-align: center;
    border-radius: 40px;
    overflow: hidden;
    margin: 5em auto;
    height: 350px;
    width: 700px;
    transition: 0.8s ease-in-out;
}

.product-image {
    border-radius: 10px;
}



#container11:hover {
    box-shadow: 0 5px 30px 20px #333;
    transform: scale(1.05);

}

.product-details {
    color: #ff003c;
    position: relative;
    text-align: left;
    overflow: hidden;
    padding: 30px;
    height: 100%;
    float: left;
    width: 45%;
}

.hint-star {
    display: inline-block;
    margin-left: 0.5em;
    color: gold;
    width: 50%;
}

#container11 .product-details>p {
    margin-top: 5px;
    padding: 5px;
    text-align: left;
    font-size: 20px;
    color: #ddd;

}

.control {
    position: absolute;
    left: 22.8%;

}

.btn {
    /* transform: translateY(0px); */
    transition: 0.3s ease-in-out;
    background: #000;
    border-radius: 50px;
    height: 50px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    outline: none;
    border: 2px solid #000;
    color: #ddd;
    padding: 0;
    margin: 0;

}

.btn:hover {
    transform: scale(1.1);
    border: 2px solid #000;
    background: #000;
    color: #ff003c;
    border-radius: 50px;

}

.btn span {
    transition: transform 0.3s;
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.2em;
    margin: 0;

}

.btn .visa-card,
.shopping-cart {
    background: #000;
    border: 0;
    margin: 0;
}

.btn .price {
    transform: translateX(-10%);
    padding-right: 15px;
}

.btn .shopping-cart {
    transform: translateX(-100%);
    position: absolute;
    background: #000;
    z-index: 1;
    left: 0;
    top: 0;
}

.btn .buy {
    z-index: 3;
    font-weight: bolder;
}

.btn:hover .price {
    transform: translateX(-110%);
}

.btn:hover .shopping-cart {
    transform: translateX(0%);
}



.product-image {
    transition: all 0.3s ease-out;
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 100%;
    /* float: right; */
    width: 45%;
    display: inline-block;
}

#container11 img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
}

.info {
    background: rgba(27, 26, 26, 0.9);
    transition: all 0.5s ease-in-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.8;
    text-align: center;
    font-size: 105%;
    font-weight: bold;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}

.product-image:hover .info {
    transform: translateX(0);
}

.info ul li {
    transition: 0.3s ease;
}

.info ul li:hover {
    transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
    transition: all 0.3s ease-out;
}

.product-image:hover img {
    transform: scale(1.2, 1.2);
}
</style>