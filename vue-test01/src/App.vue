<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <button :disabled="isButtonDisabled">Button</button>
  <button :disabled="true">Button</button>
  <div :class="{active: isActive, 'text-danger': hasError}"></div>
  <div :class="classObject"></div>
  <div :class="classObject2"></div>

  <div :style="{color: activeColor, fontSize: fontSize + 'px'}"></div>
  <div :style="styleClass"></div>

  <li v-for="(item, index) in items">
    {{ parsentMessage }} - {{ index }} - {{ item.message }}
  </li>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { computed, reactive, ref } from 'vue';

const isButtonDisabled = ref(false)
const isActive = ref(false)
const hasError = ref(true)

const activeColor = ref('red')
const fontSize = ref(30)

const classObject = reactive({
  active: true,
  'text-danger': false
})

const error = ref(null)
const classObject2 = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))

const styleClass = reactive({
  color: 'red',
  fontSize: '13px'
})

const items = ref([{message: 'Foo'}, {message: 'Bar'}])
const parsentMessage = ref('Parsent')
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
