import { useState } from 'react';
import { Active, FilterStyled, Item, Modal, Wrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from 'constants';
import { setSearchData } from 'redux/recipes/slice';
import { selectSearchRecipes } from 'redux/recipes/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearchRecipes);
  const [modalOpened, setModalOpened] = useState(false);

  const setFilter = filter => {
    const filterName = searchFilter[filter].name;
    dispatch(setSearchData({ filter, filterName }));
    setModalOpened(false);
  };

  const handleModal = () => {
    setModalOpened(!modalOpened);
  };

  return (
    <FilterStyled>
      Search by:{' '}
      <Wrapper>
        <Active onClick={handleModal}>{search.filterName}</Active>
        {modalOpened && (
          <Modal>
            {Object.entries(searchFilter).map(([filter, value]) => (
              <Item key={filter} onClick={() => setFilter(filter)}>
                {value.name}
              </Item>
            ))}
          </Modal>
        )}
      </Wrapper>
    </FilterStyled>
  );
};

export default Filter;
