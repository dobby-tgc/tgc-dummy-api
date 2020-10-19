const fs = require('fs').promises
const path = require('path')

class JsonModel {
  constructor(basePath, name, schema) {
    this.path = path.join(basePath, `${name}.json`)
    this.schema = schema
    fs.access(this.path).catch(() => fs.writeFile(this.path, '[]', 'utf-8'))
  }

  async _read() {
    const json = await fs.readFile(this.path, 'utf-8')
    return JSON.parse(json)
  }

  async _write(data = []) {
    const json = JSON.stringify(data, null, 2)
    return fs.writeFile(this.path, json, 'utf-8')
  }

  async create(input) {
    const saved = await this._read()
    const id = Date.now()
    await this._write(saved.concat({ id, ...input }))
    return id
  }

  async find() {
    const saved = await this._read()
    return saved
  }

  async findOne(id) {
    const saved = await this._read()
    return saved.find((e) => e.id === Number(id))
  }

  async updateOne(id, input = {}) {
    const saved = await this._read()
    const changed = saved.map((e) => {
      if (e.id !== Number(id)) return e
      return { ...e, ...input }
    })
    await this._write(changed)
  }

  async deleteOne(id) {
    const saved = await this._read()
    await this._write(saved.filter((e) => e.id !== Number(id)))
  }

  async init(items = []) {
    await this._write([])
    items.reduce(async (p, item) => {
      await p
      return this.create(item)
    }, Promise.resolve())
  }
}

module.exports = JsonModel
