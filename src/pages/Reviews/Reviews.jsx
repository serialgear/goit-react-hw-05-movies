import { useState, useEffect } from 'react';
import { getReviewsInfo } from '../../services/moviesAPI';
import { useParams } from 'react-router-dom';
import { ImSad } from 'react-icons/im';
import {
  ReviewsBox,
  List,
  Item,
  Name,
  Label,
  Span,
  NotReviews,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsInfo(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviewsBox>
      {reviews?.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <Item key={id} className="item">
                <Name>
                  Author: <Span>{author}</Span>
                </Name>
                <Label> {content}</Label>
              </Item>
            );
          })}
        </List>
      ) : (
        <NotReviews>
          <ImSad />
          We don`t have any reviews for this movie.
        </NotReviews>
      )}
    </ReviewsBox>
  );
};

export default Reviews;
