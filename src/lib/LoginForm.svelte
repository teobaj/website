<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let formRef: HTMLDivElement;

  function handleLogin() {
    formRef.style.opacity = "0";
    dispatch("submit");
  }
</script>

<div bind:this={formRef} class="card">
  <h2>Enter the spider-verse</h2>
  <hr />
  <form on:submit|preventDefault={handleLogin}>
    <label>
      <span>Username</span>
      <input type="text" />
    </label>
    <label>
      <span>Password</span>
      <input type="password" />
    </label>
    <button type="submit"> LOGIN </button>
  </form>
</div>

<style>
  div {
    width: 100%;
    max-width: 480px;
    transition: 1s;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  input {
    min-width: 240px;
    padding: 0.5rem;
  }
</style>
