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
        <div>
          <v-btn
            href="https://www.google.com/maps/dir/-27.4580505,153.0500812/-27.50166,152.98003/@-27.4717552,152.9714766,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
            large
            icon
          >
            <v-icon large>{{ mdiMapMarker }}</v-icon>
          </v-btn>
          UQ St Lucia Campus Brisbane, QLD, Australia
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <MapBox :lat="-27.50121" :lng="152.980043"></MapBox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiFacebook, mdiEmail, mdiMapMarker } from '@mdi/js'
export default {
  data() {
    return {
      mdiFacebook,
      mdiEmail,
      mdiMapMarker,
    }
  },
}
</script>
