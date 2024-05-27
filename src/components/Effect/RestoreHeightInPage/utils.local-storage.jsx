/* src\components\Effect\RestoreHeightInPage\utils.local-storage.jsx */
export class LocalStorage {
  constructor(key) {
    this.key = key;
  }

  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  retrieve() {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }

  delete() {
    localStorage.removeItem(this.key);
  }
}
