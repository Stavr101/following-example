import {
  Card,
  Logo,
  Image,
  Line,
  Avatar,
  Ellipse,
  Wrap,
  Text,
  Button,
} from './FollowerCard.module';
import '../images/logo.png';

const FollowerCard = ({ user, toggleFollow }) => {
  return (
    <Card>
      <Logo src={require('../images/logo.png')} alt="GoIT" />
      <Image src={require('../images/hero.png')} alt="tweets" />
      <Line />
      <Ellipse>
        <Avatar src={user.avatar} alt={user.user} width={80} />
      </Ellipse>
      <Wrap>
        <Text>{user.tweets} tweets</Text>
        <Text>{user.followers.toLocaleString('en-US')} Followers</Text>
      </Wrap>
      <Button onClick={() => toggleFollow(user.id)} isFollow={user.isFollow}>
        {user.isFollow ? 'Following' : 'Follow'}
      </Button>
    </Card>
  );
};
export default FollowerCard;
