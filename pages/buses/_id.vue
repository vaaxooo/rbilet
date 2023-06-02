<template>
    <div v-if="flight && flight.carrier">
        <div class="region region-content">
            <div id="block-system-main" class="block block-system">
                <div class="block-inner">
                    <div class="content">
                        <div id="node-8744726" class="node node-route node-full clearfix">
                            <div class="content clearfix">
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
                                            <a href="https://ros-bilet.ru/raspisanie-avtobusov/kiev/moskva" title="расписание автобусов Киев - Москва" itemscope="" itemprop="item" itemtype="http://schema.org/Thing" itemid="https://ros-bilet.ru">
                                                <span itemprop="name">Расписание автобусов {{ flight.from }} - {{ flight.to }}</span>
                                            </a>
                                        </span>
                                        <span>→</span>
                                        <meta itemprop="position" content="1">
                                    </li>
                                    <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="breadcrumb">
                                        <span itemscope="" itemprop="item" itemtype="http://schema.org/Thing" itemid="#">
                                            <span itemprop="name"> 6:30 </span>
                                        </span>
                                        <meta itemprop="position" content="2">
                                    </li>
                                </ol>
                                <a name="about"></a>
                                <h1>Автобусный рейс {{ flight.from }} - {{ flight.to }} перевозчик {{ flight.carrier.name }}</h1>
                                <div id="tab-short_info_all" class="full-size">
                                    <div class="tline">
                                        <div id="st1">
                                            <div class="tab-striped">
                                                <div class="tline even">
                                                    <div class="one tap">Отправление</div>
                                                    <div class="two tap">
                                                        <div class="field field-name-field-time-of-departure field-type-timefield field-label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even">
                                                                    <div class="time-default"> {{ flight.time_departure }}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tline odd">
                                                    <div class="one tap">Прибытие</div>
                                                    <div class="two tap">
                                                        <div class="field field-name-field-time-of-arrival field-type-timefield field-label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even">
                                                                    <div class="time-default"> {{ flight.time_arrival }}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tline even">
                                                    <div class="one tap">Время в дороге</div>
                                                    <div class="two tap"> {{ flight.duration }} </div>
                                                </div>
                                                <div class="tline odd">
                                                    <div class="one tap">Частота рейса</div>
                                                    <div class="two tap">
                                                        <div class="field field-name-field-days-of-departure field-type-taxonomy-term-reference field-label-hidden clearfix">
                                                            <ul class="links">
                                                                <li class="taxonomy-term-reference-0">ежедневно</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="st2">
                                            <div class="inner">
                                                <div>Цена билета:</div>
                                                <div id="average_price">
                                                    <div class="field field-name-field-price field-type-number-float field-label-hidden">
                                                        <div class="field-items">
                                                            <div class="field-item even">{{ flight.price }} руб.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="st3">
                                            <a :href="'/order?flightId=' + flight.id + '&date=' + $route.query.date" rel="nofollow" class="btn_blue mobile_fixed">Забронировать</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-route_full_info" class="full-size">
                                    <a name="TPV"></a>
                                    <div class="tline">
                                        <div class="t-otkuda w50">
                                            <div class="h2-no-tag">Откуда</div>
                                            <div style="text-align: center;">
                                                <div class="bus-stantion-info-text">
                                                    {{ flight.from_full_address }}
                                                </div>
                                                <div class="view view-bus-stantion-info view-id-bus_stantion_info view-display-id-default view-dom-id-40b96b7bb9e588bf50dccbfe400595b6">
                                                    <div class="view-content">
                                                        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
                                                            <div class="views-field views-field-field-yandex-map">
                                                                <div class="field-content"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="t-kuda w50">
                                            <div class="h2-no-tag">Куда</div>
                                            <div style="text-align: center;">
                                                <div class="bus-stantion-info-text">
                                                    {{ flight.to_full_address }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tline">
                                        <a name="price_carriers"></a>
                                        <div class="t-ceny w50">
                                            <div class="inner not-full">
                                                <div class="h2-no-tag">Цены</div>
                                                <div class="tab-striped">
                                                    <div class="tline even">
                                                        <div class="one">Взрослый билет</div>
                                                        <div class="two">
                                                            <div class="field field-name-field-price field-type-number-float field-label-hidden">
                                                                <div class="field-items">
                                                                    <div class="field-item even">{{ flight.price }} руб.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="t-transport w50" v-if="flight.carrier">
                                            <div class="inner not-full">
                                                <div class="h2-no-tag">Транспорт</div>
                                                <div class="tab-striped">
                                                    <div class="tline even">
                                                        <div class="one">Перевозчик</div>
                                                        <div class="two">
                                                            <div class="view view-carriers-rate-info view-id-carriers_rate_info view-display-id-default view-dom-id-57dfff5360f3ff9a82f28b10e783a6c4">
                                                                <div class="view-content">
                                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
                                                                        <div class="views-field views-field-title">
                                                                            <span class="field-content">
                                                                                <a href="#">{{ flight.carrier.name }}</a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tline odd">
                                                        <div class="one">Автобусы</div>
                                                        <div class="two">
                                                            <div class="field field-name-field-bus-model field-type-taxonomy-term-reference field-label-hidden clearfix">
                                                                <ul class="links">
                                                                    <li class="taxonomy-term-reference-0">{{ flight.bus }}</li>
                                                                </ul>
                                                            </div>
                                                            <font size="1">
                                                                <div class="field field-name-field-comfort-in-bus field-type-taxonomy-term-reference field-label-hidden clearfix">
                                                                    <ul class="links">
                                                                        <li class="taxonomy-term-reference-0">дезинфекция салона</li>
                                                                        <li class="taxonomy-term-reference-1">индивидуальная система обдува</li>
                                                                        <li class="taxonomy-term-reference-2">индивидуальная система освещения</li>
                                                                        <li class="taxonomy-term-reference-3">предрейсовая чистка</li>
                                                                        <li class="taxonomy-term-reference-4">кондиционер</li>
                                                                        <li class="taxonomy-term-reference-5">телевизор</li>
                                                                        <li class="taxonomy-term-reference-6">мультимедийный комплекс</li>
                                                                        <li class="taxonomy-term-reference-7">комфортабельные сидения</li>
                                                                    </ul>
                                                                </div>
                                                            </font>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tline">
                                        <div></div>
                                        <div class="split"></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div class="full-size">
                                    <a name="type_reserved"></a>
                                    <div class="h2-no-tag">Доступные типы бронирования</div> Для данного рейса доступны следующие виды брони: <br>
                                    <br>
                                    <ol id="payment-metod-list">
                                        <li>Электронный билет - покупка билета с оплатой через интернет с помощью банковской карты. Электронный билет - это гарантия того, что Вы уедете.</li>
                                    </ol>
                                </div>
                                <div class="full-size">
                                    <a name="baggage"></a>
                                    <div class="h2-no-tag">Правила перевозки ручной клади и багажа</div>
                                    <div class="h3-no-tag">Требования к ручной клади</div>
                                    <div style="padding-left:35px;">
                                        <p>Пассажир имеет право провозить с собой бесплатно ручную кладь в количестве не более 1 места. Габариты: 60*40*20 см. Вес ручной клади не более 10 кг.</p>
                                    </div>
                                    <div class="h3-no-tag">Требования к багажу</div>
                                    <div style="padding-left:35px;">
                                        <p>Бесплатно на одного пассажира разрешается перевозить 2 единицы багажа, чтобы суммарный вес не превышал 30 кг. и параметры 100*50*80 см.</p>
                                    </div>
                                </div>
                                <div class="full-size">
                                    <a name="printout"></a>
                                    <div class="h2-no-tag">Нужно ли распечатывать билет?</div>
                                    <div style="padding-left:35px;"> Для посадки на данный рейс достаточно показать билет на экране телефона/планшета, а так же предоставить документ удостоверяющий личность, указанный при покупке билета. </div>
                                </div>
                                <div class="full-size">
                                    <a name="animals"></a>
                                    <div class="h2-no-tag">Правила перевозки животных</div>
                                    <div style="padding-left:35px;">
                                        <p>Допускается провоз в составе ручной клади животных, которые должны находиться в клетках с глухим дном. У животного должен быть намордник, поводок, все справки и документы согласно правилам пересечения государственной границы. Хозяин сидит на месте возле прохода, животное у окна. На животное приобретается билет равный 80% от цены полного билета. Животное обязано быть изолировано и под воздействием снотворного.</p>
                                    </div>
                                </div>
                            </div>
                            <br>
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
            flight: []
        }
    },
    async fetch() {
        await this.fetchFlight()
    },

    methods: {

        async fetchFlight() {
            const { data: response } = await this.$axios.get(`/flights/${this.$route.params.id}`)
            if(response.success) {
                console.log(response.data)
                this.flight = response.data
            }
        }

    }

}

</script>