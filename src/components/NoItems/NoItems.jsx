import img from 'images/no-items@2x.png';
const { NoItemsStyled } = require('./NoItems.styled');

const NoItems = ({ children }) => {
  return (
    <NoItemsStyled>
      <img src={img} alt="no items" />
      {children}
    </NoItemsStyled>
  );
};

export default NoItems;
