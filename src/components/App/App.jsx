import { useDispatch, useSelector } from 'react-redux';
import { MainContainer } from './App.styled';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Loader } from 'components/Loader/Loader';
import { refreshUser } from 'redux/user/operations';
import { getCategories } from 'redux/recipes/operations';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/user/selectors';
import { selectIsLoading } from 'redux/loader/selectors';
import { selectThemeMode } from 'redux/general/selectors';
import { mediaSizes } from 'constants';
import { setDeviceType } from 'redux/general/slice';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const RecipePage = lazy(() => import('pages/RecipePage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const themeMode = useSelector(selectThemeMode);
  const loggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!loggedIn) {
      dispatch(refreshUser());
    }
  }, [dispatch, loggedIn, isRefreshing]);

  useEffect(() => {
    if (loggedIn) {
      dispatch(getCategories());
    }
  }, [dispatch, loggedIn]);

  useEffect(() => {
    const handleResize = () => {
      let deviceType = 'mobile';

      if (window.innerWidth >= parseInt(mediaSizes.desktop)) {
        deviceType = 'desktop';
      } else if (window.innerWidth >= parseInt(mediaSizes.tablet)) {
        deviceType = 'tablet';
      }

      dispatch(setDeviceType(deviceType));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loader />}
      {isLoading && <Loader />}

      {!isRefreshing && (
        <MainContainer className={`theme ${themeMode}`}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  isLoggedIn ? (
                    <RestrictedRoute
                      redirectTo="/main"
                      component={<HomePage />}
                    />
                  ) : (
                    <HomePage />
                  )
                }
              />
              <Route
                path="signin"
                element={
                  <RestrictedRoute redirectTo="/" component={<LoginPage />} />
                }
              />
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    redirectTo="/main"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="main"
                element={
                  <PrivateRoute redirectTo="/signin" component={<MainPage />} />
                }
              />
              <Route
                path="categories"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<CategoriesPage />}
                  />
                }
              />
              <Route
                path="categories/:category"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<CategoriesPage />}
                  />
                }
              />
              <Route
                path="add"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<AddRecipePage />}
                  />
                }
              />
              <Route
                path="my"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<MyRecipesPage />}
                  />
                }
              />
              <Route
                path="recipe/:recipeId"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<RecipePage />}
                  />
                }
              />
              <Route
                path="shopping-list"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<ShoppingListPage />}
                  />
                }
              />
              <Route
                path="search"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<SearchPage />}
                  />
                }
              />
              <Route
                path="favorite"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<FavoritePage />}
                  />
                }
              />
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </MainContainer>
      )}
    </>
  );
};

export default App;
