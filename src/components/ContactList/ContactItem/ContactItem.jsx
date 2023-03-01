import { Li, DeleteButton } from './ContactList.styled';

export function ContactItem({ id, name, number, removeContact }) {
  return (
    <Li>
      {name}: {number}
      <DeleteButton type="button" onClick={() => removeContact(id)}>
        Delete
      </DeleteButton>
    </Li>
  );
}
