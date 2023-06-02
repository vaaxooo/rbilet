<template>
    <div>
        <div class="order">
            <form action="/order/step2.php" method="post" id="form-order">
                <input type="hidden" value="1" name="passager-count" id="passager-count">
                <input type="hidden" value="0" name="passager-count-in-sheme" id="passager-count-in-sheme">
                <input type="hidden" value="8744726" name="route_nid" id="route_nid">
                <input type="hidden" value="0" name="form-send" id="form-send">
                <input type="hidden" value="0" name="form-childhood" id="form-childhood">
                <input type="hidden" value="0" name="unqualified_quota" id="unqualified_quota">
                <div class="view view-for-order-page view-id-for_order_page view-display-id-default view-dom-id-505915a48842e8ebbf17abf5434583f0">
                    <div class="view-content">
                        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
                            <div class="views-field views-field-nothing">
                                <span class="field-content">
                                    <table id="info_route">
                                        <tbody>
                                            <tr class="city_name">
                                                <td>
                                                    {{ flight.from }} 
                                                    {{ flight.time_departure }}
                                                </td>
                                                <td class="split_city"> — </td>
                                                <td>
                                                    {{ flight.to }} 
                                                    {{ flight.time_arrival }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{{ flight.from_full_address }}</td>
                                                <td></td>
                                                <td>{{ flight.to_full_address }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </span>
                            </div>
                            <div class="views-field views-field-php">        <span class="field-content"></span>  </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" value="Киев" name="field_city" id="field_city">
                <input type="hidden" value="1563" name="field_city_tid" id="field_city_tid">
                <input type="hidden" value="Москва" name="field_city_arrival" id="field_city_arrival">
                <input type="hidden" value="6058" name="field_city_arrival_tid" id="field_city_arrival_tid">
                Дата отправления <br>
                {{ $route.query.date || 'Не выбрана' }}
                <br><br><br>
                <div id="full_screen" class="invisible">
                    <div class="full_screen-top">
                        <a class="full_screen-close" href="javascript:void(0);"></a>
                        Выберите места на схеме
                    </div>
                    <div class="full_screen-center">
                        <div class="shema_place">
                            <div class="floor0"> </div>
                            <div class="floor1"> </div>
                        </div>
                    </div>
                    <div class="full_screen-bottom">
                        <input class="full_screen-button" type="button" value="Подтвердить выбор">
                    </div>
                </div>
                <h2>Заполните данные пассажиров</h2>
                <div class="passenger full-size">
                    <div id="passenger1" class="passenger-item full-size">
                        <script>const savedPassengerPropertyTagConfigs = [
                            {
                              prop: 'field_second_name',
                              name: 'input',
                              class: 'field-second-name'
                            },
                            {
                              prop: 'field_first_name',
                              name: 'input',
                              class: 'field-first-name'
                            },
                            {
                              prop: 'field_patronymic',
                              name: 'input',
                              class: 'field-patronymic'
                            },
                            {
                              prop: 'field_date_of_birth',
                              name: 'text_date',
                              class: 'edit-field-date-of-birth'
                            },
                            {
                              prop: 'field_gender',
                              name: 'select',
                              class: 'field_gender'
                            },
                            {
                              prop: 'field_document',
                              name: 'select',
                              class: 'field-document'
                            },
                            {
                              prop: 'field_citizenship',
                              name: 'select',
                              class: 'field_citizenship'
                            },
                            {
                              prop: 'field_document_number',
                              name: 'input',
                              class: 'field-document-number'
                            }
                            ];
                            let onPassengerDataSavedPassengerChoice = (clickEvent) => {
                            let passenger = clickEvent.target.closest('.passenger-item');
                            if (!passenger) return;
                            let passengerData = passenger.querySelector('.passenger-data');
                            if (!passengerData) return;
                            let currentDataPassengerTitle = passengerData.getAttribute('data-passenger-title');
                            currentDataPassengerTitle && setEnableSavedPassenger(currentDataPassengerTitle);
                            passengerData.setAttribute('data-passenger-title', clickEvent.detail.savedPassenger.title);
                            setDisabledSavedPassenger(clickEvent.detail.savedPassenger.title);
                            for (let prop in clickEvent.detail.savedPassenger) {
                              const propTagConfig = savedPassengerPropertyTagConfigs.find(tagConfig => prop === tagConfig.prop);
                              if (!propTagConfig) continue;
                              const propTag = passengerData.querySelector('.' + propTagConfig.class);
                              if (!propTag) continue;
                              switch (propTagConfig.name) {
                                case 'input':
                                  propTag.value = clickEvent.detail.savedPassenger[prop];
                                  propTag.style.color = '#000000';
                                  break;
                                case 'text_date':
                                  let dateISO = clickEvent.detail.savedPassenger[prop];
                                  propTag.value = `${dateISO.substring(8, 10)}.${dateISO.substring(5, 7)}.${dateISO.substring(0, 4)}`;
                                  propTag.style.color = '#000000';
                                  break;
                                case 'select':
                                  if (typeof clickEvent.detail.savedPassenger[prop + '_name'] === 'undefined') break;
                                  let options = propTag.querySelectorAll('option');
                                  if (!options) break;
                                  options.forEach(option => {
                                    if (option.innerText === clickEvent.detail.savedPassenger[prop + '_name']) {
                                      propTag.value = option.value;
                                    }
                                  });
                                  break;
                              }
                            }
                            };
                            document.addEventListener('savedPassengerChoice', onPassengerDataSavedPassengerChoice);
                            const onAddPassengerData = tag => {
                            const savedPassengerElementClasses = savedPassengerPropertyTagConfigs.map(tagConfig => tagConfig.class);
                            const onChangeSavedPassengerData = event => {
                              if ((event.type === 'change' &&
                                  Array.from(event.target.classList).some(item => savedPassengerElementClasses.indexOf(item) !== -1)) ||
                                (event.type === 'click' && event.target.classList.contains('input-clear')) ||
                                event.type === 'passengerWithSavedDataDelete'
                              ) {
                                let dataPassengerTitle = tag.getAttribute('data-passenger-title');
                                if (dataPassengerTitle) {
                                  if(event.type === 'change' && event.target.tagName === 'INPUT') { // Данные изменились после автокомплита
                                    let propertyConfig;
                                    for (let targetClass of Array.from(event.target.classList)) {
                                      propertyConfig = savedPassengerPropertyTagConfigs.find((item) =>
                                        item.class === targetClass
                                      );
                                      if (propertyConfig) {
                                        break;
                                      }
                                    }
                                    if (propertyConfig) {
                                      savedPassenger = savedPassengers.find(item => item.title === dataPassengerTitle);
                                      if (savedPassenger && savedPassenger[propertyConfig.prop] === event.target.value) {
                                        return;
                                      }
                                    }
                                  }
                                  tag.removeAttribute('data-passenger-title');
                                  setEnableSavedPassenger(dataPassengerTitle);
                                }
                              }
                            };
                            tag.addEventListener('change', onChangeSavedPassengerData);
                            tag.addEventListener('click', onChangeSavedPassengerData);
                            tag.addEventListener('passengerWithSavedDataDelete', onChangeSavedPassengerData);
                            };
                        </script>
                        <div class="passenger-data" data-add-tag="onAddPassengerData">
                            <div class="tap place invisible">
                                <div class="leib">Место</div>
                                <select class="field-seat-on-the-bus" name="field-seat-on-the-bus[0]" id="field-seat-on-the-bus[0]" tabindex="2">
                                </select>
                            </div>
                            <div class="tap second-name">
                                <div class="leib">Фамилия</div>
                                <input type="text" class="field-second-name" autocomplete="off" name="field-second-name[0]" id="field-second-name[0]" tabindex="3" v-model="order.lastname">
                                <a href="javascript:void(0)" class="input-clear">X</a>
                            </div>
                            <div class="tap first-name">
                                <div class="leib">Имя</div>
                                <input type="text" class="field-first-name" name="field-first-name[0]" id="field-first-name[0]" tabindex="4" v-model="order.firstname">
                                <a href="javascript:void(0)" class="input-clear">X</a>
                            </div>
                            <div class="tap patronymic">
                                <div class="leib">Отчество</div>
                                <input type="text" class="field-patronymic" name="field-patronymic[0]" id="field-patronymic[0]" tabindex="5" v-model="order.surname">
                                <a href="javascript:void(0)" class="input-clear">X</a>
                            </div>
                            <div class="tap date-of-birth">
                                <div class="leib">Дата рождения</div>
                                <input type="text" id="edit-field-date-of-birth-und-0-value-datepicker-popup-2" class="edit-field-date-of-birth" name="field_date_of_birth[0]" onfocus="if(this.value=='дд.мм.гггг') this.value='';" onblur="if(!this.value) this.value='дд.мм.гггг';" tabindex="6" placeholder="__.__.____" maxlength="10" v-model="order.date_of_birth">
                                <a href="javascript:void(0)" class="input-clear">X</a>
                            </div>
                            <div class="tap gender">
                                <div class="leib">Пол</div>
                                <select class="field_gender" name="field_gender[0]" id="field_gender[0]" tabindex="7" v-model="order.gender">
                                    <option value="1">М</option>
                                    <option value="0">Ж</option>
                                </select>
                            </div>
                            <div class="tap document">
                                <div class="leib">Документ</div>
                                <select class="field-document" name="field-document[0]" id="field-document[0]" tabindex="8" v-model="order.document">
                                    <option value="паспорт" selected="selected">паспорт</option>
                                    <option value="заграничный паспорт">заграничный паспорт</option>
                                    <option value="свидетельство о рождении">свидетельство о рождении</option>
                                    <option value="удостоверение военнослужащего">удостоверение военнослужащего
                                    </option>
                                    <option value="военный билет">военный билет</option>
                                    <option value="справка об утере паспорта">справка об утере паспорта</option>
                                    <option value="другой документ №">другой документ №</option>
                                </select>
                            </div>
                            <div class="tap citizenship">
                                <div class="leib">Гражданство</div>
                                <select class="field_citizenship" name="field_citizenship[0]" id="field_citizenship[0]" tabindex="9" v-model="order.nationality">
                                    <option value="6613" selected="selected">Россия</option>
                                    <option value="6614">Украина</option>
                                    <option value="6615">Беларусь</option>
                                    <option value="6683">Грузия</option>
                                    <option value="6633">Армения</option>
                                    <option value="6616">Абхазия</option>
                                    <option value="6617">Австралия</option>
                                    <option value="6618">Австрия</option>
                                    <option value="6619">Азербайджан</option>
                                    <option value="6620">Аландские острова</option>
                                    <option value="6621">Албания</option>
                                    <option value="6622">Алжир</option>
                                    <option value="6623">Американские Самоа</option>
                                    <option value="6624">Ангвилла</option>
                                    <option value="6625">Ангилья</option>
                                    <option value="6626">Ангола</option>
                                    <option value="6627">Андорра</option>
                                    <option value="6628">Антарктида</option>
                                    <option value="6629">Антарктика</option>
                                    <option value="6630">Антигуа и Барбуда</option>
                                    <option value="6631">Аомынь</option>
                                    <option value="6632">Аргентина</option>
                                    <option value="6634">Аруба</option>
                                    <option value="6635">Афганистан</option>
                                    <option value="6636">Багамы</option>
                                    <option value="6637">Бангладеш</option>
                                    <option value="6638">Барбадос</option>
                                    <option value="6639">Бахрейн</option>
                                    <option value="6640">Белиз</option>
                                    <option value="6641">Бельгия</option>
                                    <option value="6642">Бенин</option>
                                    <option value="6643">Бермуды</option>
                                    <option value="6644">Болгария</option>
                                    <option value="6645">Боливия</option>
                                    <option value="6646">Бонайре</option>
                                    <option value="6648">Босния и Герцеговина</option>
                                    <option value="6649">Ботсвана</option>
                                    <option value="6650">Бразилия</option>
                                    <option value="6651">Британская территория в Индийском
                                        океане
                                    </option>
                                    <option value="6653">Бруней Даруссалам</option>
                                    <option value="6654">Буркина-Фасо</option>
                                    <option value="6655">Бурунди</option>
                                    <option value="6656">Бутан</option>
                                    <option value="6657">Вануату</option>
                                    <option value="6658">Ватикан</option>
                                    <option value="6659">Великобритания</option>
                                    <option value="6660">Венгрия</option>
                                    <option value="6661">Венесуэла</option>
                                    <option value="6662">Виргинские острова (Британия)
                                    </option>
                                    <option value="6663">Виргинские острова (США)</option>
                                    <option value="6664">Восточный Тимор</option>
                                    <option value="6665">Вьетнам</option>
                                    <option value="6666">Габон</option>
                                    <option value="6668">Гаити</option>
                                    <option value="6667">Гайана</option>
                                    <option value="6669">Гамбия</option>
                                    <option value="6670">Гана</option>
                                    <option value="6671">Гваделупа</option>
                                    <option value="6672">Гватемала</option>
                                    <option value="6673">Гвинея</option>
                                    <option value="6674">Гвинея-Бисау</option>
                                    <option value="6675">Германия</option>
                                    <option value="6676">Гернси</option>
                                    <option value="6677">Гибралтар</option>
                                    <option value="6678">Гондурас</option>
                                    <option value="6679">Гонконг</option>
                                    <option value="6680">Гренада</option>
                                    <option value="6681">Гренландия</option>
                                    <option value="6682">Греция</option>
                                    <option value="6684">Гуам</option>
                                    <option value="6685">Дания</option>
                                    <option value="6686">Демократическая Республика Конго
                                    </option>
                                    <option value="6687">Джерси</option>
                                    <option value="6688">Джибути</option>
                                    <option value="6689">Доминика</option>
                                    <option value="6690">Доминиканская республика</option>
                                    <option value="6691">Египет</option>
                                    <option value="6692">Замбия</option>
                                    <option value="6693">Западная Сахара</option>
                                    <option value="6694">Зимбабве</option>
                                    <option value="6696">Израиль</option>
                                    <option value="6697">Индия</option>
                                    <option value="6698">Индонезия</option>
                                    <option value="6699">Иордания</option>
                                    <option value="6700">Ирак</option>
                                    <option value="6701">Иран</option>
                                    <option value="6702">Ирландия</option>
                                    <option value="6703">Исландия</option>
                                    <option value="6704">Испания</option>
                                    <option value="6705">Италия</option>
                                    <option value="6695">Йемен</option>
                                    <option value="6706">Кабо-Верде</option>
                                    <option value="6707">Казахстан</option>
                                    <option value="6708">Каймановы острова</option>
                                    <option value="6709">Камбоджа</option>
                                    <option value="6710">Камерун</option>
                                    <option value="6711">Канада</option>
                                    <option value="6712">Катар</option>
                                    <option value="6713">Кения</option>
                                    <option value="6714">Кипр</option>
                                    <option value="6715">Киргизия</option>
                                    <option value="6716">Кирибати</option>
                                    <option value="6717">Китай</option>
                                    <option value="6718">Кокосовые острова</option>
                                    <option value="6719">Колумбия</option>
                                    <option value="6720">Коморские острова</option>
                                    <option value="6721">Конго</option>
                                    <option value="6722">Корейская Народно-Демократическая
                                        Республика
                                    </option>
                                    <option value="6723">Коста-Рика</option>
                                    <option value="6724">Кот-д Ивуар</option>
                                    <option value="6725">Куба</option>
                                    <option value="6726">Кувейт</option>
                                    <option value="6727">Кыргызстан</option>
                                    <option value="6728">Кюрасао</option>
                                    <option value="6729">Лаосская Народно-Демократическая
                                        Республика
                                    </option>
                                    <option value="6730">Латвия</option>
                                    <option value="6731">Лесото</option>
                                    <option value="6732">Либерия</option>
                                    <option value="6733">Ливан</option>
                                    <option value="6734">Ливия</option>
                                    <option value="6735">Литва</option>
                                    <option value="6736">Лихтенштейн</option>
                                    <option value="6737">Люксембург</option>
                                    <option value="6738">Маврикий</option>
                                    <option value="6739">Мавритания</option>
                                    <option value="6740">Мадагаскар</option>
                                    <option value="6741">Майотта</option>
                                    <option value="6742">Макао</option>
                                    <option value="6743">Малави</option>
                                    <option value="6744">Малайзия</option>
                                    <option value="6745">Мали</option>
                                    <option value="6746">Мальдивы</option>
                                    <option value="6747">Мальта</option>
                                    <option value="6748">Марокко</option>
                                    <option value="6749">Мартиника</option>
                                    <option value="6750">Маршалловы острова</option>
                                    <option value="6751">Мексика</option>
                                    <option value="6752">Мозамбик</option>
                                    <option value="6753">Молдавия</option>
                                    <option value="6754">Монако</option>
                                    <option value="6755">Монголия</option>
                                    <option value="6756">Монсеррат</option>
                                    <option value="6757">Мьянма</option>
                                    <option value="6758">Намибия</option>
                                    <option value="6759">Науру</option>
                                    <option value="6760">Непал</option>
                                    <option value="6761">Нигер</option>
                                    <option value="6762">Нигерия</option>
                                    <option value="6763">Нидерланды</option>
                                    <option value="6764">Никарагуа</option>
                                    <option value="6765">Ниуэ</option>
                                    <option value="6766">Новая Зеландия</option>
                                    <option value="6767">Новая Каледония</option>
                                    <option value="6768">Норвегия</option>
                                    <option value="6770">Объединённые Арабские Эмираты
                                    </option>
                                    <option value="6771">Оман</option>
                                    <option value="6772">Остров Буве</option>
                                    <option value="6777">Остров Вознесения и
                                        Тристан-да-Кунья
                                    </option>
                                    <option value="6773">Остров Мэн</option>
                                    <option value="6774">Остров Норфолк</option>
                                    <option value="6775">Остров Рождества</option>
                                    <option value="6776">Остров Святой Елены</option>
                                    <option value="6778">Остров Херд и острова МакДональд
                                    </option>
                                    <option value="6779">Острова Кука</option>
                                    <option value="6780">Острова северной Марианы</option>
                                    <option value="6781">Острова Туркс и Каикос</option>
                                    <option value="6782">Пакистан</option>
                                    <option value="6783">Палау</option>
                                    <option value="6784">Палестина</option>
                                    <option value="6785">Панама</option>
                                    <option value="6786">Папуа-Новая Гвинея</option>
                                    <option value="6787">Парагвай</option>
                                    <option value="6788">Перу</option>
                                    <option value="6789">Питкэрн</option>
                                    <option value="6790">Польша</option>
                                    <option value="6791">Португалия</option>
                                    <option value="6792">Пуэрто-Рико</option>
                                    <option value="6793">Республика Корея</option>
                                    <option value="6794">Республика Македония</option>
                                    <option value="6795">Республика Молдова</option>
                                    <option value="6796">Реюньон</option>
                                    <option value="6797">Руанда</option>
                                    <option value="6798">Румыния</option>
                                    <option value="6799">Сальвадор</option>
                                    <option value="6800">Самоа</option>
                                    <option value="6801">Сан-Марино</option>
                                    <option value="6802">Сан-Томе и Принсипи</option>
                                    <option value="6803">Саудовская Аравия</option>
                                    <option value="6804">Свазиленд</option>
                                    <option value="6805">Сейшельские Острова</option>
                                    <option value="6806">Сен-Бартельми</option>
                                    <option value="6808">Сен-Мартен (Франция)</option>
                                    <option value="6809">Сен-Пьер и Микелон</option>
                                    <option value="6807">Сенегал</option>
                                    <option value="6810">Сент-Винсент и Гренадины</option>
                                    <option value="6811">Сент-Китс и Невис</option>
                                    <option value="6812">Сент-Люсия</option>
                                    <option value="6813">Сербия</option>
                                    <option value="6814">Сингапур</option>
                                    <option value="6815">Синт-Мартен (голландская часть)
                                    </option>
                                    <option value="6647">Синт-Эстатиус и Саба</option>
                                    <option value="6816">Сирийская Арабская Республика
                                    </option>
                                    <option value="6817">Сирия</option>
                                    <option value="6818">Словакия</option>
                                    <option value="6819">Словения</option>
                                    <option value="6820">Соединённое Королевство</option>
                                    <option value="6821">Соединенные штаты Малых Удаленных
                                        островов
                                    </option>
                                    <option value="6822">Соломоновы Острова</option>
                                    <option value="6823">Сомали</option>
                                    <option value="6824">Судан</option>
                                    <option value="6825">Суринам</option>
                                    <option value="6826">США</option>
                                    <option value="6827">Сьерра-Леоне</option>
                                    <option value="6828">Таджикистан</option>
                                    <option value="6830">Таиланд</option>
                                    <option value="6829">Тайвань</option>
                                    <option value="6831">Танзания</option>
                                    <option value="6832">Того</option>
                                    <option value="6833">Токелау</option>
                                    <option value="6834">Тонга</option>
                                    <option value="6835">Тринидад и Тобаго</option>
                                    <option value="6836">Тувалу</option>
                                    <option value="6837">Тунис</option>
                                    <option value="6838">Туркменистан</option>
                                    <option value="6839">Туркмения</option>
                                    <option value="6840">Турция</option>
                                    <option value="6841">Уганда</option>
                                    <option value="6842">Узбекистан</option>
                                    <option value="6843">Уоллес и Футана</option>
                                    <option value="6844">Уругвай</option>
                                    <option value="6845">Фарерские острова</option>
                                    <option value="6846">Федеративные Штаты Микронезии
                                    </option>
                                    <option value="6847">Фиджи</option>
                                    <option value="6848">Филиппины</option>
                                    <option value="6849">Финляндия</option>
                                    <option value="6850">Фолклендские (Мальвинские)
                                        острова
                                    </option>
                                    <option value="6851">Франция</option>
                                    <option value="6852">Французская Гвиана</option>
                                    <option value="6853">Французская Полинезия</option>
                                    <option value="6854">Французские южные территории
                                    </option>
                                    <option value="6855">Хорватия</option>
                                    <option value="6856">Центрально-африканская республика
                                    </option>
                                    <option value="6857">Чад</option>
                                    <option value="6858">Черногория</option>
                                    <option value="6859">Чехия</option>
                                    <option value="6860">Чешская Республика</option>
                                    <option value="6861">Чили</option>
                                    <option value="6862">Швейцария</option>
                                    <option value="6863">Швеция</option>
                                    <option value="6864">Шпицберген и Ян-Майен</option>
                                    <option value="6865">Шри-Ланка</option>
                                    <option value="6866">Эквадор</option>
                                    <option value="6867">Экваториальная Гвинея</option>
                                    <option value="6868">Эритрея</option>
                                    <option value="6869">Эстония</option>
                                    <option value="6870">Эфиопия</option>
                                    <option value="6871">Южная Африка</option>
                                    <option value="6872">Южная Джорджия и Южные Сандвичевы
                                        острова
                                    </option>
                                    <option value="6873">Южная Корея</option>
                                    <option value="6874">Южная Осетия</option>
                                    <option value="6875">Южный Судан</option>
                                    <option value="6876">Ямайка</option>
                                    <option value="6877">Япония</option>
                                </select>
                            </div>
                            <div class="tap document-number">
                                <div class="leib">Серия и номер</div>
                                <input type="text" class="field-document-number" name="field-document-number[0]" id="field-document-number[0]" value="1234 123456" onfocus="if(this.value=='1234 123456') this.value='';" onblur="if(!this.value) this.value='1234 123456';" tabindex="10" v-model="order.document_number">
                                <a href="javascript:void(0)" class="input-clear">X</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <br><br>
            <h2>Выберите тип бронирования</h2>
            Для данного рейса доступны следующие виды брони:<br><br>
            <ol id="payment-metod-list">
                <li class="payment_method_2636 ">
                    <input type="radio" value="fullpayment" checked="" name="payment_method" tabindex="64" v-model="order.payment_method">Электронный билет -
                    покупка билета с оплатой через интернет с помощью банковской карты.
                    Электронный билет - это гарантия того, что Вы уедете.
                </li>
                <li class="payment_method_2637">
                    <input type="radio" value="prepayment" name="payment_method" tabindex="65" v-model="order.payment_method">Частичная
                    предоплата - задаток в размере 10-20% от стоимость билета
                    оплачивается через интернет с помощью банковской карты, оставшаяся
                    часть оплачиваются при посадке. Бронь с частичной предоплатой - это
                    гарантия того, что Вы уедете.
                </li>
            </ol>
        </div>
        <div class="order">
            <br><br>
            <h2>Укажите контактные данные</h2>
            <div class="full-size">
                <div class="tap email">
                    <div class="leib">Электронная почта</div>
                    <input type="email" name="email" value="example@yandex.ru" id="e-mail" v-model="order.email" onfocus="if(this.value=='example@yandex.ru') this.value='';" onblur="if(!this.value) this.value='example@yandex.ru';" tabindex="68" style="color: rgb(127, 127, 127);">
                    <a href="javascript:void(0)" class="input-clear">X</a>
                </div>
                <div class="tap phone">
                    <div class="leib">Телефон</div>
                    <input type="text" value="71234567890" class="phone" name="phone" id="phone" v-model="order.phone" onfocus="if(this.value=='71234567890') this.value='';" onblur="if(!this.value) this.value='71234567890';" tabindex="69" style="color: rgb(127, 127, 127);">
                    <a href="javascript:void(0)" class="input-clear">X</a>
                </div>
            </div>
            <br>
            <div id="offer">
                Нажимая кнопку "Перейти к оплате" Вы соглашаетесь с <a href="/offer" target="_blank">пользовательским соглашением
                (Оферта)</a> и подтверждаете свое согласие на обработку
                персональных данных с целью оформления проездных документов на
                автобус.
            </div>
            <br>
            <input type="submit" value="Перейти к оплате" class="button-order" id="add-order" name="enter" tabindex="71" @click="addOrder">
        </div>
    </div>
</template>
<script>
    export default {
        layout: 'order',
        data() {
            return{
                flight: [],
                order: []
            }
        },
        async fetch() {
            if(!this.$route.query.flightId) {
                this.$router.push({ name: 'index' })
            }
            await this.fetchFlight()
        },

        methods: {
            async fetchFlight() {
                const { data: response } = await this.$axios.get(`/flights/${this.$route.query.flightId}`)
                if(response.success) {
                    this.flight = response.data
                }
            },

            async addOrder() {
                const { data: response } = await this.$axios.post(`/orders`, {
                    ...this.order,
                    flight_id: this.$route.query.flightId,
                    date: this.$route.query.date
                })
                if(response.success) {
                    this.$router.push({ name: 'payment', query: { orderId: response.data.id } })
                } else {
                    return
                }
            }
        }
    }
    
</script>















<style scoped>
    h2 { font-size: 19px; margin-top: 0px !important;}
    .tap {float: left; margin: 0px 3px 10px 0px;  position: relative; display: inline-block; height: 41px; }
    tr.city_name { font-size: 16px; }
    .split_city { width: 50px; text-align: center; }
    .invisible { display:none; }
    input, .order select { padding: 3px; padding-left: 5px !important; }
    input[type='text'], input[type='email'] { padding: 4px; border: 1px solid #a9a9a9; width: 150px; }
    textarea { padding: 3px !important; padding-left: 12px !important;  }
    .input-clear { display: none; }
    .input-clear {position: absolute; top: 16px; right: 4px; text-decoration: none !important; padding: 4px; opacity: 0.5; }
    .input-clear:hover:focus { opacity: 1; }
    #info_route{ margin-bottom: 6px; }
    #edit-field-departure-date-und-0-value-datepicker-popup-0 { width: 97px; }
    .passenger .full-size { margin-bottom: 10px; background: #f4f4f4; padding: 5px 0px 9px 9px; }
    .passenger .field-second-name, .passenger .field-first-name, .passenger .field-patronymic { width: 94px; padding-right: 17px; }
    .passenger select.field-document { width: 95px; }
    .passenger .field-document-number { width: 78px; color:#7f7f7f; padding-right: 17px;}
    .passenger .edit-field-date-of-birth { width: 70px; color:#7f7f7f; padding-right: 17px; }
    .passenger select.field_citizenship { width: 90px; }
    .passenger .edit-field-date-of-birth-und-0-value-datepicker-popup-0 { width: 78px; }
    .passenger .price-ticket-value { padding-top: 3px; }
    .passenger .price-ticket-type { font-size: 9px; }
    .passenger .passenger-data { clear: both; padding-top: 0.4em; }
    #add-passager, #del-passager{ width: 160px; }
    #del-passager { display: none; }
    #payment-metod-list input { margin-right: 5px !important; }
    #e-mail, #phone{ color:#7f7f7f; }
    #ui-datepicker-div { display: none; }
    h2 { clear: left; }
    #full_screen.visible { position: fixed; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; z-index: 999; background: #fff; }
    .full_screen-top { text-align: center; font-size: 19px; padding: 0.5rem; position: absolute; top: 0; left: 0; right: 0; height: 2rem; background: #fff; box-shadow: 0 4px 4px -2px rgba(204, 204, 204, 0.7); -moz-box-shadow: 0 4px 4px -2px rgba(204, 204, 204, 0.7); -webkit-box-shadow: 0 4px 4px -2px rgba(204, 204, 204, 0.7); }
    .full_screen-center { box-sizing: border-box; padding-top: .5rem; position: absolute; top: 3rem; width: 100%; bottom: 3rem; overflow: auto; text-align: center; display: flex; }
    .full_screen-bottom { text-align: center; position: absolute; bottom: 0; left: 0; right: 0; height: 3.5rem; background: #fff; box-shadow: 0 -4px 4px -2px rgba(204, 204, 204, 0.7); -moz-box-shadow: 0 -4px 4px -2px rgba(204, 204, 204, 0.7); -webkit-box-shadow: 0 -4px 4px -2px rgba(204, 204, 204, 0.7); }
    .full_screen-button{ margin-top: 0.3rem; background: linear-gradient(180deg, #4588bc, #266396); padding: 0.4em; border: 1px solid #9f9f9f; border-radius: 0.3em; color: white; font-size: 19px; cursor: pointer; text-align: center; }
    .full_screen-button:hover:focus { background: linear-gradient(180deg, #245e94, #195289); }
    .shema_place { margin: auto; }
    .shema_place .row{ clear: left; }
    .shema_place .row .place { width: 2em; height: 2em; margin: 0.5em; border: 1px solid black; float:left; text-align: center; line-height: 2em; cursor: pointer; }
    .shema_place .row .place:hover:focus { background: linear-gradient(180deg, #4588bc, #266396); color: white; }
    .shema_place .row .place.empty { border: 1px solid white; cursor: default; }
    .shema_place .row .place.empty:hover:focus { background: none;  }
    .shema_place .row .place.busy, .shema_place .row .place.busy:hover:focus { background: grey; opacity: 0.5; cursor: default; border: 1px solid grey; color: black;}
    .shema_place .row .place.select { background: linear-gradient(180deg, #4588bc, #266396); color: white; }
    .shema_place .floor0 {float: left; border: 1px solid black; padding: 0.5em; margin: 0em 1em 1em 1em; }
    .shema_place .floor1 {float: left; border: 1px solid black; padding: 0.5em; margin: 0em 1em 1em 1em; }
    .full_screen-close {float: left; display: inline-block; width: 1.2rem; height: 1.2rem; position: relative; }
    .full_screen-close:before, .full_screen-close:after {position: absolute; content: ''; width: 100%; height: 2px; top: 50%; margin-top: -1px; background: linear-gradient(180deg, #4588bc, #266396); -webkit-transition: transform .5s; -moz-transition: transform .5s; -o-transition: transform .5s; transition: transform .5s; }
    .full_screen-close:before {transform: rotate(45deg); }
    .full_screen-close:hover:focus:before {transform: rotate(-45deg); }
    .full_screen-close:after {transform: rotate(-45deg); }
    .full_screen-close:hover:focus:after {transform: rotate(45deg); }
    .full_screen-close:hover:focus:before, .full_screen-close:hover:focus:after {-webkit-transition: transform .5s; -moz-transition: transform .5s; -o-transition: transform .5s; transition: transform .5s; }
    .ui-autocomplete {
    max-height: 200px;
    overflow-y: auto;
    }
</style>