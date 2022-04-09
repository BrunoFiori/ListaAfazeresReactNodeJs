class Type {
  keys = ['value', 'devValue', 'text'];
  requiredKeys = ['value'];

  /**
   * @param {Array} listOptions [{value: 'S', text: 'Sim', devValue: true}]
   */
  constructor (listOptions) {
    this.#validate(listOptions);
    this.listOptions = Object.freeze(listOptions);
  }

  /**
   * @param {String} key  [value, devValue, text]
   * @param {Mixed} value
   * @returns type {value: 'S', text: 'Sim', devValue: true}
   */
  findBy(key, value) {
    return this.listOptions.find(item => item[key] === value);
  }

  /**
   * @param {string} key 'value', 'text'
   * @returns {Array}
   */
  list(key) {
    return key ? this.listOptions.map(item => item[key]) : this.listOptions;
  }

  /**
   * @param {string} key 'value', 'text'
   * @returns {string[]}
   */
  listForValidation(key) {
    return this.listOptions.map(item => String(item[key]));
  }

  #hasDuplicatedValuesInSameKey(list) {
    for (const key of this.keys) {
      const values = list.map((item) => item[key]);
      if (!values.some(item => item)) continue;

      if (new Set(values).size !== values.length) {
        console.error(`Error: Existem valores duplicados na chave ${key}`);
      }
    }
  }

  #missingRequiredKeys(list) {
    for (const item of list) {
      const keys = Object.keys(item);
      for (const key of this.requiredKeys) {
        if (!keys.includes(key)) {
          console.error(`Error: A chave ${key} é obrigatória!`);
        }
      }
    }
  }

  #validate(list) {
    this.#hasDuplicatedValuesInSameKey(list);
    this.#missingRequiredKeys(list);
  }
}

export default Type;
