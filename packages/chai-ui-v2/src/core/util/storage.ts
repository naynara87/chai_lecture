class LocalStorage {
  static setItem<T = unknown>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem<T = unknown>(key: string): T | null {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
