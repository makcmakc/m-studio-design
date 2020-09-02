import anime from 'animejs/lib/anime.es.js'

documen.addEventListener('DOMContentLoaded', () => {

  const collectionsLink = document.querySelector('#collections-link')
  const newLink = document.querySelector('#new-link')
  const trendingLink = document.querySelector('#trending-link')
  const popularLink = document.querySelector('#popular-link')

  const linkArray = [collectionsLink, newLink, trendingLink, popularLink]

  linkArray.forEch(link => {
    link.addEventListener('click', () => {
      switch (link) {
        case collectionsLink:
        case newLink:
        case trendingLink:
        case popularLink:
      }
    })
  })
})