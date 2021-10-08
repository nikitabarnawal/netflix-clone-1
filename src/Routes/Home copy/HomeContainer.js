import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true,
    nowPlaying2: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      const {
        data: { results: topRated },
      } = await moviesApi.topRated();

      const {
        data: { results: nowPlaying2 },
      } = await moviesApi.nowPlaying2();

      // 여기서 주의할 점은 아래에 console.log(this.state)가 3번 실행된다.
      // 그 이유는 this.setState()함수가 실행이 되면! 리액트는 render()함수를 다시 실행하기 때문이다.
      // 그래서 컴포넌트가 생성되면서 1번, 컴포넌트가 생성된 후 try문을 실행하면서 2번, finally문을 실행하면서 3번 실행이 되는 것이다.
      // 단 리액트는 모든 것을 리랜더링하는 것이 아니라 바뀐 부분만 찾아서 리랜더링한다.
      this.setState({
        nowPlaying,
        upcoming,
        popular,
        topRated,
        nowPlaying2,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error: "Can't find Movie Information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, topRated, error, loading, nowPlaying2 } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        topRated={topRated}
        error={error}
        loading={loading}
        nowPlaying2={nowPlaying2}
      />
    );
  }
}

export default HomeContainer;
