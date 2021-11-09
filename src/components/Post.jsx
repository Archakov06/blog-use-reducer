import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Post = ({ id, image, title, text, onRemove }) => {
  return (
    <Card style={{ marginBottom: 30 }} fullWidth>
      <CardMedia component="img" alt="green iguana" height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/post/${id}`}>
          <Button size="small">Просмотр</Button>
        </Link>

        <Button onClick={() => onRemove(id)} size="small" color="error">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};
