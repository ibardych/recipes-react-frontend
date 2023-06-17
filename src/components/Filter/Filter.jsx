import { useState } from 'react';
import { Active, FilterStyled, Item, Modal, Wrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from 'redux/user/selectors';
import { setSearch } from 'redux/user/slice';
import { searchFilter } from 'constants';

const Filter = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const [modalOpened, setModalOpened] = useState(false);

  const setFilter = filter => {
    dispatch(setSearch({ ...search, filter }));
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
