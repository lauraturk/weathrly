class LocalStorage{
  constructor() {
    this.store = {
      city: 1
    }
  }


clear () {
  this.store = {}
}

getItem (key) {
  return this.store[key]
}

setItem (key ,value) {
  this.store.key = [value].toString()
}

setLocal() {
  global.localStorage = new LocalStorage
}
}
const something = new LocalStorage

export default something.setLocal()
