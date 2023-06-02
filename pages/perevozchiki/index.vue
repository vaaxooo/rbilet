<template>
  <div>
    <div class="view view-carriers-list view-id-carriers_list view-display-id-page view-dom-id-8faf6f5b1bfac83f02ca0a9d294577aa">
      <div class="view-header">
        <div class="box-grey">
          Только наш Рос-Билет предоставляет пассажирам возможность сравнить различные транспортные компании по качеству автобусов и уровню сервиса. Для этого на основе отзывов пассажиров мы создали рейтинг перевозчиков. Итоговые оценки в нем обозначены количеством звезд, Они отражают средний показатель баллов, выставленных пассажирами в комментариях на странице конкретного перевозчика.
          <br /><br />
          Мы стремимся предоставить пассажирам максимально объективную информацию. Поэтому поставили защиту от "накруток", не позволяющую одному человеку голосовать дважды. При попытке "накрутки", комментарий будет показан, но оценка в зачет не пойдет.
          <br /><br />
          Принять участие в формировании рейтинга, познакомиться с отзывами пассажиров и оставить свой отзыв, вы можете перейдя по ссылке "К странице перевозчика".
        </div>
        <p><br /></p>
      </div>
      <div class="view-content">
        <table class="views-table cols-4">
          <thead>
            <tr>
              <th scope="col" class="views-field views-field-counter"> Место </th>
              <th scope="col" class="views-field views-field-title"> Перевозчик </th>
              <th scope="col" class="views-field views-field-field-user-rating"> Рейтинг </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd views-row-first" v-for="carrier in carriers" :key="carrier.id">
              <td class="views-field views-field-counter"> {{ carrier.id }} </td>
              <td class="views-field views-field-title"> {{ carrier.name }} </td>
              <td class="views-field views-field-field-user-rating">
                <div class="clearfix fivestar-average-stars fivestar-average-text">
                  <div class="fivestar-static-form-item">
                    <div class="form-item form-type-item">
                      <div class="fivestar-basic">
                        <div class="fivestar-widget-static fivestar-widget-static-vote fivestar-widget-static-5 clearfix">
                          <div
                            class="star"
                            v-for="i in 5"
                            :class="['star-' + i, i <= carrier.rating ? 'on' : '']"
                            :key="i"
                          >★</div>
                        </div>
                      </div>
                      <div class="description">
                        <div class="fivestar-summary fivestar-summary-average-count">
                          <span class="average-rating">Средняя: <span>{{ carrier.rating }}</span></span>
                          <span class="total-votes">( <span>{{ carrier.votes }}</span> голосов) </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="item-list">
        <ul class="pager">
<li
  class="pager-item"
  v-for="pageNumber in getDisplayedPageNumbers()"
  :key="pageNumber"
  :class="{'pager-current': pageNumber === pagination.page}"
>



            <a
              :title="'На страницу номер ' + pageNumber"
              :href="getPaginationLink(pageNumber)"
            >{{ pageNumber }}</a>
          </li>
          <li class="pager-next">
            <a
              title="На следующую страницу"
              :href="getPaginationLink(+$route.query.page + 1)"
              v-if="pagination.page < pagination.pages"
            >следующая ›</a>
          </li>
          <li class="pager-last last">
            <a
              title="На последнюю страницу"
              :href="getPaginationLink(pagination.pages)"
              v-if="pagination.page < pagination.pages"
            >последняя »</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carriers: [],
      pagination: [],
    };
  },

  async fetch() {
    await this.fetchCarriers();
  },

  methods: {
async fetchCarriers() {
    let page = this.$route.query.page || 1
  const { data: response } = await this.$axios.get('/carriers?page=' + page);
  if (response.success) {
    this.carriers = response.data.carriers;
    this.pagination = {
      total: response.data.pagination.total,
      pages: Number(response.data.pagination.pages),
      page: Number(response.data.pagination.page),
    };
  }
},

    getPaginationLink(page) {
            const queryPage = page > 1 ? { page } : {}
            return this.$router.resolve({ query: queryPage }).href
    },
getDisplayedPageNumbers() {
  const totalPages = Number(this.pagination.pages);
  const currentPage = Number(this.pagination.page);
  const maxDisplayedPages = 7;

  let startPage, endPage;
  if (totalPages <= maxDisplayedPages) {
    // Все страницы помещаются в пределы максимального количества отображаемых страниц
    startPage = 1;
    endPage = totalPages;
  } else {
    // Вычисление начальной и конечной страницы с учетом текущей страницы
    const maxPagesBeforeCurrent = Math.floor((maxDisplayedPages - 1) / 2);
    const maxPagesAfterCurrent = Math.ceil((maxDisplayedPages - 1) / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrent) {
      // Текущая страница близка к началу
      startPage = 1;
      endPage = maxDisplayedPages;
    } else if (currentPage >= totalPages - maxPagesAfterCurrent) {
      // Текущая страница близка к концу
      startPage = totalPages - maxDisplayedPages + 1;
      endPage = totalPages;
    } else {
      // Текущая страница где-то в середине
      startPage = currentPage - maxPagesBeforeCurrent;
      endPage = currentPage + maxPagesAfterCurrent;
    }
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
},



  },
};
</script>
