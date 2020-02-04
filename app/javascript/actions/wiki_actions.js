import * as WikiApiUtil from '../utils/wiki_api_util'

export const RECEIVE_WIKI = 'RECEIVE_WIKI'

const receiveWikiArticle = (wiki, artistId) => ({
  type: RECEIVE_WIKI,
  wiki,
  artistId
})

export const fetchWiki = (wiki, artistId) => dispatch => WikiApiUtil.fetchWikiIntro(wiki)
  .then(
    article => dispatch(receiveWikiArticle(article, artistId)),
    errors => {
      console.log('fetchWikiErrors')
      console.log(errors)
    }
  )
