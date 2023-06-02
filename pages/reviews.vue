<template>
    <div>
        <div id="block-system-main" class="block block-system">
            <div class="block-inner">
                <div class="content">
                    <div class="view view-reviews-of-ros-bilet view-id-reviews_of_ros_bilet view-display-id-page columns-3 view-dom-id-e5e9e4dbf2e64669581d50db1294d00e">
                        <div class="view-content">
                            <div class="views-row views-row-1 views-row-odd views-row-first" v-for="review in reviews" :key="review.id">
                                <div class="views-field views-field-title">
                                    <span class="field-content">{{ review.name }}</span>
                                </div>
                                <div class="views-field views-field-body mt-2">
                                    <div class="field-content">{{ review.text }}</div>
                                </div>
                            </div>
                        </div>


                        <div class="item-list">
                            <ul class="pager">
                                <li class="pager-first first" v-if="pagination.page > 1">
                                    <a title="На первую страницу" :href="getPaginationLink(1)">« первая</a>
                                </li>
                                <li class="pager-previous" v-if="pagination.page > 1">
                                    <a title="На предыдущую страницу" :href="getPaginationLink(pagination.page - 1)">‹ предыдущая</a>
                                </li>
                                <li class="pager-item" v-for="pageNumber in pagination.pages" :key="pageNumber">
                                    <a :title="'На страницу номер ' + pageNumber" :href="getPaginationLink(pageNumber)">{{ pageNumber }}</a>
                                </li>
                                <li class="pager-next" v-if="pagination.page < pagination.pages">
                                    <a title="На следующую страницу" :href="getPaginationLink(pagination.page + 1)">следующая ›</a>
                                </li>
                                <li class="pager-last last" v-if="pagination.page < pagination.pages">
                                    <a title="На последнюю страницу" :href="getPaginationLink(pagination.pages)">последняя »</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            reviews: [],
            pagination: []
        }
    },

    async fetch() {
        await this.fetchReviews()
    },

    methods: {
        async fetchReviews() {
            let page = this.$route.query.page || 1
            const {data: response} = await this.$axios.get('/reviews?page=' + page)
            if(response.success) {
                this.reviews = response.data.reviews
                this.pagination = response.data.pagination // total, pages, page
                this.$router.push({query: {page: response.data.pagination.page}})
            }
        },


        getPaginationLink(page) {
            const baseLink = '/reviews'
            const queryPage = page > 1 ? { page } : {}
            return this.$router.resolve({ query: queryPage }).href
        }
    }

}

</script>



<style scoped>
.views-row.views-row-1.views-row-odd.views-row-first {
    margin: 10px 0;
}
</style>