### React Easier!
**react-easier** aims to take the cruft out of developing with React. 

* Why should reacting on changes to state variables, binding of state variables to form elements, conditional logic and other things  be harder to do in React than in other frameworks?
* They shouldn't and **react-easier** makes sure they aren't 😊. 

#### Install
Install the latest stable version (//version//) of **react-easier** in your React project:

```js
npm i react-easier
```

##### Small and dependency free
Version //version// of **react-easier** is small, //size// (~//gzipped// gzipped), and dependency free. 

(More size details on [bundlephobia.com](https://bundlephobia.com/result?p=react-easier@//version//).)


##### Works with both Create React App and Vite
All the components and features included in **react-easier** have been tested and work with both [Create React App](https://create-react-app.dev/) and [Vite](https://vitejs.dev/) as dev/build tools.

### If/Else/ElseIf
The components **If**, **Else** and **ElseIf** work together to give you a more declarative way of writing conditional logic in your *jsx*.

#### How?
* **If** is written with the **c** (as in condition) property. If what you put here, the condition, is truthy the code inside will render.

```jsx
<If c={someThingTrueOrFalse}>
  Things to show if true
</If>
```

* **ElseIf** also has a **c** property. It will render if the condition is truthy **and** the If-condition was not.
* **Else** does not have any property. It will render if the **If** (and **ElseIf**:s if present) did not.

##### Important: ElseIf and Else goes inside an If
Put your **ElseIf** and **Else**-statements inside the **If**-statement they belong to:

```jsx
import {If, Else, ElseIf} from 'react-easier';

export default function MyComponent() {

  // This is an Australian app :)
  // Spring - Sep, Oct, Nov
  // Summer - Dec, Jan, Feb
  // Autumn - Mar, Apr, May
  // Winter - Jun, Jul, Aug
  let month = new Date().getMonth() + 1; // 1-12

  return <div>
    <If c={[9, 10, 11].includes(month)}>
      Spring is in the air!
      <ElseIf c={[12, 1, 2].includes(month)}>
        Summertime and the livin' is easy!
      </ElseIf>
      <ElseIf c={[3, 4, 5].includes(month)}>
        Autumn leaves start to fall!
      </ElseIf>
      <Else>
        Winter is cold!
      </Else>
    </If>
  </div>;
}
```

### withLoop
The [HOC](https://reactjs.org/docs/higher-order-components.html) **withLoop** can be used to make components you want to show in a list loopable.

#### How?
Export your the component you want to loop wrapped with **withLoop**:

```jsx
import { withLoop } from 'react-easier';

export default withLoop(MyItem);

function MyItem({ name }) {
  return <p className="item">{name}</p>
}
```

Now you can loop it inside another component (without having to use the array method **map**), by setting the **loop** property to the list you want to loop through and the **forKey** to the property from the objects in that list you want to use as a key:

```jsx
<MyItem loop={items} forKey="id" />
```

##### Note:
The **forKey** property is optional. If you omit it the array index of the item will be used as a key instead. This *is ok* since react-easier adds a key, but a real id is preferable:

```jsx
<MyItem loop={items}/>
```

#### An example
As this example shows the component does not lose any functionality from being made loopable. You can still use it as normal too:

```jsx
export default function MyComponent() {

  let items = [
    { id: 1, name: 'Browser' },
    { id: 2, name: 'Server' },
    { id: 3, name: 'Framework' }
  ];

  return <>
    {/* This shows the three items */}
    <MyItem loop={items} forKey="id" />

    {/* But you can still use MyItem without any loop too */}
    <MyItem {...{ name: 'react-easier' }} />
  </>;
}
```


### prevent
The **prevent** feature calls [event.preventDefault](https://reactjs.org/docs/handling-events.html) before your own event handler runs.

A classic example of where we use *event.preventDefault* in React is during form processing: You want an event handler to run on submit, but you *don't* want the submit event to reload your application.

For those of us who think that it is easier to remember to do this when we bind our event handler in jsx, rather than inside the event handler, **prevent** comes to the rescue.

#### How?
We don't have to write *event.preventDefault()* inside our submit event handler if we do:

```jsx
import {prevent} from 'react-easier';

// In your jsx:
<form onSubmit={prevent(sendData)}>
```

##### With prevent
```jsx
const sendData = () => {
  // process form data and (maybe) send via fetch
}

return <div>
  <form onSubmit={prevent(sendData)}>
    {/* some input fields here */}
  </form>
</div>;
```

##### Traditional syntax without prevent
```jsx
const sendData = event => {
  event.preventDefault();
  // process form data and (maybe) send via fetch
}

return <div>
  <form onSubmit={sendData}>
    {/* some input fields here */}
  </form>
</div>;
```

### useStates
The **useStates** hook is an easy drop in replacement for the [**useState** hook](https://reactjs.org/docs/hooks-state.html) that lets you handle state variables and binding to input fields in a much easier way.

#### How?
Create an object that contains all your state variables as properties:
```jsx
const s = useStates({
  name: 'Jane Doe',
  age: 25,
  favoriteColor: 'green'
});
```
Of course you can use arrays and objects etc as values too (and nest them).
*As soon as you change the value of a property React will re-render!*

##### Binding
Use the following syntax to bind your state variables to input fields (thus creating [**controlled components**](https://reactjs.org/docs/forms.html)).

```jsx
<input type="text" placeholder="Your name" {...s.bind('name')} />
```

For radio button the bind method has a second argument - the value the variable should have in order for the radio button to be checked. See the example below:

```jsx
import { useStates } from 'react-easier';

export default function MyComponent() {

  const s = useStates({
    name: 'Jane Doe',
    age: 25,
    favoriteColor: 'green'
  });

  return <div>
    <p>
      <input type="text" placeholder="Your name" {...s.bind('name')} />
    </p>
    <p>
      <input type="text" placeholder="Your age" {...s.bind('age')} />
    </p>
    <p>
      Favorite color:
      <label>&nbsp;
        <input type="radio" {...s.bind('favoriteColor', 'red')} /> red
      </label>
      <label>&nbsp;
        <input type="radio" {...s.bind('favoriteColor', 'green')} /> green
      </label>
      <label>&nbsp;
        <input type="radio" {...s.bind('favoriteColor', 'blue')} /> blue
      </label>
    </p>
    <h3>
      Hello! My name is {s.name || 'Unknown'} 
      and I am {s.age || 'many'} years old.
      <br />
      My favorite color is {s.favoriteColor}.
    </h3>
    <p>
      <button onClick={() => s.age++}>Make me older</button>
    </p>
  </div>;
}
```

### withContext + useNamedContext
The [HOC](https://reactjs.org/docs/higher-order-components.html) **withContext** works together with the hook **useNamedContext** and lets you create and consume [React Contexts](https://reactjs.org/docs/context.html) in an easy way.

#### What's a context?
A context is React's idea of a global store -- state variables that can be reached inside any component.

* Actually a context does not have to be global -- it spans over the component that is wrapped in it and the subcomponents of that component.
* If you wrap your whole **App** in a context -- then it's a global context.
* You can use several **contexts** in your application if you need to.

Setting up a context can be a bit complicated but **withContext + useNamedContext** make it easy!

#### How?
Let's set up a global context in your **App** component:

```jsx
import { withContext, useNamedContext } from 'react-easier';

export default withContext(
  // Give the context a name
  'global',
  // Variables/properties in your context
  {
    darkThemeOn: false,
    loggedInUser: null
  },
  // Your component (that the context wraps around)
  App
);

function App() {

  // Connect to - "consume" the context
  const g = useNamedContext('global');

  // Now you can reach your variables
  // g.darkThemeOn and g.loggedInUser in your code
  
  // If you change them React will re-render
}
```

#### What's the point?
Ok, so far this seems to work exactly like [**useStates**](#useStates) -- only with a bit more setup? That's true -- in a way -- you can change the context variables and React will re-render. And if you are only going to use them in *one* component there is no point -- just use **useStates** instead.

**But** the point is that *you can reach the context in any subcomponent* of **App**:

```jsx
import { useNamedContext } from 'react-easier';

export default function SomeComponent(){

  // Connect to - "consume" the context
  const g = useNamedContext('global');

  // Now you can reach your variables
  // g.darkThemeOn and g.loggedInUser in your code
  
  // If you change them React will re-render
}
```

This saves a lot of development time compared to having to do deep [prop-drilling](https://kentcdodds.com/blog/prop-drilling) of values you want several components to be able to reach!

### Single File Components
The **SFC** (*Single File Component*) feature allows you to include your css inside your component.


#### How?
*Return* a **SFC** component from your component. 

* In the property **template** you write your template (the main *jsx* for the  component).
* In the property **style** you write your css.

```jsx
import {SFC} from 'react-easier';

export default function MyComponent() {

  // Your JS logic goes here...

  // Then return a SFC with your template and style
  return <SFC

    template=
    {<>
      <h1>Welcome!</h1>
      <p>This is my component</p>
    </>}

    style=
    {/*css*/`

```

```css
      @global {
        body {
          margin: 0
        }
      }

      h1 {
        color: blue;
      }

    `}

  />;
}
```

##### Important: Scoped styling!
The css will only be applied to elements inside your component! It is scoped. If you want to write css that gets applied to the whole HTML document you can use **@global**:

```css
@global {
  /* My global styling goes here */
}
```

##### Tip: Syntax highlighting your css
If you are using Visual Studio Code you can install [es6-string-css](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css) that will give you nice syntax highlighting of your css if you write **/\*css\*/** just before the backtick where the style section starts (like in the example above).

### mountAndImport
The **mountAndImport** feature allows you to start your React application by mounting the component that you want, where you want it, in your HTML.


#### The power of global imports
The **mountAndImport** feature also allows **global imports** of modules you often use. When the modules have been imported globally *you don't need to import them in other files where you want to use them*!

You will also import *all named imports* with each module. When you import React,  not only **React** becomes a global, but also **useState**, **useEffect** etc.

##### Note
Be wise when/if you use global imports. Maybe just the most commonly used modules should be global? There is a risk that different libraries have identically named modules. But you can always fix this by using "as" to rename a module (see below).

#### How?
Replace the content of the file that mounts your React app (*src/index.js* in CRA, */src/main.jsx* in Vite) with the following:

```jsx
import { mountAndImport } from 'react-easier';

mountAndImport({
  // the module that starts your app
  component: () => import('./App'),
  // a selector for the html element to mount it in
  rootSelector: '#root',
  // import all modules you want to be global
  globalImports: [
    'React', import('react'),
    'ReactDOM', import('react-dom'),
    import('react-easier'),
    // import('react-router-dom'),
    // 'BrowserRouter as Router',
    /////// your own ones too if you want ///////
    // 'MainNav', import('./components/MainNav')
  ]
});
```

##### Syntax within the import block

This is the syntax for modules that export defaults:

```jsx
'React', import('react')
 ```

This is the syntax for modules with only named exports:

```jsx
import('react-router-dom')
```

And if you want to change an exported name, you use **as**:

```js
'BrowserRouter as Router'
```

#### Important: Settings in Create React App
**Create React App** uses [ESLint](https://eslint.org/) with a set of linting rules meant to make React development easier.

Among those rules is one that throws an error and makes CRA refuse to compile if you use global variables, because they are seen as undeclared variables by the linter.

##### How do I solve this?
Add a file named **.eslintrc.json** at the root of your project with an override of this particular rule. This will allow you to use **global imports**:

```json
{
  "extends": [
    "react-app"
  ],
  "overrides": [
    {
      "files": [
        "**/*.js?(x)"
      ],
      "rules": {
        "no-undef": "off"
      }
    }
  ]
}
```