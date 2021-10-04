import { useEffect } from 'react';
import { Card } from '../../components/Card';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getComics } from '../../services';

export const ComicsPage = () => {
  const dispatch = useAppDispatch();
  const comics = useAppSelector((state) => state.comics);

  useEffect(() => {
    async function fetchComics() {
      const response = await getComics();
      dispatch({ type: 'comics/setComics', payload: response });
    }
    fetchComics();
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '5rem',
        overflowX: 'auto',
      }}
    >
      {comics.map((comic) => (
        <Card
          key={comic.id}
          title={comic.title}
          description={comic.description}
          imageUrl={comic.imageUrl}
        />
      ))}
    </div>
  );
};
