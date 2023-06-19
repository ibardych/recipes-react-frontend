import { NotFoundStyled } from './NotFound.styled';
import bgSVG from 'images/page-not-found.svg';

const NotFound = () => {
  return (
    <NotFoundStyled>
      <img src={bgSVG} alt="page not found" />
      <div>
        <strong>We are sorry,</strong>
        <span>but the page you were looking for can’t be found..</span>
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
