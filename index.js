
import 'dotenv/config'
import linebot from 'linebot'
import baseBall from './commands/baseBall.js'
import beauty from './commands/beauty.js'
import gossiping from './commands/gossiping.js'
import koreaStar from './commands/koreaStar.js'
import lol from './commands/lol.js'
import mobileComm from './commands/mobileComm.js'
import movie from './commands/movie.js'
import nba from './commands/nba.js'
import sex from './commands/sex.js'
import stock from './commands/stock.js'
import womenTalk from './commands/womenTalk.js'
import worldCup from './commands/worldCup.js'


const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.text.startsWith('表特')) {
    beauty(event)
  } else if (event.message.text.startsWith('八卦')) {
    gossiping(event)
  } else if (event.message.text.startsWith('NBA') || event.message.text.startsWith('nba') || event.message.text.startsWith('籃球')) {
    nba(event)
  } else if (event.message.text.startsWith('股票')) {
    stock(event)
  } else if (event.message.text.startsWith('性')) {
    sex(event)
  } else if (event.message.text.startsWith('lol') || event.message.text.startsWith('LOL') || event.message.text.startsWith('英雄') || event.message.text.startsWith('聯盟')) {
    lol(event)
  } else if (event.message.text.startsWith('棒球')) {
    baseBall(event)
  } else if (event.message.text.startsWith('女')) {
    womenTalk(event)
  } else if (event.message.text.startsWith('手機')) {
    mobileComm(event)
  } else if (event.message.text.startsWith('電影')) {
    movie(event)
  } else if (event.message.text.startsWith('韓')) {
    koreaStar(event)
  } else if (event.message.text.startsWith('足球')) {
    event.reply('./bnt/bnt.js')
    worldCup(event)
  } else {
    event.reply(`
    使用方法!\n
    輸入想要查詢的板名，就可以追最新的文章。\n
    目前提供搜尋的板有:\n
    "表特版"、"八卦版"、"NBA版"、"股票版"、"性版"、"LoL版"、"棒球版"、"女版"、"手機板"、"電影版"、"韓星版"、"足球版"\n
    EX:八卦版請輸入八卦
    `)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
