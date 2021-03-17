module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'create a custom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/src/index.vue',
        templateFile: 'plop-template/component.hbs',
      },
      // {
      //   type: 'add',
      //   path: 'packages/{{name}}/stories/{{name}}.stories.js',
      //   templateFile: 'plop-template/component.stories.hbs',
      // },
      {
        type: 'add',
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop-template/index.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-template/package.hbs',
      },
      // {
      //   type: 'add',
      //   path: 'packages/{{name}}/README.md',
      //   templateFile: 'plop-template/README.hbs',
      // },
    ],
  });
};
