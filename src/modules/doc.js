import Util                 from './util'

export default class Doc extends Util {
  constructor () {
    super()
    this.list = []
  }
  async getList (api, option) {
    this.list = await this.getDataFromApi(api, option)
    return this.list.map(ele => (ele._id))
  }
}