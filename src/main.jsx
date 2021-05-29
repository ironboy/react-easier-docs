import { mountAndImport } from 'react-easier';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/themes/prism-okaidia.css';

mountAndImport({
  component: () => import('./App'),
  rootSelector: '#root',
  globalImports: [
    'React', import('react'),
    'ReactDOM', import('react-dom'),
    import('react-easier'),
    import('react-bootstrap'),
    'marked', import('marked'),
    'Markdown', import('./components/Markdown'),
    'MainNav', import('./components/MainNav'),
    'Footer', import('./components/Footer'),
    'foutFight', import('./utilities/foutFight.js'),
    import('./utilities/copier.js'),
    'npmInfo', import('./utilities/npmInfo')
  ]
});