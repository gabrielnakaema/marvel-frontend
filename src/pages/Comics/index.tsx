import { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card } from '../../components/Card';
import { Details } from '../../components/Details';
import { HorizontalList } from '../../components/HorizontalList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getComics } from '../../services';
import { Comic } from '../../types';
import { Subtitle } from '../Characters/styles';
import {
  ComicsDetailsDescription,
  ComicsDetailsTitle,
  ComicsPageContainer,
} from './styles';

export const ComicsPage = () => {
  const dispatch = useAppDispatch();
  const comics = useAppSelector((state) => state.comics);
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchComics() {
      const response = await getComics();
      dispatch({ type: 'comics/setComics', payload: response });
    }
    fetchComics();
  }, [dispatch]);

  const comicsElement =
    comics &&
    comics.map((comic, index) => (
      <Card
        key={comic.id}
        title={comic.title}
        description={comic.description}
        imageUrl={comic.imageUrl}
        onClickDetails={() => {
          setDetailsIndex(index);
        }}
      />
    ));

  return (
    <ComicsPageContainer>
      {detailsIndex !== null && (
        <Details
          imageUrl={comics[detailsIndex].imageUrl}
          extraInformation={<ComicsDetail comic={comics[detailsIndex]} />}
          onCloseDetails={() => setDetailsIndex(null)}
        />
      )}
      <HorizontalList listItems={comicsElement} />
    </ComicsPageContainer>
  );
};

const ComicsDetail = (props: { comic: Comic }) => {
  return (
    <>
      <ComicsDetailsTitle>{props.comic.title}</ComicsDetailsTitle>
      <ComicsDetailsDescription>
        {props.comic.description}
      </ComicsDetailsDescription>
      <Subtitle>Disponível para compra:</Subtitle>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {props.comic.availableAtLogos.map((logo) => (
          <img
            src={logo}
            alt={logo}
            style={{ width: '32px', height: '32px', borderRadius: '10px' }}
          />
        ))}
      </div>
      <Subtitle>Crítica</Subtitle>
      <StarRatingComponent
        name="critica"
        starCount={5}
        value={props.comic.rating}
      />
    </>
  );
};
