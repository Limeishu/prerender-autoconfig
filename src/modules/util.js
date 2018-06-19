import axios              from 'axios'
import path               from 'path'
import fs                 from 'fs'

export default class Util {
  constructor () {}
  async getDataFromApi (url, option = {}) {
    const options = {
      method: option.method || 'GET',
      url: url,
      responseType: option.responseType || 'JSON'
    }
    const res = await axios(options)
    if (!res.data.data || res.data.result !== 0) throw new Error(res.data.err || res.data.result)
    return res.data.data
  }
  writeToFile (loc, doc) {
    fs.writeFile(path.resolve(__dirname, '../' ,loc), doc, (err) => {
      if (err) throw new Error(err)
    })
  }
}