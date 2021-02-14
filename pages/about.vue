<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>About</h1>
        <div></div>
        <v-list>
          <v-list-item-group>
            <v-list-item
              href="https://www.facebook.com/UQArchaeologicalSociety/"
            >
              <v-list-item-icon>
                <v-icon large>{{ mdiFacebook }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  @UQArchaeologicalSociety
                </v-list-item-title>
                <v-list-item-subtitle>Facebook</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="my-2"></v-divider>
            <v-list-item href="mailto:uqarchsoc@gmail.com">
              <v-list-item-icon>
                <v-icon large>{{ mdiEmail }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>uqarchsoc@gmail.com</v-list-item-title>
                <v-list-item-subtitle>Email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="my-2"></v-divider>
            <v-list-item
              href="https://www.google.com/maps/dir/-27.4580505,153.0500812/-27.4971619,153.013381/@-27.4693336,152.9865828,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
            >
              <v-list-item-icon>
                <v-icon large>{{ mdiMapMarker }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  >The University of Queensland St Lucia, QLD, Australia
                  4067</v-list-item-title
                >
                <v-list-item-subtitle>Location</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <MapBox :lat="-27.497016" :lng="153.013395"></MapBox>
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
