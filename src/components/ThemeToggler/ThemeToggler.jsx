import { useDispatch, useSelector } from 'react-redux';
import { Toggler } from './ThemeToggler.styled.jsx';
import { selectThemeMode } from 'redux/general/selectors.js';
import { setThemeMode } from 'redux/general/slice.js';

const ThemeToggler = ({ mode }) => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);

  const toggleTheme = () => {
    dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Toggler
      className={`theme-toggler ${themeMode}`}
      onClick={toggleTheme}
    ></Toggler>
  );
};

export default ThemeToggler;
