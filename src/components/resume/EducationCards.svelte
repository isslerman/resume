<script>
  export let title;
  export let year;
  export let name;
</script>

<div class="flex mt-4 text-black">
  <div class="w-1/2 text-normal font-bold">{title}</div>
  <div class="text-sky-700 w-1/2 text-sm font-bold text-right">{year}</div>
</div>
<div class="w-full mx-2 text-black">{name}</div>