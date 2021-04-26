/* eslint-disable max-classes-per-file */
class Uri {
  constructor(url, route) {
    this.url = url;
    this.route = route || url;
  }

  getRoute() {
    return this.route;
  }

  getPath() {
    return this.url;
  }

  getAbsoulteUri() {
    return process.env.DOMAIN + this.url;
  }
}

class Paths {
  static home = new Uri('/');

  static product = class {
    static detail(id) {
      return new Uri(`/product/${id}`, '/brand/:id');
    }

    static home = new Uri('/product');
  };
}

export default Paths;
