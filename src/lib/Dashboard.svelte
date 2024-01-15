<script lang="ts">
  import { onMount } from "svelte";

  let pageRef: HTMLDivElement;
  function startTransition(){
    pageRef.style.transform = "scale(1)";
    pageRef.style.opacity =  "1";

  } 
  onMount(() => {
    setTimeout(() => {
startTransition()

    }, 500)
  })

</script>

<div bind:this={pageRef} class="gradient-border wrapper">
  <div class="page">
    <div class="cards">
      <div class="card">
        <h2>Projects</h2>
        <button>Visit</button>
      </div>
      <div class="card">
        <h2>Projects</h2>
        <button>Visit</button>
      </div>
      <div class="card">
        <h2>Projects</h2>
        <button>Visit</button>
      </div>
      <div class="card">
        <h2>Projects</h2>
        <button>Visit</button>
      </div>
    </div>
  </div>
</div>


<style>
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }
  .wrapper {
    transform: scale(0.1);
    opacity: 0.1;
    transition: 1s;
  }
</style>
