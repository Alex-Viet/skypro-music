import { Link, useParams } from 'react-router-dom';
import { PLAYLISTS } from '../../playlists';

export function Category() {
  const params = useParams();
  const playlistId = PLAYLISTS.find(
    (playlist) => playlist.id === Number(params.id),
  );

  return (
    <div>
      <h1>
        Подборка
        {' '}
        {playlistId.id}
      </h1>
      <Link to="/">Назад</Link>
    </div>
  );
}
