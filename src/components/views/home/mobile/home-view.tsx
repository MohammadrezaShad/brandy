import React, {FC} from 'react';

import HomeCategories from './home-categories';
import HomeProductsCategory from './home-products-category';
import HomeProductsList from './home-products-list';
import HomeSpecialOffer from './home-special-offer';
import HomeTop from './home-top/home-top';

const HomeView: FC = () => (
  <div>
    <HomeTop />
    <HomeSpecialOffer />
    <HomeCategories />
    <HomeProductsCategory />
    <HomeProductsList />
  </div>
);

export default HomeView;
