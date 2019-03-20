module.exports = app => {
  const schemas = {};
  // todo
  schemas.todo = {
    type: 'object',
    properties: {
      atomName: {
        type: 'string',
        ebType: 'text',
        ebTitle: 'What to do',
        notEmpty: true,
      },
      completed: {
        type: 'number',
        ebType: 'toggle',
        ebTitle: 'Completed',
      },
    },
  };
  // todo search
  schemas.todoSearch = {
    type: 'object',
    properties: {
      completed: {
        type: 'number',
        ebType: 'select',
        ebTitle: 'Completed',
        ebMultiple: false,
        ebOptionsBlankAuto: true,
        ebOptions: [
          { title: 'Imcompleted', value: 0 },
          { title: 'Completed', value: 1 },
        ],
        ebParams: {
          openIn: 'page',
          closeOnSelect: true,
        },
      },
    },
  };
  return schemas;
};
