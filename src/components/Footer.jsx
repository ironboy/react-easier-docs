export default function Footer() {
  return <footer className="container-fluid mt-5">
    <a rel="noreferrer" target="_blank" href="https://github.com/ironboy/react-easier"><img alt="github" src="/github.png" /></a>
    © Ironboy, <a rel="noreferrer" target="_blank" href="https://nodehill.com">Node Hill</a> {new Date().getFullYear()}
    <a rel="noreferrer" target="_blank" href="https://www.npmjs.com/package/react-easier"><img alt="npm" src="/npm.png" /></a>
  </footer>
}