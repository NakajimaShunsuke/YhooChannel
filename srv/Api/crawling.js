const request = require('request-promise')
const cheerio = require('cheerio')

// 映画.comのランキングクローリングAPI
module.exports = () => {

  const options = {
    transform: (body) => {
      return cheerio.load(body);
    }
  };

  const urls = [
    'https://eiga.com/now/all/rank/'
  ];

  const promises = urls.map((url) => {
    return (async () => {
      try {
        const titles_arr = []
        const result = []

        const $ = await request.get(url, options);

        //配列にタイトルを挿入していく
        await $('h3', '.m_unit').each((i, elem) => {
          titles_arr[i] = $(elem).text() //配列にタイトルを挿入していく
        })

        // 映画データをJSON形式に整形
        await $('p', '.m_unit').each((i, elem) => {
          result.push({
            rank: i + 1,
            title: titles_arr[i],
            overview: $(elem).text()
          })
        })

        return result;

      } catch (error) {
        console.error('Error:', error);
      }
    })();
  });

  return promises
}