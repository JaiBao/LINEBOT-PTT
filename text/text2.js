// import axios from 'axios'
// import * as cheerio from 'cheerio'
// import bubble from '../templates/bubble.js'

// const aa = async () => {
//   try {
//     const { data } = await axios.get('https://www.ptt.cc/bbs/WorldCup/index.html', {
//       headers: {
//         'Accept-Encoding': 'world/html'
//       }
//     })
//     const $ = cheerio.load(data)

//     const worldCup = []
//     $('.r-list-container .r-ent').each(function () {
//       const bubbleTemp = JSON.parse(JSON.stringify(bubble))
//       bubbleTemp.body.contents[0].text = $(this).find('.title a').text().trim()
//       if (worldCup.length >= 12) return false
//       if ($(this).find('.title a').attr('href') === undefined) return
//       else {
//         bubbleTemp.footer.contents[0].action.uri = 'https://www.ptt.cc/' + $(this).find('.title a').attr('href')
//       }
//       worldCup.push(bubbleTemp)
//       console.log(bubbleTemp.footer.contents[0].action.uri)
//     })

//     const reply = {
//       type: 'flex',
//       altText: '足球',
//       contents: {
//         type: 'carousel',
//         contents: 'worldCup'
//       }
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }
// aa()
