import { useSelector } from 'react-redux';
import { PaginationStyled, PaginationWrapper } from './Pagination.styled';
import { selectDeviceType } from 'redux/general/selectors';

export const Pagination = ({ total, page, handlePage }) => {
  const deviceType = useSelector(selectDeviceType);

  return (
    total > 1 && (
      <PaginationWrapper>
        <PaginationStyled
          count={total}
          page={page}
          siblingCount={deviceType === 'mobile' ? 1 : 2}
          size={deviceType === 'mobile' ? 'small' : 'medium'}
          onChange={(_, newPage) => handlePage(newPage)}
        />
      </PaginationWrapper>
    )
  );
};

export default Pagination;
