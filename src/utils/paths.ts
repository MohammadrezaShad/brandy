/* eslint-disable max-classes-per-file */
class Uri {
  url: string;

  route: string;

  constructor(url: string, route?: string) {
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
    static detail(id: number) {
      return new Uri(`/product/${id}`, '/brand/:id');
    }

    static home = new Uri('/product');
  };

  static card = class {
    static home = new Uri('/card');

    static info = new Uri('/card/info');

    static payment = new Uri('/card/payment');
  };
}

export default Paths;
