import Deco from 'components/Deco/Deco';
import NotFound from 'components/NotFound/NotFound';
import { PageContainer } from 'components/Styled/PageContainer.styled';

const NotFoundPage = () => {
  return (
    <PageContainer>
      <Deco />
      <NotFound />
    </PageContainer>
  );
};

export default NotFoundPage;
