const reactDesc = ['Fundamental', 'Cruicial', 'Core'];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
    const desc = reactDesc[genRandomInt(2)]
    return (
      <header>
        <h1>React Essentials</h1>
        <div className="card">
          {desc} React conceots you will need for almost any app you are going to build
        </div>
      </header>
    )
  }