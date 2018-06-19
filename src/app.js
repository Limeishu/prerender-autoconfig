import Doc              from './modules/doc'
import originConfig     from '../config-sample.json'

const doc = new Doc()

const app = {
  writeFile: async (url, uri) => {
    const res = await doc.getList(url)
    originConfig.prerenderOption.path.push(...res.map(ele => (`${uri}${ele}`)))
    doc.writeToFile(originConfig.configPath, JSON.stringify(originConfig))
  }
}

app.writeFile('https://api.limeishu.org.tw/news', '/culture/news/')
app.writeFile('https://api.limeishu.org.tw/creation', '/intro/museum/')
