export default function Footer() {
  return <footer className="container-fluid mt-5">
    <a target="_blank" href="https://github.com/ironboy/react-easier"><img src="/github.png" /></a>
    © Ironboy, <a target="_blank" href="https://nodehill.com">Node Hill</a> {new Date().getFullYear()}
    <a target="_blank" href="https://www.npmjs.com/package/react-easier"><img src="/npm.png" /></a>
  </footer>
}