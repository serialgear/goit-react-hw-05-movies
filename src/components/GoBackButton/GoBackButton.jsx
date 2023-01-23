import { Button, Link, Label } from './GoBackButton.styled';
import { ImArrowLeft } from 'react-icons/im';
import PropTypes from 'prop-types';

const GoBackButton = ({ to }) => {
  return (
    <Button>
      <Link to={to}>
        <ImArrowLeft />
        <Label>Go back</Label>
      </Link>
    </Button>
  );
};
export default GoBackButton;

GoBackButton.propTypes = {
  to: PropTypes.string.isRequired,
};
