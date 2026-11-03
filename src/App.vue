<script setup>
import { ref, onMounted } from 'vue'
const feed = ref(null), err = ref(''), stale = ref(false), ping = ref('')
onMounted(async () => {
  try {
    const r = await fetch('https://raw.githubusercontent.com/junghh21/std-b-data/data/feed.json', { cache: 'no-cache' })
    feed.value = await r.json()
    stale.value = (Date.now() - Date.parse(feed.value.generated_at)) / 36e5 > 12
  } catch (e) { err.value = String(e) }
  try { ping.value = JSON.stringify(await (await fetch('/api/ping')).json()) } catch (e) { ping.value = 'ping failed' }
})
</script>
<template>
  <h1>std-b</h1>
  <pre v-if="feed">{{ feed }}</pre><p v-if="stale">STALE</p><p v-if="err">{{ err }}</p>
  <p>api: {{ ping }}</p>
</template>
