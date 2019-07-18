const $grid = $('.grid');

const categoriesId = {
  mobile: {
    id: 288,
    name: 'mobile'
  },
  frontend: {
    id: 290,
    name: 'frontend'
  },
  backend: {
    id: 291,
    name: 'backend'
  },
  design: {
    id: 289,
    name: 'design'
  },
  other: {
    id: 292,
    name: 'other'
  }
}

textTruncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

doFetch = (query) => {
  $('.vacancy-cards-container').addClass('vacancy-cards-container--loading');
  fetch(`https://career.idapgroup.com/wp-json/wp/v2/${query}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    }).then(json => {

      let find = '&nbsp;';
      let re = new RegExp(find, 'g');

      json.map(i => {
        let currentTitle = i.title.rendered,
          currentLocation = i.acf.location,
          currentContent = i.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace(re, ""),
          currentLink = i.link,
          currentCategory = [];

        i.vacancy_category.map((value, index, array) => {
          switch (array[index]) {
            case categoriesId.mobile.id:
              currentCategory.push(categoriesId.mobile.name)
              break
            case categoriesId.frontend.id:
              currentCategory.push(categoriesId.frontend.name)
              break
            case categoriesId.backend.id:
              currentCategory.push(categoriesId.backend.name)
              break
            case categoriesId.design.id:
              currentCategory.push(categoriesId.design.name)
              break
            case categoriesId.other.id:
              currentCategory.push(categoriesId.other.name)
              break
            default:
              currentCategory.push(categoriesId.other.name)
          }
        });

        let currentCategoryStr = '';
        currentCategory = currentCategory.map((value, index, array) => {
          currentCategoryStr = currentCategoryStr + ' ' + array[index]
        });

        $('.vacancy-cards-container').append(
          $('<div/>', {
            'class': `grid-item ${currentCategoryStr}`
          }).append(
            $('<a/>', {
              'class': `vacancy-card`,
              'href': `${currentLink}`
            }).append(
              $('<div/>', {
                'class': `vacancy-card__text-container`
              }).append(
                $('<h3/>', {
                  'class': `vacancy-card__title`,
                  'text': `${currentTitle}`
                }),
                $('<p/>', {
                  'class': `vacancy-card__city`,
                  'text': `${currentLocation}`
                }),
                $('<p/>', {
                  'class': `vacancy-card__text`,
                  'text': `${currentContent}`
                }),
              ),
              $('<p/>', {
                'class': `vacancy-card__link`,
                'text': `See Details`
              }).append(
                $('<i/>', {
                  'class': `icon arrow-right link-arrow in-grey-900`
                })
              )
            )
          )
        );
      });

    }).then(() => {
      $('.vacancy-cards-container').removeClass('vacancy-cards-container--loading');
    }).then(() => {
      // * Isotope init
      $grid.isotope({
        itemSelector: '.grid-item'
      });
    }).catch(error => {
      console.error(`Response status: ${error}`)
    })
}

$(document).ready(() => {
  doFetch('vacancy?_embed&per_page=6');
});

// * Isotope buttons logic
$('.filter-button-group').on('click', 'button', function () {
  $('.vacancy-cards-container').empty();
  $grid.isotope('destroy');
  var filterValue = $(this).attr('data-filter');
  $('.vacancy-cards-container').addClass('vacancy-cards-container--loading');
  fetch(`https://career.idapgroup.com/wp-json/wp/v2/vacancy?_embed&per_page=50`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    }).then(json => {

      let find = '&nbsp;';
      let re = new RegExp(find, 'g');

      json.map(i => {
        let currentTitle = i.title.rendered,
          currentLocation = i.acf.location,
          currentContent = i.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace(re, ""),
          currentLink = i.link,
          currentCategory = [];

        i.vacancy_category.map((value, index, array) => {
          switch (array[index]) {
            case categoriesId.mobile.id:
              currentCategory.push(categoriesId.mobile.name)
              break
            case categoriesId.frontend.id:
              currentCategory.push(categoriesId.frontend.name)
              break
            case categoriesId.backend.id:
              currentCategory.push(categoriesId.backend.name)
              break
            case categoriesId.design.id:
              currentCategory.push(categoriesId.design.name)
              break
            case categoriesId.other.id:
              currentCategory.push(categoriesId.other.name)
              break
            default:
              currentCategory.push(categoriesId.other.name)
          }
        });

        let currentCategoryStr = '';
        currentCategory = currentCategory.map((value, index, array) => {
          currentCategoryStr = currentCategoryStr + ' ' + array[index]
        });

        $('.vacancy-cards-container').append(
          $('<div/>', {
            'class': `grid-item ${currentCategoryStr}`
          }).append(
            $('<a/>', {
              'class': `vacancy-card`,
              'href': `${currentLink}`
            }).append(
              $('<div/>', {
                'class': `vacancy-card__text-container`
              }).append(
                $('<h3/>', {
                  'class': `vacancy-card__title`,
                  'text': `${currentTitle}`
                }),
                $('<p/>', {
                  'class': `vacancy-card__city`,
                  'text': `${currentLocation}`
                }),
                $('<p/>', {
                  'class': `vacancy-card__text`,
                  'text': `${currentContent}`
                }),
              ),
              $('<p/>', {
                'class': `vacancy-card__link`,
                'text': `See Details`
              }).append(
                $('<i/>', {
                  'class': `icon arrow-right link-arrow in-grey-900`
                })
              )
            )
          )
        );
      });

    }).then(() => {
      $('.vacancy-cards-container').removeClass('vacancy-cards-container--loading');
    }).then(() => {
      // * Isotope init
      $grid.isotope({
        itemSelector: '.grid-item'
      });
    }).then(() => {
      $grid.isotope({
        filter: filterValue
      });
    }).catch(error => {
      console.error(`Response status: ${error}`)
    })
  $('#career-page__show-more-btn').remove();
  $('.career-page__filter-btn').removeClass('career-page__filter-btn--active');
  $(this).addClass('career-page__filter-btn--active');
});

// * Company slider
$('.career-page__company-bullet').on('click', function () {
  $('.career-page__company-bullet').removeClass('career-page__company-bullet--active');
  $(this).addClass('career-page__company-bullet--active');
  if ($(this).attr('id') === 'career-page__company-bullet-events') {
    $('.career-page__company-img').hide();
    $('#career-page__company-img-events').show();
  } else if ($(this).attr('id') === 'career-page__company-bullet-sharing') {
    $('.career-page__company-img').hide();
    $('#career-page__company-img-sharing').show();
  } else if ($(this).attr('id') === 'career-page__company-bullet-lessons') {
    $('.career-page__company-img').hide();
    $('#career-page__company-img-lessons').show();
  }
});

// * Show more button logic
$('#career-page__show-more-btn').on('click', function () {
  $('.vacancy-cards-container').empty();
  $grid.isotope('destroy');
  doFetch('vacancy?_embed&per_page=50');
  $('#career-page__show-more-btn').remove();
});

// * Smooth anchor
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 750);
});

new Vivus('carrer-heading__svg', {
  duration: 200,
  animTimingFunction: Vivus.EASE_IN_OUT,
  file: 'https://career.idapgroup.com/wp-content/themes/idap/home-assets/assets/img/pages/career/career.svg'
}, function (obj) {
  obj.el.classList.add('finished');
});
