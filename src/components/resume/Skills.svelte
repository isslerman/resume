<script>
   export let title = 'title';
   export let perc = 40;
   export let showPerc = 1;
   let color = "green";
   if (perc < 50)
    color = "yellow";

</script>

<li>
  <div class="mb-1 text-base font-medium text-white">{title}</div>
  {#if showPerc}
  <div class="w-full bg-gray-200 rounded-full h-0.5 mb-4 dark:bg-gray-700">
    <div class="bg-gray-600 h-0.5 rounded-full dark:bg-{color}-300" style="width: {perc}%"></div>
  </div>
  {/if}
</li>