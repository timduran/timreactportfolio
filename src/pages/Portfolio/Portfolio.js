import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdatedProject1 from './UpdatedProject1.png';
import project2 from './project2.png';
import refactor from './refactor.png';
import passGen from './passGen.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

});





export default function Portfolio() {
  const classes = useStyles();

  return (

    <>

      <Grid
        container
        spacing={1}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Card className={classes.root}>
          <CardActionArea>

            <CardContent>
              <img src={UpdatedProject1} width="300" height="200" />
              <Typography gutterBottom variant="h5" component="h2">
                UpdatedProject1
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                I developed an app in a team of four people that allows for people to randomize a food and movie for thier date night.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

          </CardActions>
        </Card>

        <Box m={0.5} />

        <Card className={classes.root}>
          <CardActionArea>



            <CardContent>
              <img src={project2} width="300" height="200" />
              <Typography gutterBottom variant="h5" component="h2">
                project2
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Project2 is an app that I created with my team that allows users to post and sell products or random items that they wish to sell or trade. Also, allows the user to talk to one another through comments.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

          </CardActions>
        </Card>

        <Box m={0.5} />

        <Card className={classes.root}>
          <CardActionArea>



            <CardContent>
              <img src={passGen} width="300" height="200" />
              <Typography gutterBottom variant="h5" component="h2">
                passGen
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                passGen is a website that generates a random password for the user.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

          </CardActions>
        </Card>


        <Box m={0.5} />

        <Card className={classes.root}>
          <CardActionArea>



            <CardContent>
              <img src={refactor} width="300" height="200" />
              <Typography gutterBottom variant="h5" component="h2">
                RefactorApp
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                RefactorApp is a website that demostrates broken and after code.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

          </CardActions>
        </Card>



      </Grid>


    </>
  );
}


