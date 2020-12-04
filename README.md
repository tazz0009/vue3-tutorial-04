# tt01

## Project setup
```
npm install -g @vue/cli
vue create tt01
cd tt01
npm install
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npx tailwindcss init -p
```

### tailwind.config.js
```
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

### postcss.config.js
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### ./assets/style.css
```
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/main.js
```
import './assets/style.css'
```

### vue-router
```
npm install vue-router@next
```

### marked
```
npm i marked
```

### firebase
```
npm install --save firebase
```

### vuex
```
npm install vuex@next --save
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
