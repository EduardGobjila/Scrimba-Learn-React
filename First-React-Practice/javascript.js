// function MainContent () {
//   return (
//     <h1>I am learning React</h1>
//   )
// }

// ReactDOM.render(
//   <MainContent />,
//   document.getElementById("root")
// )

// ReactDOM.render(<h1>Hi</h1>, document.getElementById("root"))


const nav = (
  <nav>
    <h1>Scrimba</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(
  nav,
  document.getElementById("root")
)
