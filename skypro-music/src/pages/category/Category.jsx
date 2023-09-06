import { Link, useParams } from 'react-router-dom';
import { PLAYLISTS } from '../../playlists';
import TemporaryStyledTitle from '../TemporaryStyles';

function Category() {
  const params = useParams();
  const playlistId = PLAYLISTS.find(
    (playlist) => playlist.id === Number(params.id),
  );

  return (
    <div>
      <TemporaryStyledTitle>
        Подборка
        {' '}
        {playlistId.id}
      </TemporaryStyledTitle>
      <Link to="/">Назад</Link>
    </div>
  );
}

export default Category;
