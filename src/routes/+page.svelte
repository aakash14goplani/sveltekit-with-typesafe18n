<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import type { Locales } from '$lib/i18n/i18n-types';
	import { LL, setLocale } from '$lib/i18n/i18n-svelte';
	import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';

  let value: Locales = 'en';
  let randomNumber = 0;

  async function handleLocaleChange(event: any) {
    event.preventDefault();
    value = event?.target?.value;
    await loadLocaleAsync(value);
    setLocale(value);
    sessionStorage.setItem('lang', value);
  }

  onMount(() => {
    const valueFromSession = sessionStorage.getItem('lang') || 'en';
    value = valueFromSession as Locales;
    sessionStorage.setItem('lang', valueFromSession);
  })

  onDestroy(() => {
    if (browser) {
      sessionStorage.removeItem('lang');
    }
  })
</script>

<div class="container">
  <div class="container__title">
    <h1>{$LL.heading()}</h1>
  </div>
  <div class="container__toggle">
    <span>{$LL.toggle_label()}: </span>
    <select {value} on:change={handleLocaleChange}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="fr">French</option>
    </select>
  </div>
  <div class="container__content">
    <p>{$LL.body_text({ download: 16711, date: new Date(2023, 6, 14, 0, 0, 0, 0) })}</p>

    <div class="container__content__plural">
      <div class="container__content__plural__buttons">
        <button class:active={randomNumber === 0} on:click={() => randomNumber = 0}>0</button>
        <button class:active={randomNumber === 1} on:click={() => randomNumber = 1}>1</button>
        <button class:active={randomNumber === 2} on:click={() => randomNumber = 2}>2</button>
      </div>
      <span>{$LL.awards(randomNumber)}</span>
    </div>

    <div class="container__content__formatter">
      <span><strong>Time: </strong>{$LL.time({ value: new Date() })}</span>
      <span><strong>Date: </strong>{$LL.date({ value: new Date() })}</span>
      <span><strong>Currency: </strong>{$LL.currency({ value: 16711 })}</span>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    margin: 1rem;

    &__title {
      display: flex;
      justify-content: center;
    }

    &__toggle {
      padding: 0 1rem;
      font-size: 1.4rem;
      line-height: 2rem;

      select {
        padding: 0.25rem;
        font-size: 1rem;
        margin-left: 1rem;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      font-size: 1.4rem;
      line-height: 2rem;
      text-align: justify;

      &__plural {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        
        button {
          margin-right: 2rem;
        }

        span {
          margin-top: 1rem;
        }

        .active {
          color: blue;
          background-color: aliceblue;
          padding: 0.5rem;
        }
      }

      &__formatter {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
      }
    }
  }
</style>
