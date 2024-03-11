<template>
  <div class="home">
    <h2 class="home-words">We Specialize In The Art <br> Of <span class="Dis">Discretion</span> & <span
        class="Eff">Effectiveness</span>.
    </h2>
    <img src="https://cdn-images.imagevenue.com/b7/58/15/ME17QYHK_o.jpg" width="1500px" alt="back">
  </div>
  <div class="drac">
    <div class="cards__inner">
      <div class="cards__card card1">
        <p class="card__heading">Gold Plan</p>
        <p class="card__price">R 499.99 / month</p>
        <ul class="card_bullets flow" role="list">
          <li>Personalized Ads</li>
          <li>Limited Agent Requests</li>
          <li>Limited Access to Features</li>
          <li>Tier 1 Agent Access Only</li>
        </ul>
        <a class="card__cta cta" href="/src//views//LoginView.vue">Get Started</a>
      </div>
      <div class="overlay cards__inner"></div>
    </div>
    <div class="cards__inner">
      <div class="cards__card card2">
        <p class="card__heading">Diamond Plan</p>
        <p class="card__price">R 999.99 / month</p>
        <ul class="card_bullets flow" role="list">
          <li>No Ads</li>
          <li>Access to All Features</li>
          <li>Unlimited Agent Requests</li>
          <li>Tier 1 & 2 Agent Access Allowed</li>
        </ul>
        <a class="card__cta cta" href="/src//views//LoginView.vue">Get Started</a>
      </div>
      <div class="overlay cards__inner"></div>
    </div>
    <div class="cards__inner">
      <div class="cards__card card3">
        <p class="card__heading">Platinum Plan</p>
        <p class="card__price">R 2999.99 / month</p>
        <ul class="card_bullets flow" role="list">
          <li>No Ads</li>
          <li>Access to All Features</li>
          <li>Unlimited Agent Requests</li>
          <li>All Agent Tiers Available</li>
        </ul>
        <a class="card__cta cta" href="/src//views//LoginView.vue">Get Started</a>
      </div>
      <div class="overlay cards__inner"></div>
    </div>
  </div>
  <br>
  <br>
  <a class="button" href="/src//views//LoginView.vue">View Agents</a>

</template>

<script>

export default {
  components: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.home-words {
  color: #ddd;
  margin-top: 200px;
  position: absolute;
  letter-spacing: 3px;
  width: 450px;
  font-family: "Playfair Display", serif;
}

.Dis,
.Eff {
  color: #FF003C;
}

.main__heading {
  font-weight: 600;
  font-size: 2.25em;
  margin-bottom: 0.75em;
  text-align: center;
  color: #000000;
}

.cards__inner {
  width: 350px;
}

.drac {
  width: auto;
  display: flex;
  gap: 100px;
  justify-content: center;
  font-family: "Playfair Display", serif;
}

.cards {
  position: relative;
}

.card1 {
  flex: 1 1 14rem;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  font-weight: bold;
  align-items: start;
  gap: 1.25em;
  color: #000;
  background-color: #ddd;
  border: 1px solid #eceff133;
  border-radius: 15px;
  transition: 0.7s;
}

.card2 {
  flex: 1 1 14rem;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  font-weight: bold;
  align-items: start;
  gap: 1.25em;
  color: #000;
  background-color: #ddd;
  border: 1px solid #eceff133;
  border-radius: 15px;
  transition: 0.7s;
}

.card3 {
  flex: 1 1 14rem;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  font-weight: bold;
  align-items: start;
  gap: 1.25em;
  color: #000;
  background-color: #ddd;
  border: 1px solid #eceff133;
  border-radius: 15px;
  transition: 0.7s;
}

.card__bullets {
  line-height: 1.4;
}

.card__heading {
  font-size: 1.75em;
  font-weight: 400;
}

.card__price {
  font-size: 1.75em;
  font-weight: 700;
}

.flow>*+* {
  margin-top: var(--flow-space, 1.25em);
}

.cta {
  display: block;
  align-self: end;
  margin: 1em 0 0.5em 0;
  text-align: center;
  text-decoration: none;
  color: #000;
  background-color: transparent;
  outline: 1px solid rgb(0, 0, 0);
  padding: 0.7em;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
}

.cta:hover {
  background-color: #000;
  color: #ddd;
}

.card1:hover {
  background: #FFD700;
  color: #000;
  outline: 5px solid #000;
  box-shadow: inset 0 0 80px #FFD700, inset 20px 0 80px #FFD700,
    inset -20px 0 80px #FFD700, inset 20px 0 300px #FFD700, inset -20px 0 300px #FFD700,
    0 0 50px #FFD700;
  transition: ease-in-out 0.7s;
  transform: scale(1.09);
}

.card2:hover {
  background: #b9f2ff;
  color: #000;
  outline: 5px solid #000;
  box-shadow: inset 0 0 80px #b9f2ff, inset 20px 0 80px #b9f2ff,
    inset -20px 0 80px #b9f2ff, inset 20px 0 300px #b9f2ff, inset -20px 0 300px #b9f2ff,
    0 0 50px #b9f2ff;
  transition: ease-in-out 0.7s;
  transform: scale(1.09);
}

.card3:hover {
  background: #e5e4e2;
  color: #000;
  outline: 5px solid #000;
  box-shadow: inset 0 0 80px #e5e4e2, inset 20px 0 80px #e5e4e2,
    inset -20px 0 80px #e5e4e2, inset 20px 0 300px #e5e4e2, inset -20px 0 300px #e5e4e2,
    0 0 50px #e5e4e2;
  transition: ease-in-out 0.7s;
  transform: scale(1.09);
}

/* button */

.button {
  --glow-color: #ff003c;
  --glow-spread-color: #ff003c;
  --enhanced-glow-color: #ff003c;
  --btn-color: #111;
  border: .25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em .20em var(--glow-color),
    inset 0 0 .75em .25em var(--glow-color);
  position: relative;
  transition: all 0.3s;
  text-decoration: none;
}

.button::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--glow-spread-color);
  filter: blur(2em);
  opacity: .7;
  transform: perspective(1.9em) rotateX(35deg) scale(1, .6);
}

.button:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow: 0 0 1em .25em var(--glow-color),
    inset 0 0 .75em .25em var(--glow-color);
}

.button:active {
  box-shadow: 0 0 0.6em .25em var(--glow-color),
    0 0 2.5em 2em var(--glow-spread-color),
    inset 0 0 .5em .25em var(--glow-color);
}
</style>