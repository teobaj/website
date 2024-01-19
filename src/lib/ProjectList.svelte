<script lang="ts">
    import { projectList } from "./projectList";


</script>
<div class="cards">
    {#each projectList as project }
        <div class="card" style={`background: ${project.style.secundaryColor}; border-color: ${project.style.primaryColor}`}>
            <h3 style={`color: ${project.style.primaryColor}`}>{project.name}</h3>
            <a href={project.url}>Visit</a>
        </div>
    {/each}
    

</div>

<style>
     .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    padding: 0.5rem;
  }

  @media only screen and (max-width: 600px){
    .cards {
      grid-template-columns: 1fr;

    }

  }
  .card {
    border: 1px solid;
  }
</style>