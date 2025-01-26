<script lang="ts">
  import type {PageData} from './$types';
  export let data: PageData;
</script>

<h1>Markdown Content</h1>
<pre>
    <code> {JSON.stringify(data.mdFiles, null, 2)}</code>
</pre>

<style>
  /* Add your styles here */
</style>

