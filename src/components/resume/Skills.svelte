<script>
   export let title;
   export let perc;
</script>

<li>
  <div class="text-white text-sm mt-2">
    <span>{title}</span>
    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
      <div class="bg-sky-500 h-1.5 rounded-full" style="width: {perc}%" />
    </div>
  </div>
</li>