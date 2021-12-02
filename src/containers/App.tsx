import * as React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

export interface Robot {
  name: string;
  id: number;
  email: string;
}

interface AppProps {}

interface AppState {
  robots: Array<Robot>;
  searchfield: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: string) {
    super(props);
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchfield: event.currentTarget.value });
  };

  render(): JSX.Element {
    const { robots, searchfield } = this.state;
    const filteredRobots: Array<Robot> = robots.filter((robot: Robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
