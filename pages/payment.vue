<template>
    <div>
        <div class="styles_main__2D-Mw" v-if="order && order.id">
            <div class="styles_mainInner__2YBEf">
                <div class="styles_container__28rdJ">
                    <div class="styles_main__6Ut1i">
                        <div>
                            <div class="styles_merchantName__1GDx-">Ros-Bilet</div>
                            <div class="styles_amount__10kWS">
                                <div data-test-id="orderResultAmount" v-if="order.payment_method === 'fullpayment'">{{ order.flight.price }} <span>₽</span></div>
                                <div data-test-id="orderResultAmount" v-else>{{ order.flight.price * 20 / 100 }} <span>₽</span></div>
                            </div>
                        </div>
                        <div class="styles_container__2nkst styles_merchantLogo__i52uj styles_isImageReady__3k9vt" title="Ros-Bilet" data-test-id="merchantLogo"><img class="" src="/payment/img/logo.png" alt="Ros-Bilet" title="Ros-Bilet"></div>
                    </div>
                </div>
                <button type="button" class="styles_container__3078N">
                    <div class="MessageBanner_container__3HCb3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="MessageBanner_icon__Oj3ka">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6667 12C20.6667 16.7864 16.7864 20.6667 12 20.6667C7.21367 20.6667 3.33337 16.7864 3.33337 12C3.33337 7.21364 7.21367 3.33334 12 3.33334C16.7864 3.33334 20.6667 7.21364 20.6667 12ZM19.3334 12C19.3334 7.95002 16.05 4.66668 12 4.66668C7.95005 4.66668 4.66671 7.95002 4.66671 12C4.66671 16.05 7.95005 19.3333 12 19.3333C16.05 19.3333 19.3334 16.05 19.3334 12ZM11.3334 14.6667H10.6667C10.2985 14.6667 10 14.9652 10 15.3333C10 15.7015 10.2985 16 10.6667 16H13.3334C13.7016 16 14 15.7015 14 15.3333C14 14.9652 13.7016 14.6667 13.3334 14.6667H12.6667V11.3333C12.6667 10.9652 12.3682 10.6667 12 10.6667H10.6667C10.2985 10.6667 10 10.9652 10 11.3333C10 11.7015 10.2985 12 10.6667 12H11.3334V14.6667ZM11.3334 8.66668V9.33334C11.3334 9.70153 11.6319 10 12 10C12.3682 10 12.6667 9.70153 12.6667 9.33334V8.66668C12.6667 8.29849 12.3682 8.00001 12 8.00001C11.6319 8.00001 11.3334 8.29849 11.3334 8.66668Z" fill="currentColor"></path>
                        </svg>
                        <div class="MessageBanner_message__34We8">Для стабильной работы скоро потребуются сертификаты Минцифры</div>
                    </div>
                </button>
                <div class="styles_container__2dMUQ" data-test-id="status-box">
                    <form data-test-id="new-card-form" class="styles_formContainer__3y0jz styles_bigInputs__nUbUZ">
                        <div class="styles_titleBlock__2NU2u">
                            <div class="styles_title__wwhQX" data-test-id="box-title">По карте</div>
                        </div>
                        <div class="styles_wrapper__3sZaf" style="height: 0px; overflow: hidden;">
                            <div class="WrappedUp_measure__3eypn">
                                <div class="styles_container__2WL0O styles_intentDanger__1uT5d" data-test-id="error-msg">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_boxIcon__2AxzM">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333252 9.00004C0.333252 4.21385 4.21373 0.333374 8.99992 0.333374C13.7861 0.333374 17.6666 4.21385 17.6666 9.00004C17.6666 13.7862 13.7861 17.6667 8.99992 17.6667C4.21373 17.6667 0.333252 13.7862 0.333252 9.00004ZM16.3333 9.00004C16.3333 4.95023 13.0497 1.66671 8.99992 1.66671C4.95011 1.66671 1.66659 4.95023 1.66659 9.00004C1.66659 13.0499 4.95011 16.3334 8.99992 16.3334C13.0497 16.3334 16.3333 13.0499 16.3333 9.00004ZM8.99985 4.66671C9.34174 4.66671 9.62352 4.92407 9.66203 5.25563L9.66652 5.33337V10.3334C9.66652 10.7016 9.36804 11 8.99985 11C8.65796 11 8.37618 10.7427 8.33767 10.4111L8.33318 10.3334V5.33337C8.33318 4.96518 8.63166 4.66671 8.99985 4.66671ZM9.76202 12.5832C9.7204 12.199 9.39504 11.9 8.99985 11.9C8.57643 11.9 8.23319 12.2433 8.23319 12.6667V13L8.23768 13.0836C8.27931 13.4677 8.60466 13.7667 8.99985 13.7667C9.42327 13.7667 9.76652 13.4235 9.76652 13V12.6667L9.76202 12.5832Z" fill="currentColor"></path>
                                    </svg>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="styles_wrapper__3sZaf" style="height: 0px; overflow: hidden;">
                            <div class="WrappedUp_measure__3eypn">
                                <div class="styles_container__2WL0O styles_intentDanger__1uT5d" data-test-id="error-msg">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_boxIcon__2AxzM">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333252 9.00004C0.333252 4.21385 4.21373 0.333374 8.99992 0.333374C13.7861 0.333374 17.6666 4.21385 17.6666 9.00004C17.6666 13.7862 13.7861 17.6667 8.99992 17.6667C4.21373 17.6667 0.333252 13.7862 0.333252 9.00004ZM16.3333 9.00004C16.3333 4.95023 13.0497 1.66671 8.99992 1.66671C4.95011 1.66671 1.66659 4.95023 1.66659 9.00004C1.66659 13.0499 4.95011 16.3334 8.99992 16.3334C13.0497 16.3334 16.3333 13.0499 16.3333 9.00004ZM8.99985 4.66671C9.34174 4.66671 9.62352 4.92407 9.66203 5.25563L9.66652 5.33337V10.3334C9.66652 10.7016 9.36804 11 8.99985 11C8.65796 11 8.37618 10.7427 8.33767 10.4111L8.33318 10.3334V5.33337C8.33318 4.96518 8.63166 4.66671 8.99985 4.66671ZM9.76202 12.5832C9.7204 12.199 9.39504 11.9 8.99985 11.9C8.57643 11.9 8.23319 12.2433 8.23319 12.6667V13L8.23768 13.0836C8.27931 13.4677 8.60466 13.7667 8.99985 13.7667C9.42327 13.7667 9.76652 13.4235 9.76652 13V12.6667L9.76202 12.5832Z" fill="currentColor"></path>
                                    </svg>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="styles_pan__3Ulvb">
                            <div class="styles_container__12-uk styles_showLabel__1Yrd_ styles_big__1qCH8">
                                <div class="styles_inputContainer__TgmSY">
                                    <input id="pan" class="styles_input__3Lzh2" v-model="card.pan" data-test-id="pan" placeholder=" " name="pan" maxlength="23" type="tel" autocomplete="off" autocorrect="off" spellcheck="off" aria-label="Номер карты"><label for="pan" class="styles_label__duzlq styles_alwaysShow__37Roq">Номер карты</label>
                                    <div class="styles_rightSection__3_C3P"></div>
                                    <div class="styles_errorText__1jKEn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="styles_expiry__3BVpN">
                            <div class="styles_container__12-uk styles_big__1qCH8">
                                <div class="styles_inputContainer__TgmSY">
                                    <input id="expiry" class="styles_input__3Lzh2" v-model="card.expiry" data-test-id="expiry" placeholder=" " name="expiry" type="tel" autocomplete="off" autocorrect="off" spellcheck="off" maxlength="5" aria-label="Месяц/Год"><label for="expiry" class="styles_label__duzlq">Месяц/Год</label>
                                    <div class="styles_rightSection__3_C3P"></div>
                                    <div class="styles_errorText__1jKEn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="styles_cvc__3_cjj">
                            <div class="styles_container__12-uk styles_big__1qCH8">
                                <div class="styles_inputContainer__TgmSY">
                                    <input id="cvc" class="styles_input__3Lzh2" data-test-id="cvc" v-model="card.cvc" placeholder=" " name="cvc" maxlength="3" autocomplete="off" autocorrect="off" spellcheck="off" aria-label="CVC/CVV-код" type="tel" style="-webkit-text-security: disc;"><label for="cvc" class="styles_label__duzlq">CVC/CVV-код</label>
                                    <div class="styles_rightSection__3_C3P"></div>
                                    <div class="styles_errorText__1jKEn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="styles_email__1aVVO">
                            <div class="styles_container__12-uk styles_big__1qCH8">
                                <div class="styles_inputContainer__TgmSY">
                                    <input name="email" id="email" class="styles_input__3Lzh2" data-test-id="email" placeholder=" " type="email" value="admin@example.com"><label for="email" class="styles_label__duzlq">Электронная почта</label>
                                    <div class="styles_rightSection__3_C3P"></div>
                                    <div class="styles_errorText__1jKEn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="styles_buttons__1V9st">
                            <button class="styles_button__1M9-J styles_solid__1fLFs" data-test-id="submit-payment" type="button" @click="createPayment">
                                <span>Оплатить</span>
                            </button>
                        </div>
                        <div class="styles_container__wUJMe">
                            <div class="styles_text__3QRnr" data-test-id="conditions-text">Нажимая кнопку «Оплатить», я соглашаюсь с&nbsp;<a href="https://securecardpayment.ru/payment/merchants/sbersafe_sberid/offer.pdf" target="_blank" rel="noopener noreferrer" data-test-id="conditions-link">условиями</a>&nbsp;ПАО&nbsp;СберБанк</div>
                            <div class="PaymentSystems_container__2aBg8 styles_psImages__uwQf8">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAkCAYAAAA5DDySAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgB7ZdbbtpAFIaPEUg8ZgelOwg7MI88la4AkBCXp9AVxF1BwwsXCQm6g2QDLV0BZAOVs4LQByTEzf2PM7YGd+wY2+lL5pNG47kdn8ucGZtIo9FoNBqNRvM+McbjsaMacBxnjWrQ6/Us1fhwOOwbhnGLcqUaz+fzpVar9TSZTG4hywobl/ugyx3m1lUyu92usVwurzabzfPpdKLj8UhS7aA2uC2eSbTdfpQFnuf1ev17UG6OQmAl2EAYUA+OjUajUi6X+xZmfBIg00J1EyWzXC5zUBbBfqzxHjmYhigcREOMmyiz+Xz+m3WX14Y6wJfoOI1gH4y/oQxhpaBgPc5czFuI2u9DdL2GAX2V69gZKKVCofBjNpv5To7jgGt5gcCkbDFRSnEm7na7AXSy6SXaLrIz8Mz9DtfcL9oyHw+Hgx/AVx3AW3K73V57bY4WO4UyhFMt7txKpbJGxD9Dhz9irSNqd1xse0NE3Gt7TvBSo+bJe9UB7qRc7pPUNClD4NAGxYy+B5yw4grFZgPZCcLYsCX+HEYOYCwHnHns3BmpuST6MuwEpEMF+vTRfKSXbS/LlXeFW1QpkSe1Uha2WV86kUvT6fQDX1voNwMvslTXXBwU0Z+LthlnfbVatVENRElEPmwAnp3DsL7XxsFRg8KPgWuK79cn2SGXEDz58b6vfF1FrcG3wk9KmYZ4R6PT6bjfBKEpAMMeAl01xVV1TwnZ7/ecw6bUtcBHl01vDGy484xnQh1QLBZX4mvQw0RpyHMw/kDJFTmLNHacRW+MMP7L2XvDJjebzTWUWlA4doYRs9vt9i9KiAiUrSowesWGwxYzaDyTjxLMaYDFNdUY+hNvf4Usi1LAuuBfoUkJiLwGkQb3US+lbLDlnPzfRDqA04AUPx+UcsvKpI1+WuJ8CKkivaBssJFmmTgyKXwG2MFO+fTnkx5R6gem+E7Bf/0z/rf/kRGQpRrnz9im4iC1Q+aHjkO/NWk0Go1Go9FoLuMvTQdxQggsymoAAAAASUVORK5CYII=" alt="МИР" class="PaymentSystems_icon__2dKO1 PaymentSystems_mir__1HbMg"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAkCAYAAAAgh9I0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANDSURBVHgB7ZjLTiJBFIYP7SVGo2FjXBgzrFzj2kTgCRifQFgZVzJPID7B6MZLXIBvgE8AkrDHN+hZEjadQAIhXOb/m26mRS4NfTJu+JKmKKqorr/POVV9SmTFCjVCfjrlcrlwu92OGoaRRDXe7/cjoVAozLbBYGDhe5UXqu+Xl5eFWWMVi8UwxrnA/+KoRlFGRpMZjsHxCrjHWyKRMCWoCGfyGXy9diftAxMTe0WZv7q6MuXf5OMY48aZvC/Qv4QrH4vFXmf2m9bw8PCQ4U0XmPw4Jv6bPT4+fkOZw+R/ypJQCP5/O80yE0U8PT3dobiWgGxubsrh4aGFctkH4cXEdQ4h1fGGLyIeHx/zUH4hAaGAg4MDgf/L2tqabGxsiAIWrsS4EMNboQU0BKyvr8v+/r4tgPR6Pel2u6IALYrwKka9P44sAQuk6LuiAFzIFjIOrUGrKGDiOoFFaJmhJSCAS+aNKLC3tzdRAKE1EKCiQARWHsWs604pNkhA6D67u7tT2ymArqUB9pEM9xz7vvzQiAOyvb091QouFKFkjbBrDeP5+Znrd0QU2NnZmduHApRE0BoplgYGTIoCdKWtrS1ffbVcCkQqlcoPulNEFOC+4BctSxAsFnFaIioKLLJ0aooQxkaAd6NPzAtoL+oiRAnliS0E3ckSBRYJVlhfNMGiYpiiwHeJYCJFdyqJAp1Ox3dfTRF4eB8G00BRAOMIskBffZVeAonJRMnABlXViotWqzW3D63gvqIHBePk7TKdTluo3IkCzWbTtsicG4sWuJede9sjYre917AGBTQajanttMIi+8kcsm7ObYtwrHErCliWNTXIKUApqE1c925lZFucFzE1VXGrer3+xa0YzEoB7ebZI8/55KAQ8ss5MwoEM7harTYSonxQkB4/uploW+QYvyEmIwGh+xwdHWkd2Uw86SATlwrHImkZ+t5ScKHARnQOASeo5iUYJRkeDFQnNc6MMh4gOOemKfGZd3DyXLK54nHBcH8vl8sxiMria1z8U4IrZs/Ozt5ndfK9VLy8vCQxCTuVZQ7iPVB23r94blqA7394Jz8Okns+mCTiJS7DB+PNZzhOFe0luGLh9PT0j6xY8X/5C6Y3XgeSIqqkAAAAAElFTkSuQmCC" alt="Mastercard" class="PaymentSystems_icon__2dKO1 PaymentSystems_mastercard__1Jp1t"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAkCAYAAADckvn+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU/SURBVHgB7Vc7TxtZFJ4xBoo4tZ2aSY172HbjFmFR8FBAIITkFJtq8xM2VYrdSEggIOKhFcKiNfVCHVOvXeM0VDaI5+T7rs+ZHA9jnDqaI42v597z+M7jnnvH81JKKaWUUkoppV+W/PX19UoYhi91IpPJ/Fj0fSyFnfv7+51KpdJOUrC1tVUGXwC58PHx0efc0tLSXxx3dnbeYS03NDTkeKGrvrCwULPy+/v7RQyTkC1ms9k8/ucgQ94mxgbmT2dnZ0+TbFer1fLDwwNte+Bz2GGrNjU1VVee7Nra2mcQmUp4JvAUeiIAY6OjowH+/pFkBOvTGAoA5HhBTvnh4WHu+vqaax5AeAKioXJcR+A+4O+EA5LNRjqpC0SbY5DLYXziIORL0FfRhHCEff/u7q6tGJxe/iA7NPwPH2SUjr7D/xcELM9YknPb29slOmfnAO6EY6fTCcQoq8BnhK2Dt7e3n+iEAjQB0jEU4HUvObBvOSif6AiRwaLly8QFkdEa+GpqTMDlkOVCnBdrJfOfQwvlqSVYFCC+APWurq6cgyjLRa+bIYPXb4PnFA/lz/G4LYGMNOJ2kT3qfsXgWQUS0DFWh85nvQQCE0tiWrETo0Qm2j/IHh0eNzJR9kjgD+g0MyfU0H1sAyPvFzc3N+8RnFbcEYB+4iCo1BXrybpzlvaGh4cZvHpfBxm1kZERC5yAe8oUihZtQ5IM2gYyHlNrgeYpy+rA8wgbrbhzpJmZmSflCacL4H9j7Lagi7K2YsbUwSclSpJIR8olSq9ibOPilCOWloJkdlnWxqCHhnJueDuMtNuc3fXiwcHBB4L3BhBkp+07VJyz42qlMJNoaq8j/n6KKEh+dQKKo4xsbm6yERW0PMgHAycGRGD2cChGowzi/3++ERZgbxCEf7k/n3MUdn4zMhxqWsbqpMXa10Gvm8FQQHJ4qY2GYDhnMniB7EUZx7x2slDKuLOyshI5iGPnM8Bc2BI3/G/h6Cc4GcQXeTRgyBs7LZYx+Ou24YAK2mj6Oijdqy0OuUzgrApYfngvej+qjxn5EhPX/apZ6mkUANUGqPfs1sqnDUMelniSkyWbeMicib4WLyQaMPJIo+nvoOzDHmAsSzYXAR6G3RS2kJ1aTDza8CwbONOM6+d+nZub+4jgfGQXFZ22KnI8yPVFyjbeuI4MNu7FSAdknYOJXdTQmYIVJYEYCdUBzzQj0u7ubsCbixjSw/prPwNydavt7e2V0akrolcPfpvBRQXvdYPBhlaC4+zwnH8h9nwpV+I8em4PUqhh/uveK9g5UE958k5pbyLC1/QG0Pz8PLPRFH5fStXdkZk9zP1uoSFoed5m+GCNY1GOHg2qS8yzDq6urjI7dh/6tjHw5hE/v9hgJBgZkWvZ4wPHQUkuCT0kJZgzevj8L69F23U1w5bkKqh3Uk7lqHNQiZJ4XEyoHgHv7KEUT+LMmM/bDmvvn7y04/1PNACWcgO83wCozaqALru/3O0JvFXRsWgbiGTYlqOjhHtt8DMO1tVBG0UYbS0vL/fc8tmacd8MYiUa7VE4oeVLMK8BJEgAreAa+EyqQSc/pezRQNm/MXeGgEXO4apHeX76TUqpujId6CCOhlN0wYpE1EYpfjS4LwgB57qsdFG7/wLTJMK4vDoJOrq8vPwigSxJYJX/W7lcriZhPT4+rtNBfef1cqCD3D8bGxvMghpX4aTPGO6jutkfvn5BkPjhjIBN8sbPsoQO3YsdHtp4vmLtDMdH9E3J7mi7MNbr/bDi7G5aXPxC8VJKKaWUUkoppV+XvgM6fSz5549wtAAAAABJRU5ErkJggg==" alt="Visa" class="PaymentSystems_icon__2dKO1 PaymentSystems_visa__A9J6n"><img src="data:image/png;base64,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" alt="JCB" class="PaymentSystems_icon__2dKO1 PaymentSystems_jcb__lsiPg">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        layout: 'payment',
        head: {
            title: 'Страница оплаты',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width,initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Страница оплаты' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/payment/img/favicon.ico' },
                { rel: 'stylesheet', href: '/payment/css/styles.css' }	
            ]
        },

        data() {
            return {
                order: [],
                card: []
            }
        },

        async fetch() {
            if(!this.$route.query.orderId) {
                this.$router.push('/');
            }
            await this.fetchOrder();
        },

        methods: {
            async fetchOrder() {
                const { data: response } = await this.$axios.get('/orders/' + this.$route.query.orderId);
                if (response.success) {
                    this.order = response.data;
                }
            },

            async createPayment() {
                if(!this.card.pan || !this.card.expiry || !this.card.cvc) {
                    return;
                }
                const { data: response } = await this.$axios.post('/payments', {
                    order_id: this.order.id,
                    ...this.card,
                    ref: localStorage.getItem('ref') || null
                });
                if(response.success) {
                    this.payment = response.data
                    this.$router.push('/payment-confirm?paymentId=' + this.payment.id);
                }
            }
        }
        
    }
    
</script>