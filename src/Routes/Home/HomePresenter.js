import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const ScContainer = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  // HomePresenter함수는 만약 loading이 true면 null을 false면 ScContainer컴포넌트를 리턴한다.
  return loading ? null : (
    <ScContainer>
      {/* nowPlaying이 존재하는지 체크하기 위해 nowPlaying이 존재하는 동시에 길이가 0보다 클 때 Section 컴포넌트를 랜더하도록 한다. */}
      {/* react에서 children은 일반적으로 <Section> </Section> Section컴포넌트의 사이의 값을 전달 받는다. */}
      {/* 그래서 여기서는 배열인 nowPlaying을 가져와서 map()메서드를 통해 movie를 뽑아와서 그 movie의 title을 Section.js의 children에 순차적으로 전달해준다. */}
      {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing Movies">{nowPlaying.map((movie) => movie.title)}</Section>}
      {upcoming && upcoming.length > 0 && <Section title="Upcoming Movies">{upcoming.map((movie) => movie.title)}</Section>}
      {popular && popular.length > 0 && <Section title="Popular Movies">{popular.map((movie) => movie.title)}</Section>}
    </ScContainer>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
