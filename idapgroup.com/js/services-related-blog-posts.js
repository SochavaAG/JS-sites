// * Filtered by tags query to WP db
let query = 'https://idapgroup.com/blog/wp-json/wp/v2/posts?tags='
/*const INDEXQUERY = 'https://idapgroup.com/blog/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=15'*/
const INDEXQUERY = 'JSON/JSON.json'
const EMBED = '&_embed'

// ! PRODUCTION: Replace slice(6, -1) with slice(1, -1)
const URL = window.location.pathname.slice(1, -1)

const TAGS = {
  enterpriseMobileDevelopment: {
    id: 284,
    url: 'enterprise-mobile-development'
  },
  customCrm: {
    id: 273,
    url: 'custom-crm'
  },
  softwareDevelopment: {
    id: 285,
    url: 'software-development'
  },
  dedicatedTeam: {
    id: 286,
    url: 'dedicated-team'
  },
  mobileApplicationDevelopment: {
    id: 275,
    url: 'mobile-application-development'
  },
  iosApplicationDevelopment: {
    id: 282,
    url: 'ios-application-development'
  },
  androidApplicationDevelopment: {
    id: 283,
    url: 'android-application-development'
  },
  liveStreamingAppDevelopment: {
    id: 288,
    url: 'live-streaming-app-development'
  }
}

const CAT = {
  business: {
    id: 299,
    name: 'BUSINESS'
  },
  code: {
    id: 193,
    name: 'CODE'
  },
  idap: {
    id: 191,
    name: 'IDAP'
  },
  industry: {
    id: 190,
    name: 'INDUSTRY'
  },
  liveStreaming: {
    id: 300,
    name: 'LIVE STREAMING'
  },
  outsourcing: {
    id: 301,
    name: 'OUTSOURCING'
  },
  technologiesExplained: {
    id: 302,
    name: 'TECHNOLOGIES EXPLAINED'
  },
  UNKNOWN: {
    id: null,
    name: 'UNKNOWN'
  }
}

const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

let $carousel = $('.services-blog-owl-carousel')
let cardsPosition = []

// * Make url-request by tag
switch (URL) {
  case TAGS.enterpriseMobileDevelopment.url:
    query += TAGS.enterpriseMobileDevelopment.id + EMBED
    break
  case TAGS.customCrm.url:
    query += TAGS.customCrm.id + EMBED
    break
  case TAGS.softwareDevelopment.url:
    query += TAGS.softwareDevelopment.id + EMBED
    break
  case TAGS.dedicatedTeam.url:
    query += TAGS.dedicatedTeam.id + EMBED
    break
  case TAGS.mobileApplicationDevelopment.url:
    query += TAGS.mobileApplicationDevelopment.id + EMBED
    break
  case TAGS.iosApplicationDevelopment.url:
    query += TAGS.iosApplicationDevelopment.id + EMBED
    break
  case TAGS.androidApplicationDevelopment.url:
    query += TAGS.androidApplicationDevelopment.id + EMBED
    break
  case TAGS.liveStreamingAppDevelopment.url:
    query += TAGS.liveStreamingAppDevelopment.id + EMBED
    break
  case '':
    query = INDEXQUERY + EMBED
    break
  default:
    console.error('error: No avaible query for current page!')
    break
}

$(function () {
  $carousel.owlCarousel({
    autoplay: false,
    autoplayHoverPause: true,
    dots: true,
    slideTransition: 'ease-in-out',
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  })

  $('.services-blog-card').addClass('services-blog-card--loading')

  fetch(query).then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Network response was not ok.')
  }).then((response) => {
    // * Add link
    $('.services-blog-card').each(function (index, element) {
      if (typeof response[index] !== 'undefined') {
        $(element).attr('href', response[index].link)
      }
    })
    // * Add img
    $('.services-blog-card__block-img').each(function (index, element) {
      if (typeof response[index] !== 'undefined') {
        $(element).css({
          'background-image': 'url(' +
            response[index].jetpack_featured_media_url +
            ')'
        })
      }
    })
    // * Add subject
    $('.services-blog-card__block-subject').each(function (index, element) {
      if (typeof response[index] !== 'undefined') {
        switch (response[index].categories[0]) {
          case CAT.business.id:
            $(element).append(CAT.business.name)
            break
          case CAT.code.id:
            $(element).append(CAT.code.name)
            break
          case CAT.idap.id:
            $(element).append(CAT.idap.name)
            break
          case CAT.industry.id:
            $(element).append(CAT.industry.name)
            break
          case CAT.liveStreaming.id:
            $(element).append(CAT.liveStreaming.name)
            break
          case CAT.outsourcing.id:
            $(element).append(CAT.outsourcing.name)
            break
          case CAT.technologiesExplained.id:
            $(element).append(CAT.technologiesExplained.name)
            break
          default:
            $(element).append(CAT.UNKNOWN.name)
            break
        }
      }
    })
    // * Add title
    $('.services-blog-card__block-title').each(function (index, element) {
      if (typeof response[index] !== 'undefined') {
        $(element).append(response[index].title.rendered)
      }
    })
    // * Add date
    $('.services-blog-card__block-footer-date').each(function (
      index,
      element
    ) {
      if (typeof response[index] !== 'undefined') {
        let strDate = new Date(response[index].date)
        $(element).append(
          strDate.getDate(),
          ' ',
          MONTH[strDate.getMonth()],
          ' ',
          strDate.getFullYear()
        )
      }
    })
    // * Add text
    // ! No article text for now
    // $(".services-blog-card__block-text").each(function(index, element) {
    //   if (typeof responseLocal.data[index] !== "undefined") {
    //     $(element).append(responseLocal.data[index].excerpt.rendered);
    //   }
    // });
    // * Add views
    // $('.services-blog-card__block-footer-views').each(function (
    //   index,
    //   element
    // ) {
    //   if (typeof response[index] !== 'undefined') {
    //     $(element).append(
    //       response[index].metadata.post_views_count[0] + ' views'
    //     )
    //   }
    // })
  }).then(() => {
    // * Remove empty cards
    $('.services-blog-card__block-title').each(function (index, element) {
      if ($(element).text() === '') {
        cardsPosition.push(index)
        $carousel
          .trigger('remove.owl.carousel', cardsPosition)
          .trigger('refresh.owl.carousel')
      }
    })
  }).then(() => {
    $('.services-blog-card').addClass('services-blog-card--loaded')
    $('.services-blog-card').removeClass('services-blog-card--loading')
  }).catch((error) => {
    console.error('There has been a problem with your fetch operation: ' + error.message)
  })
})
