<template>
  <v-card id="message">
    <h2 v-if="error.statusCode">{{ error.statusCode }}</h2>
    <h1>Something went wrong</h1>

    <v-row no-gutters>
      <v-col>
        <v-btn href="javascript:location.reload();" large block color="primary"
          >Try again</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn to="/" exact large block color="primary">Home</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    return {
      title: 'Error',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Something went wrong',
        },
      ],
    }
  },
}
</script>

<style media="screen" scoped>
#message video {
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}

#message {
  max-width: 360px;
  margin: 100px auto 16px;
  padding: 32px 24px 16px;
  border-radius: 3px;
}
#message h3 {
  font-weight: normal;
  font-size: 16px;
  margin: 16px 0 12px;
}
#message h2 {
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 8px;
}
#message h1 {
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 16px;
}
#message p {
  line-height: 140%;
  margin: 16px 0 24px;
  font-size: 14px;
}
#load {
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 13px;
}
</style>
