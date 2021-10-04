import { useEffect } from 'react';
import { Card } from '../../components/Card';
import { HorizontalList } from '../../components/HorizontalList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getComics } from '../../services';
import { ComicsPageContainer } from './styles';

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

  const comicsElement =
    comics &&
    comics.map((comic) => (
      <Card
        key={comic.id}
        title={comic.title}
        description={comic.description}
        imageUrl={comic.imageUrl}
      />
    ));

  return (
    <ComicsPageContainer>
      <HorizontalList listItems={comicsElement} />
    </ComicsPageContainer>
  );
};
