import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './store-feature-game-detail.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { formatRating } from '@nx-egghead/store/util-formatters';
import { Game } from '@nx-egghead/api/util-interfaces';

export const StoreFeatureGameDetail = () => {
  const [state, setState] = useState<{
    data: Game | null;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: null,
    loadingState: 'success',
  });
  const { id: gameId } = useParams();

  useEffect(() => {
    setState((state) => ({
      ...state,
      loadingState: 'loading',
    }));
    fetch(`/api/games/${gameId}`)
      .then((x) => x.json())
      .then((res) => {
        setState((state) => ({
          ...state,
          data: res,
          loadingState: 'success',
        }));
      })
      .catch((err) => {
        setState((state) => ({
          ...state,
          loadingState: 'error',
        }));
      });
  }, [gameId]);

  return (
    <div className="container">
      {state.loadingState === 'loading' ? (
        'Loading...'
      ) : state.loadingState === 'error' ? (
        <div>Error fetching data</div>
      ) : state.data == null ? (
        ''
      ) : (
        <Card>
          <CardActionArea>
            <CardMedia
              className="game-card-media"
              image={state.data.image}
              title={state.data.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {state.data.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="game-rating"
              >
                <strong>Rating:</strong> {formatRating(state.data.rating)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default StoreFeatureGameDetail;
