import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hello, world!</h1>)

const name = 'Josh Perez'
const element = <h1>hello {name}</h1>

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
}

const element2 = <h1>Hello, {formatName(user)}!</h1>

root.render(element2)
