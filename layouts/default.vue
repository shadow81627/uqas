<template>
  <v-app clipped-left>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      class="hidden-print-only"
      disable-resize-watcher
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-app-bar-nav-icon aria-label="menu" @click.stop="drawer = !drawer">
        <v-progress-circular
          v-if="loading"
          indeterminate
          size="18"
          width="2"
        ></v-progress-circular>
      </v-app-bar-nav-icon>
      <v-container fluid class="d-flex pa-0 align-center">
        <nuxt-link
          to="/"
          class="d-flex align-center text-decoration-none"
          aria-label="Home"
        >
          <img
            :src="`${$icon(24)}`"
            :srcset="`${$icon(24)} 1x, ${$icon(48)} 2x`"
            width="24"
            height="24"
            onerror="javascript:this.style.display = 'none'"
          />
          <v-toolbar-title class="ml-1 d-none d-sm-flex text--primary">
            {{ $config.APP_NAME }}</v-toolbar-title
          >
        </nuxt-link>
      </v-container>

      <v-spacer />
      <v-tabs class="hidden-sm-and-down" optional right>
        <v-tabs-slider></v-tabs-slider>
        <v-tab v-for="{ title, to } in items" :key="title" :to="to" text>
          {{ title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <nuxt style="min-height: 100vh"></nuxt>
      <v-footer>
        <v-container>
          <v-row no-gutters>
            <v-col cols="auto">
              <v-card flat color="transparent">
                <v-card-text>
                  <span>{{ $config.VERSION }}</span>
                  <span v-if="$config.COMMIT">{{
                    shortHash($config.COMMIT)
                  }}</span>
                </v-card-text>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col v-if="$config.DATE_GENERATED" cols="auto">
              <LastModified></LastModified>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import {
  mdiHome,
  mdiInformation,
  mdiWalletMembership,
  mdiCalendarBlank,
} from '@mdi/js'
export default {
  data() {
    return {
      drawer: false,
      loading: true,
      items: [
        {
          icon: mdiHome,
          title: 'Home',
          to: '/',
        },
        {
          icon: mdiInformation,
          title: 'About',
          to: '/about',
        },
        {
          icon: mdiWalletMembership,
          title: 'Membership',
          to: '/membership',
        },
        {
          icon: mdiCalendarBlank,
          title: 'Events',
          to: '/events',
        },
      ],
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.loading = false
    }
  },
  methods: {
    shortHash: (value) => (value ? value.substring(0, 7) : null),
  },
}
</script>
