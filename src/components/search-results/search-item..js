import React from 'react';
import PropTypes from 'prop-types';
import style from '@styles/components/search-results/search-item.scss';
import { addSpaceToNumber } from '@utils/string';

const mapRooms = {
  studio: ' Студия',
  1: ' 1-комнтаная',
  2: ' 2-комнтаная"',
  3: ' 4-комнтаная"',
  5: ' 5-комнтаная"',
  6: ' 6-комнтаная"',
};

const SearchItem = ({ item: { countRooms, mortgage, installment, price } }) => (
  <li className={style.searchItem}>
    <span>Кол-во комнат: </span>
    <span>{mapRooms[countRooms]}</span>
    <br />
    <span>Рассрочка:</span>
    <span>{installment ? ' Да' : ' Нет'}</span>
    <br />
    <span>Ипотека:</span>
    <span>{mortgage ? ' Да' : ' Нет'}</span>
    <br />
    <span>Цена: </span>
    <span>{addSpaceToNumber(price)}</span>
  </li>
);

SearchItem.propTypes = {
  item: PropTypes.shape({
    countRooms: PropTypes.string,
    mortgage: PropTypes.bool,
    installment: PropTypes.bool,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.any,
  }),
};

SearchItem.defaultProps = {
  item: {},
};

export { SearchItem };
