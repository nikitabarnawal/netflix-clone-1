import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Span = styled.span``;

const Message = ({ text }) => {
  return (
    <Container>
      <Span>{text}</Span>
    </Container>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
