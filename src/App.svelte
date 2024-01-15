<script lang="ts">
  import { fade } from 'svelte/transition';
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import transitionVideo from "/transition_1.mp4";
  import LoginForm from "./lib/LoginForm.svelte";
  import Dashboard from "./lib/Dashboard.svelte";
  let videoRef: HTMLVideoElement;

  let isLoggedIn:boolean = false;

  function onSubmit() {
    
    videoRef.play();
    setTimeout(() => {

    isLoggedIn = true;
    },1000)
  }
</script>
  
  <video bind:this={videoRef} muted webkit-playsinline playsinline>
    <source src={transitionVideo} />
  </video>
<main>
   
  <div class="content">
    {#if isLoggedIn}
      <Dashboard  />
    {:else}
        <LoginForm  on:submit={onSubmit} />
    {/if}
  </div>
</main>

<style>
  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  main {
    width: 100%;
    height: 100%;
  }
 .content {
    display: grid;
    place-items: center;
  }
</style>
