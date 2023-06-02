<template>
  <div class="top-box">
    <div class="region region-top">
      <div id="block-block-3" class="block block-block full-size csas_dtmp-block csas_juau-block">
        <div class="block-inner">
          <div class="content">
            <form id="search-block">
              <div class="otkuda-i-kuda">
                <div class="otkuda-i-kuda-inner">
                  <div class="otkuda-i-napr">
                    <div class="otkuda">
                      <div class="inner">
                        <Autocomplete
                          :name="'from'"
                          :data="cities"
                          :placeholder="'Откуда'"
                          @selectList="onSelectFrom"
						  @input="onSelectFrom"
						  v-model="from"
                        ></Autocomplete>
                        <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                        <div class="csas-juau-log"></div>
                      </div>
                    </div>
                    <div class="napr">
                      <input type="button" value="⇄" id="to_from" class="csas_juau-change-direct">
                    </div>
                  </div>
                  <div class="kuda">
                    <div class="inner">
                      <Autocomplete
                        :name="'to'"
                        :data="cities"
                        :placeholder="'Куда'"
                        v-model="to"
                        @selectList="onSelectTo"
						@input="onSelectTo"
                      ></Autocomplete>
                      <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                      <div class="csas-juau-log"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="kogda-i-naiti">
                <div class="kogda-i-naiti-inner">
                  <div class="kogda">
                    <div class="inner">
                        <DatePicker
                            v-model="selectedDate"
                            :disabled="false"
                            :placeholder="'Когда'"
                            class="csas-dtmp-proccess-processed hasDatepicker date-popup-init"
                            :disabled-date="disablePastDates"
                            @input="onSelectDate"
                        ></DatePicker>

                    </div>
                  </div>
                  <div class="naiti">
                    <button type="button" value="Найти!" id="button-find" tabindex="4" @click="searchFlights">Найти!</button>
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

<script>
import Autocomplete from '@/components/Autocomplete.vue';
import DatePicker from 'vue2-datepicker';

export default {
  components: {
    Autocomplete,
    DatePicker,
  },
  data() {
    return {
      cities: [],

      from: '',
      to: '',
      selectedDate: null,
    };
  },
  async fetch() {
    await this.fetchCities();
  },
  methods: {
    disablePastDates(date) {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return date < currentDate;
    },
    async fetchCities() {
      const { data: response } = await this.$axios.get('/cities');
      if (response.success) {
        this.cities = response.data.cities;
      }
    },
    searchFlights() {
		if(!this.from || !this.to || !this.selectedDate) {
			return;
		}
    //   this.$router.go('/buses?from=' + this.from + '&to=' + this.to + '&date=' + this.selectedDate);
		let date = this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1) + '-' + this.selectedDate.getDate();
	  	location.href = '/buses?from=' + this.from + '&to=' + this.to + '&date=' + date;
    },
    onSelectFrom(data) {
      	this.from = data;
    },
    onSelectTo(data) {
      	this.to = data;
    },
    onSelectDate(date) {
      	this.selectedDate = date;
    },
  },
};
</script>

<style scoped>
input.mx-input {
    background-repeat: no-repeat;
    background-position: 0 0;
    display: block;
    float: right;
    padding: 8px 0;
    text-indent: 8px;
    width: 100%;
    max-width: 110px;
    border-radius: 3px;
    border: 1px solid #BEBAB3;
    background: #fefcf8;
    background: -moz-linear-gradient(top, #fefcf8 0%, #f5f2eb 48%, #efece5 72%, #ebe8e1 100%);
    background: -webkit-linear-gradient(top, #fefcf8 0%,#f5f2eb 48%,#efece5 72%,#ebe8e1 100%);
    background: linear-gradient(to bottom, #fefcf8 0%,#f5f2eb 48%,#efece5 72%,#ebe8e1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcf8', endColorstr='#ebe8e1',GradientType=0 );
}

i.mx-icon-calendar {
    display: none;
}

.datepicker-container {
  position: relative;
}

.datepicker-input {
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.datepicker-wrapper {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 9999;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 4px;
}

.datepicker-day {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 2px;
  cursor: pointer;
}

.datepicker-day:hover {
  background-color: #f2f2f2;
}

.datepicker-selected {
  background-color: #337ab7;
  color: #fff;
}

.datepicker-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>