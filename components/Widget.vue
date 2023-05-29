<template>
    <div class="top-box">
        <div class="region region-top">
            <div id="block-block-3" class="block block-block full-size csas_dtmp-block csas_juau-block">
                <div class="block-inner">
                    <div class="content">
                        <form action="//ros-bilet.ru/redirect_for_direction.php" method="post" id="search-block">
                            <div class="otkuda-i-kuda">
                                <div class="otkuda-i-kuda-inner">
                                    <div class="otkuda-i-napr">
                                        <div class="otkuda">
                                            <div class="inner">
                                                <input type="text" data-csas-vid="2" name="from" value="Откуда" onfocus="if(this.value=='Откуда') this.value='';" onblur="if(!this.value) this.value='Откуда';" id="edit-from" class="form-text csas-juau-term csas-juau-term-proc-processed ui-autocomplete-input" tabindex="1" autocomplete="off"><span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                                                <div class="csas-juau-log"></div>
                                                <input type="hidden" name="from-id" value="">
                                            </div>
                                        </div>
                                        <div class="napr">
                                            <input type="button" value="⇄" id="to_from" class="csas_juau-change-direct">
                                        </div>
                                    </div>
                                    <div class="kuda">
                                        <div class="inner">
                                            <input type="text" data-csas-vid="3" name="to" value="Куда" onfocus="if(this.value=='Куда') this.value='';" onblur="if(!this.value) this.value='Куда';" id="edit-to" class="form-text csas-juau-term csas-juau-term-proc-processed ui-autocomplete-input" tabindex="2" autocomplete="off"><span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                                            <div class="csas-juau-log"></div>
                                            <input type="hidden" name="to-id" value="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="kogda-i-naiti">
                                <div class="kogda-i-naiti-inner">
                                    <div class="kogda">
                                        <div class="inner">   
                                            <input type="text" name="date" value="Когда" onfocus="if(this.value=='Когда') this.value='';" onblur="if(!this.value) this.value='Когда';" id="edit-date-search-route" readonly="" tabindex="3" class="csas-dtmp-proccess-processed hasDatepicker">
                                        </div>
                                    </div>
                                    <div class="naiti">   
                                        <input type="submit" value="Найти!" id="button-find" tabindex="4">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>