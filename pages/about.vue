<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>About</h1>
        <div></div>
        <div>
          <v-btn
            href="https://www.facebook.com/UQArchaeologicalSociety/"
            icon
            large
          >
            <v-icon large>{{ mdiFacebook }}</v-icon>
          </v-btn>
          @UQArchaeologicalSociety
        </div>
        <div>
          <v-btn href="mailto:uqarchsoc@gmail.com" large icon>
            <v-icon large>{{ mdiEmail }}</v-icon>
          </v-btn>
          uqarchsoc@gmail.com
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiFacebook, mdiEmail } from '@mdi/js'
export default {
  data() {
    return {
      mdiFacebook,
      mdiEmail,
    }
  },
}
</script>
