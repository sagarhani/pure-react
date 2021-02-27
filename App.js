const element = React.createElement;

const App = () => {
  return React.createElement("h3", {}, "Pure React", element(GreetUser));
};

const GreetUser = () => {
  const [userName, setUserName] = React.useState("");
  const onInputChangeHandler = e => {
    setUserName(e.target.value);
  };

  return element("div", {}, [
    element("input", { value: userName, onChange: onInputChangeHandler }, null),
    element("p", {}, `Hello ${userName}`)
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
