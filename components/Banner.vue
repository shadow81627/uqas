<template>
  <v-container class="pa-0 hidden-print-only" fluid>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" align-self="center">
        <v-card :color="color" flat dark tile>
          <v-img
            :src="_src"
            max-height="500"
            sizes="(max-width: 1785px) 100vw, 1785px"
            :gradient="heading || subheading ? gradient : undefined"
          >
            <slot>
              <v-container
                class="fill-height align-items-end justify-start"
                fluid
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
          </v-img>
        </v-card>
        {{ _srcset }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: null },
    subheading: { type: String, default: null },
    gradient: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)',
    },
    height: { type: [Number, String], default: 500 },
    color: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      default:
        'v1613283666/uqas/125256336_1031690273909980_768163017353550708_o_2_a0krf1',
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.$config.BASE_URL}${this.cover}`,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: 1200,
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: 600,
        },
      ],
    }
  },
  computed: {
    _src() {
      return this.$cloudinary.image.url(this.src, {
        width: 'auto',
        height: 500,
        dpr: 'auto',
        responsive: true,
        crop: 'scale',
      })
    },
    _srcset() {
      const urls = this.$cloudinary.image.url(this.src, {
        width: 1785,
        crop: 'scale',
      })
      return urls
    },
    cover() {
      return this.$cloudinary.image.url(this.src, {
        width: 1200,
        height: 600,
        crop: 'scale',
        format: 'jpg',
      })
    },
  },
}
</script>
