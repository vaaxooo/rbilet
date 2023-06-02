<template>
    <div class="region region-content">
        <div id="block-system-main" class="block block-system">
            <div class="block-inner">
                <div class="content">
                    <script type="text/javascript" src="https://ros-bilet.ru/sites/all/themes/rosbilet/js/node--direction.js"></script>
                    <div id="node-53624" class="node node-direction node-full clearfix">
                        <div class="content clearfix" itemscope="" itemtype="http://schema.org/Product">
                            <ol itemscope="" itemtype="http://schema.org/BreadcrumbList" class="breadcrumbs no-mobile">
                                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="breadcrumb">
                                    <span>
                                        <a href="https://ros-bilet.ru" title="На главную страницу сайта Рос-Билет ру" itemscope="" itemprop="item" itemtype="http://schema.org/Thing" itemid="https://ros-bilet.ru">
                                            <span itemprop="name">Рос-Билет ру</span>
                                        </a>
                                    </span>
                                    <span>→</span>
                                    <meta itemprop="position" content="0">
                                </li>
                                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="breadcrumb">
                                    <span itemscope="" itemprop="item" itemtype="http://schema.org/Thing" itemid="#">
                                        <span itemprop="name">Расписание автобусов {{ $route.query.from }} - {{ $route.query.to }}</span>
                                    </span>
                                    <meta itemprop="position" content="1">
                                </li>
                                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="breadcrumb">
                                    <span itemscope="" itemprop="item" itemtype="http://schema.org/Thing" itemid="#">
                                        <meta itemprop="name" content="✅">
                                    </span>
                                    <meta itemprop="position" content="2">
                                </li>
                            </ol>
                            <h1 itemprop="name">{{ $route.query.from }} - {{ $route.query.to }}, {{ $route.query.date }}</h1>

                            <br>
                            <div class="view view-direction-list-in-data-departure view-id-direction_list_in_data_departure view-display-id-default schedule view-dom-id-81b2590788e60786959dfe903db30ece">
                                <div class="view-content">
                                    <table class="views-table cols-9">
                                        <thead>
                                            <tr>
                                                <th class="views-field views-field-counter"> № </th>
                                                <th class="views-field views-field-nothing"> Откуда </th>
                                                <th class="views-field views-field-field-time-of-departure"> Отправление </th>
                                                <th class="views-field views-field-nothing-1"> Куда </th>
                                                <th class="views-field views-field-field-time-of-arrival"> Прибытие </th>
                                                <th class="views-field views-field-php-6"> Цена </th>
                                                <th class="views-field views-field-path"> О рейсе </th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="flights && flights.length > 0">
                                            <tr class="odd provider-nobody-no-set views-row-first views-row-last" v-for="flight in flights" :key="flight.id">
                                                <td class="views-field views-field-counter"> {{ flight.id }} </td>
                                                <td class="views-field views-field-nothing">
                                                    <div class="tab-big"></div>
                                                    <a href="#">{{ flight.from_full_address }}</a>
                                                </td>
                                                <td class="views-field views-field-field-time-of-departure">
                                                    <div class="time-default">{{ flight.time_departure }}</div>
                                                    <div class="days_of_departure">ежедневно</div>
                                                </td>
                                                <td class="views-field views-field-nothing-1">
                                                    <div class="tab-big"></div>
                                                    <a href="#">{{ flight.to_full_address }}</a>
                                                </td>
                                                <td class="views-field views-field-field-time-of-arrival">
                                                    <div class="time-default"> {{ flight.time_arrival }}</div>
                                                </td>
                                                <td class="views-field views-field-php-6">
                                                    <div class="tab-big">{{ flight.price }} руб.</div>
                                                </td>
                                                <td class="views-field views-field-path">
                                                    <div class="path_to_route">
                                                        <a :href="'/buses/' + flight.id + '?date=' + $route.query.date">Подробно о рейсе&gt;&gt;</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr>
                                                <td colspan="7">Нет рейсов</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Buses',
    data() {
        return {
            flights: [],
        }
    },
    async fetch() {
        await this.fetchFlight()
        // if(!this.$route.query.from || !this.$route.query.to || !this.$route.query.date) {
        //     this.$router.push({ name: 'index' })
        // }
    },
    methods: {
        async fetchFlight() {
            const { data: response } = await this.$axios.get('/flights', {
                params: {
                    from: this.$route.query.from,
                    to: this.$route.query.to,
                    date: this.$route.query.date,
                    page: this.$route.query.page || 1,
                }
            })
            if(response.success) {
                this.flights = response.data.flights
                this.pagination = response.data.pagination
            }

        }
    }
}

</script>