import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './app.scss';
import { getAllGames } from '../fake-api';
import { Header } from '@nx-egghead/store/ui-shared';
import { formatRating } from '@nx-egghead/store/util-formatters';

import { Route, useHistory } from 'react-router-dom';

import { StoreFeatureGameDetail } from '@nx-egghead/store/feature-game-detail';

export function App() {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="container">
        <div className="games-layout">
          {getAllGames().map((x) => (
            <Card
              key={x.id}
              className="game-card"
              onClick={() => history.push(`/game/${x.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  className="game-card-media"
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {x.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="game-rating"
                  >
                    <strong>Rating:</strong> {formatRating(x.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>

      <Route path="/game/:id" component={StoreFeatureGameDetail} />
    </>
  );
}

export default App;
