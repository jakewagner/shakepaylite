import styled from "styled-components";

const StyledLI = styled.li`
  list-style-type: none;
`;

const ListItem = (props) => {
  return <StyledLI onClick={props.onClick}>{props.children}</StyledLI>;
};

export default ListItem;
