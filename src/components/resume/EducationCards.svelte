<script>
  export let title = 'title';
  export let name = 'school name';
  export let link = '';
</script>

<li>
<div class="flex mt-4 text-black text-normal">
  <p><strong>{title}</strong>:
    {#if !link}
      {name}
    {:else}
       <a href="{link}" target="_blank" rel="noreferrer">{name}</a>
    {/if}
  </p>
</li>