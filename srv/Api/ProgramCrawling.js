const request = require('request-promise')
const cheerio = require('cheerio')

// 映画.comのランキングクローリングAPI
module.exports = () => {

  const options = {
    transform: (body) => {
      return cheerio.load(body)
    }
  };

  // 地上波チャンネル配列
  const channel_arr = ["ＮＨＫ総合１・東京", "ＮＨＫＥテレ１・東京", "日テレ", "テレビ朝日", "ＴＢＳ", "テレビ東京", "フジテレビ", "ＴＯＫＹＯ　ＭＸ１"]

  const urls = [
    `https://tv.so-net.ne.jp/schedulesBySearch.action?stationPlatformId=0&condition.keyword=${encodeURI('プリキュア')}`
  ];

  const promises = urls.map((url) => {
    return (async () => {
      try {
        const titles_arr = []
        const tvStation_arr = []
        const date_arr = []
        const result = []
        const $ = await request.get(url, options);

        //配列にタイトルを挿入
        await $('h2', '.utileList').each((i, elem) => {
          titles_arr.push($(elem).text())
        })

        await $('p', '.utileList').each((index, elem) => {
          let result_tvStation = "地上波以外"
          // 配列にテレビ局を挿入
          channel_arr.forEach((v) => {
            let font_int = 0
            font_int = $(elem).text().indexOf(v)
            if (font_int != -1) result_tvStation = v
          })
          tvStation_arr.push(result_tvStation)
          // 配列に放送日時を挿入
          date_arr.push($(elem).text().substr(0, 27).trim())
        })

        // 番組検索結果をJSON形式に整形
        titles_arr.forEach((v, i) => {
          result.push({
            title: v,
            tvStation: tvStation_arr[i],
            date: date_arr[i]
          })
        })

        return result

      } catch (error) {
        console.error('Error:', error)
      }
    })();
  });

  return promises
}