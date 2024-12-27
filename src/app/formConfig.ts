export const timer = [
  {
    name: 'Rich Text Section',
    fields: [
      {
        code: 'instructions',
        dataType: 'text',
        description: 'Name of the Instruction',
        showInfo: true,
        editable: true,
        inputType: 'richtext',
        label: 'Instructions',
        name: 'Instruction',
        placeholder: 'Enter instructions',
        renderingHints: {
          class: 'sb-g-col-lg-2 required',
        },
        validations: [
          {
            type: 'maxLength',
            value: '100',
            message: 'Input is Exceeded',
          },
          {
            type: 'required',
            message: 'Instruction is required',
          },
        ],
        required: true,
        visible: true,
      },
    ],
  },
  {
    name: 'First Section',
    fields: [
      {
        code: 'name',
        dataType: 'text',
        description: 'Name of the content',
        editable: true,
        showInfo: true,
        inputType: 'text',
        label: 'Title',
        name: 'Name',
        placeholder: 'Title',
        renderingHints: {
          class: 'sb-g-col-lg-1 required',
        },
        required: true,
        visible: true,
        validations: [
          {
            type: 'maxLength',
            value: '120',
            message: 'Input is Exceeded',
          },
          {
            type: 'required',
            message: 'Title is required',
          },
        ],
        default: 'Untitled Course',
      },
      {
        code: 'description',
        dataType: 'text',
        description: 'Description of the content Rajnish',
        showInfo: true,
        editable: true,
        inputType: 'textarea',
        label: 'Description Rajnish',
        name: 'Description',
        placeholder: 'Description',
        renderingHints: {
          class: 'sb-g-col-lg-1',
        },
        required: false,
        visible: true,
        validations: [
          {
            type: 'maxLength',
            value: '256',
            message: 'Input is Exceeded',
          },
        ],
        default: 'Enter description for Course',
      },
      {
        code: 'keywords',
        name: 'Keywords',
        label: 'keywords',
        placeholder: 'Enter Keywords',
        default: [],
        description: 'Keywords for the Question Set',
        dataType: 'list',
        inputType: 'keywords',
        editable: true,
        renderingHints: {
          class: 'sb-g-col-lg-1',
        },
      },
    ],
  },
];
