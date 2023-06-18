import CategoryNavi from 'components/CategoryNavi/CategoryNavi';
import CategoryRecipes from 'components/CategoryRecipes/CategoryRecipes';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';
import { useState } from 'react';

const Categories = () => {
  const [resetePage, setResetPage] = useState(false);

  const changeCategory = () => {
    setResetPage(true);
  };

  return (
    <>
      <PageContainer>
        <PageTitle>Categories</PageTitle>
        <CategoryNavi changeCategory={changeCategory} />
        <CategoryRecipes resetePage={resetePage} setResetPage={setResetPage} />
      </PageContainer>
    </>
  );
};

export default Categories;
