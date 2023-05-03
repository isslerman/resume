<script>
   export let title = 'title';
   export let perc = 50;
</script>

<li>
  <div class="text-white text-sm mt-3">
    <span>{title}</span>
    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
      <div class="bg-sky-500 h-1.5 rounded-full" style="width: {perc}%" />
    </div>
  </div>
</li>