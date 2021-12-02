import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { commentPostTypes } from 'types/commentTypes';
import Comments from 'components/Comment';

import LanguageSwithcer from './components/LanguageSwitcher';

import './App.css';

function App({ postComment }) {
  const [comment, setComment] = useState('');
  const { t } = useTranslation('translation');

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const addComment = (e) => {
    if (e.key === 'Enter') {
      const body = {
        author: 'Aysel Amrahli',
        text: comment,
      };

      dispatch({ type: commentPostTypes.POST, body });
      // postComment(body);

      setComment('');
    }

    if (e.key === 'Escape') setComment('');
  };

  return (
    <div className='App'>
      <LanguageSwithcer />

      <h1>{t('title')}</h1>
      <Comments />

      <div>
        <form>
          <textarea
            value={comment}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => addComment(e)}
            placeholder={t('fields.comment')}
          ></textarea>
        </form>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({ ...state.comments });
// const mapDispatchToProps = (dispatch) => ({
//   postComment: (body) => dispatch({ type: COMMENTS.POST, body }),
// });

export default App;
