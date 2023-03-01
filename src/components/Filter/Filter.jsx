import { Label, Input } from './Filter.styled';
import { FaFilter } from 'react-icons/fa';
import PropTypes from 'prop-types';
export function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name <FaFilter />
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
