/* eslint-disable no-param-reassign */
import {ChangeEvent, useState} from 'react';

import {Filter} from '@/types/main';

type FiltersType = Filter[];

export const UseFilters = (
  orginalMaxPrice: number,
  orginalMinPrice: number,
) => {
  const [sizingFilters, setSizingFilters] = useState([
    {id: 1, checked: false, title: 'XS'},
    {id: 2, checked: true, title: 'X'},
    {id: 3, checked: true, title: 'M'},
    {id: 4, checked: false, title: 'L'},
    {id: 5, checked: false, title: 'XL'},
    {id: 6, checked: false, title: 'XXL'},
    {id: 7, checked: false, title: 'XXXL'},
    {id: 8, checked: false, title: 'XS'},
    {id: 9, checked: false, title: 'X'},
    {id: 10, checked: false, title: 'M'},
    {id: 11, checked: false, title: 'L'},
  ]);

  const [templateFilters, setTemplateFilters] = useState([
    {id: 1, checked: false, title: 'کارتونی'},
    {id: 2, checked: false, title: 'کارتونی'},
    {id: 3, checked: false, title: 'کارتونی'},
    {id: 4, checked: false, title: 'کارتونی'},
    {id: 5, checked: false, title: 'کارتونی'},
    {id: 6, checked: false, title: 'کارتونی'},
    {id: 7, checked: false, title: 'کارتونی'},
    {id: 8, checked: false, title: 'کارتونی'},
    {id: 9, checked: false, title: 'کارتونی'},
    {id: 10, checked: false, title: 'کارتونی'},
    {id: 11, checked: false, title: 'کارتونی'},
  ]);

  const [coloringFilters, setColoringFilters] = useState([
    {id: 1, checked: false, title: 'قرمز', color: 'red'},
    {id: 2, checked: false, title: 'قرمز', color: 'red'},
    {id: 3, checked: false, title: 'قرمز', color: 'red'},
    {id: 4, checked: false, title: 'قرمز', color: 'red'},
    {id: 5, checked: false, title: 'قرمز', color: 'red'},
    {id: 6, checked: false, title: 'قرمز', color: 'red'},
    {id: 7, checked: false, title: 'قرمز', color: 'red'},
    {id: 8, checked: false, title: 'قرمز', color: 'red'},
    {id: 9, checked: false, title: 'قرمز', color: 'red'},
    {id: 10, checked: false, title: 'قرمز', color: 'red'},
    {id: 11, checked: false, title: 'قرمز', color: 'red'},
  ]);
  const [resetFilter, setResetFilter] = useState(false);
  const [minPrice, setMinPrice] = useState(orginalMinPrice);
  const [maxPrice, setMaxPrice] = useState(orginalMaxPrice);

  const handleChangeSizingFilter = (
    filterId: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const shallowSizingFilters = [...sizingFilters];
    const targetFilter = shallowSizingFilters.find(({id}) => filterId === id);
    targetFilter.checked = event.currentTarget.checked;
    setSizingFilters([...shallowSizingFilters]);
  };

  const handleChangeTemplateFilter = (
    filterId: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const shallowTemplateFilters = [...templateFilters];
    const targetFilter = shallowTemplateFilters.find(({id}) => filterId === id);
    targetFilter.checked = event.currentTarget.checked;
    setTemplateFilters([...shallowTemplateFilters]);
  };

  const handleChangeColoringFilter = (
    filterId: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const shallowColoringFilters = [...coloringFilters];
    const targetFilter = shallowColoringFilters.find(({id}) => filterId === id);
    targetFilter.checked = event.currentTarget.checked;
    setColoringFilters([...shallowColoringFilters]);
  };

  const renderActiveFiltersStatus = (filters: FiltersType) => {
    const activeFilters = filters.filter(({checked}) => checked === true);
    if (activeFilters.length > 1) {
      return activeFilters.length;
    }
    if (activeFilters.length) {
      return activeFilters[0].title;
    }
    return null;
  };

  const removeActiveColoringFilter = (filterId: number) => {
    const shallowColoringFilters = [...coloringFilters];
    const targetFilter = shallowColoringFilters.find(({id}) => filterId === id);
    targetFilter.checked = false;
    setColoringFilters([...shallowColoringFilters]);
  };

  const removeActiveSizingFilter = (filterId: number) => {
    const shallowSizingFilters = [...sizingFilters];
    const targetFilter = shallowSizingFilters.find(({id}) => filterId === id);
    targetFilter.checked = false;
    setSizingFilters([...shallowSizingFilters]);
  };

  const removeActiveTemplateFilter = (filterId: number) => {
    const shallowTemplateFilters = [...templateFilters];
    const targetFilter = shallowTemplateFilters.find(({id}) => filterId === id);
    targetFilter.checked = false;
    setTemplateFilters([...shallowTemplateFilters]);
  };

  const getActiveFilters = (filters: FiltersType) => {
    const activeFilters = filters.filter(({checked}) => checked);
    return activeFilters;
  };

  const changeMinPriceAction = (coefficient: number) => {
    setMinPrice(
      Math.round(
        orginalMinPrice + (orginalMaxPrice - orginalMinPrice) * coefficient,
      ),
    );
  };

  const changeMaxPriceAction = (coefficient: number) => {
    setMaxPrice(
      Math.round(
        orginalMaxPrice - (orginalMaxPrice - orginalMinPrice) * coefficient,
      ),
    );
  };

  const removeAllfilters = () => {
    setResetFilter(true);
    const resetedSizingFilters = sizingFilters.map(item => {
      item.checked = false;
      return item;
    });
    const resetedColoringFilters = coloringFilters.map(item => {
      item.checked = false;
      return item;
    });
    const resetedTemplateFilters = templateFilters.map(item => {
      item.checked = false;
      return item;
    });
    setSizingFilters([...resetedSizingFilters]);
    setColoringFilters([...resetedColoringFilters]);
    setTemplateFilters([...resetedTemplateFilters]);
    setMaxPrice(orginalMaxPrice);
    setMinPrice(orginalMinPrice);
    setTimeout(() => {
      setResetFilter(false);
    }, 60);
  };

  return {
    sizingFilters,
    templateFilters,
    coloringFilters,
    minPrice,
    maxPrice,
    resetFilter,
    handleChangeSizingFilter,
    handleChangeTemplateFilter,
    handleChangeColoringFilter,
    renderActiveFiltersStatus,
    removeActiveColoringFilter,
    removeActiveSizingFilter,
    removeActiveTemplateFilter,
    getActiveFilters,
    changeMinPriceAction,
    changeMaxPriceAction,
    removeAllfilters,
  };
};
