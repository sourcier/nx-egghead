import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { getAllGames } from '../fake-api';

export function App() {
  return (
    <div className="container">
      <div className="games-layout">
        {getAllGames().map((x) => (
          <Card key={x.id} className="game-card">
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
                <Typography variant="body2" color="textSecondary" component="p">
                  {x.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="game-rating"
                >
                  <strong>Rating:</strong> {x.rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
