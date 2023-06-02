<template>
  <div>
    <input
      class="autocomplete transition form-text csas-juau-term csas-juau-term-proc-processed ui-autocomplete-input"
      type="text"
      :autocomplete="autocomplete"
      v-model="search"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.enter="enter"
      @focus="focus"
      @blur="blur"
      :name="name"
      :placeholder="placeholder"
    />

    <div :class="['autocomplete transition autocomplete-' + name]" :id="'autocomplete-' + name" v-show="showList">
      <ul>
        <li v-for="(data, index) in filteredData" :key="index" :class="activeClass(index)">
          <a href="#" @click.prevent="selectItem(data)">{{ data }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      search: '',
      showList: false,
      selected: -1,
    };
  },
  computed: {
    filteredData() {
      if (!this.search) {
        return [];
      }

      const searchLowerCase = this.search.toLowerCase();
      return this.data.filter((item) => item.toLowerCase().includes(searchLowerCase));
    },
    autocomplete() {
      return this.showList ? 'off' : 'on';
    },
  },
  methods: {
    focus() {
      this.showList = true;
    },
    blur() {
      setTimeout(() => {
        this.showList = false;
      }, 200);
    },
    down() {
      if (this.selected < this.filteredData.length - 1) {
        this.selected++;
      }
    },
    up() {
      if (this.selected > 0) {
        this.selected--;
      }
    },
    enter() {
      if (this.selected !== -1) {
        this.selectItem(this.filteredData[this.selected]);
      }
    },
    activeClass(index) {
      return {
        active: index === this.selected,
      };
    },
    selectItem(data) {
      this.search = data;
      this.showList = false;
      this.$emit('selectList', this.search);
    },
  },
};
</script>

<style scoped>
input.autocomplete.transition.form-text.csas-juau-term.csas-juau-term-proc-processed.ui-autocomplete-input {
    border-radius: 3px;
    border: 1px solid #BEBAB3;
    background: #fefcf8;
    background: -moz-linear-gradient(top, #fefcf8 0%, #f5f2eb 48%, #efece5 72%, #ebe8e1 100%);
    background: -webkit-linear-gradient(top, #fefcf8 0%,#f5f2eb 48%,#efece5 72%,#ebe8e1 100%);
    background: linear-gradient(to bottom, #fefcf8 0%,#f5f2eb 48%,#efece5 72%,#ebe8e1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcf8', endColorstr='#ebe8e1',GradientType=0 );
    padding: 8px 0;
    text-indent: 8px;
    width: 100%;
    max-width: 310px;
}

.autocomplete {
  position: relative;
}

.autocomplete ul {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 4px 0 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  z-index: 9999;
}

.autocomplete li {
  padding: 8px 12px;
  cursor: pointer;
}

.autocomplete li.active {
  background-color: #f2f2f2;
}

.autocomplete li:hover {
  background-color: #f2f2f2;
}

.autocomplete a {
  text-decoration: none;
  color: #333;
}

.autocomplete a:hover {
  text-decoration: underline;
}

</style>
