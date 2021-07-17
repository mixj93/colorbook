const fs = require('fs')
const https = require('https')
const path = require('path')
const cheerio = require('cheerio')

const URL = 'https://www.colortell.com/colorbook/?callbook=a9'

https.get(URL, (res) => {
  let html = ''
  res.on('data', (chunk) => (html += chunk))
  res.on('end', () => {
    const data = []
    const $ = cheerio.load(html)

    $('.panel').each((_, elem) => {
      // show('a9','OW047-4 飞花点翠','#F8FFF5','44355','NIPPON')
      const text = $(elem).find('.panel-heading').attr('onclick').substring(5)
      const [__, name, hex, id] = text.split("','")
      data.push({ name, hex, id })
    })

    fs.writeFile(path.join(__dirname, `../data/nippon.json`), JSON.stringify(data), 'utf8', function (err) {
      if (err) {
        console.log(`${new Date()}  [Nippon] Error occured when saving JSON data: ${err}`)
      } else {
        console.log(`${new Date()}  [Nippon] JSON data saved`)
      }
    })
  })
})
