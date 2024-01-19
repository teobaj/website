<script lang="ts">
  import { onMount } from "svelte";
    import ProjectList from "./ProjectList.svelte";

  let pageRef: HTMLDivElement;
  function startTransition(){
    pageRef.style.transform = "scale(1)";
    pageRef.style.opacity =  "1";

  } 
  onMount(() => {
    setTimeout(() => {
  startTransition()

    }, 1000)
  })

</script>

<div bind:this={pageRef} class="gradient-border wrapper">
  <div class="page">
    <header>
      <h2>Dashboard</h2>
    </header> 
    <ProjectList />
  </div>
</div>


<style>
 
  .wrapper {
    transform: scale(0.1);
    opacity: 0.1;
    transition: 1s;
    
  }

  header {
    padding: 1rem;
    background-color: #1a1a1a;
    border-bottom: 1px solid #6f6e6e;
  }
  h2 {
    margin: 0;
    text-align: start;
  }

  
</style>
