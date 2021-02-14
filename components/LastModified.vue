<template>
  <client-only>
    <v-card v-if="lastModified" flat tile color="transparent">
      <v-card-text class="pb-0">Last Modified</v-card-text>
      <v-card-text class="pt-0">
        <span>{{ lastModified.format('MMM D, YYYY h:mm A') }}</span>
      </v-card-text>
    </v-card>
  </client-only>
</template>

<script>
import * as dayjs from 'dayjs'
export default {
  props: {
    utc: Boolean,
    interval: { type: Number, default: 60000 },
  },
  computed: {
    lastModified() {
      return dayjs(this.$config.DATE_GENERATED)
    },
  },
}
</script>
