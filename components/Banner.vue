<template>
  <v-container class="pa-0 hidden-print-only" fluid>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" align-self="center">
        <v-card style="position: relative" flat dark tile>
          <nuxt-picture
            :src="src"
            :width="width"
            :height="height"
            :alt="alt"
            quality="70"
            class="banner-image"
          ></nuxt-picture>
          <slot>
            <v-container
              class="banner-text fill-height align-items-end justify-start"
              fluid
              :style="{
                'background-image': `linear-gradient(${
                  heading || subheading ? gradient : null
                })`,
              }"
            >
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <h1 v-if="heading" class="mb-4 text-shadow">
                    {{ heading }}
                  </h1>
                  <h2 v-if="subheading" class="subheading text-shadow">
                    {{ subheading }}
                  </h2>
                </v-col>
              </v-row>
            </v-container>
          </slot>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: null },
    subheading: { type: String, default: null },
    alt: { type: String, default: '' },
    gradient: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)',
    },
    width: { type: [Number, String], default: 1200 },
    height: { type: [Number, String], default: 630 },
    src: {
      type: String,
      default: '/cover.jpg',
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.$config.BASE_URL}${this.$img(this.src, {
            width: this.width,
            height: this.height,
          })}`,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: this.width,
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: this.height,
        },
      ],
    }
  },
}
</script>

<style>
picture.banner-image img {
  width: 100%;
  height: auto;
  max-height: 630px;
  object-fit: cover;
  display: block;
}

.banner-text {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
