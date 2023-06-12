<template>
    <div class="wrapper">
        <Layout-Header />
        <div class="container full-size-not-float">
            <div class="wide-inner two-sidebar">
                <div class="section">
                    <div id="content-box">
                        <div class="section">
                            <Widget />
                            <Nuxt />
                        </div>
                    </div>
                    <RightWidget />
                </div>
            </div>
        </div>
        <Layout-Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            ref: '',
        }
    },

    mounted() {
        this.ref = this.$route.query.ref;
        if (this.ref) {
            localStorage.setItem('ref', this.ref);
        }
    },
    async fetch() {
        this.ref = this.$route.query.ref;
        if (this.ref) {
            localStorage.setItem('ref', this.ref);
        }
    }
}
</script>