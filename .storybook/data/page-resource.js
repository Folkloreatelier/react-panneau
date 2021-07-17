export default {
    id: 'pages',
    name: 'Page',

    types: [{ id: 'contact', name: 'Contact', fields: [] }],

    intl: {
        messages: {
            index: 'Voir {the_plural}',
            create: 'Ajouter une page',
            create_button: 'Yo le jeune',
        },
        values: {
            name: 'page',
            a_singular: 'une page',
            a_plural: 'des pages',
            A_singular: 'Une page',
            A_plural: 'pages',
            the_singular: 'la page',
            the_plural: 'les pages',
            The_singular: 'The page',
            The_plural: 'The pages',
        },
    },

    fields: [
        {
            name: 'test-select',
            label: 'Things',
            component: 'select',
            settings: {
                hiddenInForm: true,
            },
            options: [
                { label: 'Cool label 1', value: 1 },
                { label: 'Cool label 2', value: 2 },
                { label: 'Cool label 3', value: 3 },
            ],
        },
        {
            name: 'title',
            label: 'Titre',
            component: 'localized',
            components: {
                display: 'text-localized',
            },
            withoutFormGroup: true,
            properties: {
                fr: {
                    name: 'fr',
                    label: 'Fr',
                    component: 'text',
                },
                en: {
                    name: 'en',
                    label: 'En',
                    component: 'text',
                },
            },
        },
        {
            name: 'description',
            label: 'Description',
            component: 'html',
            components: {
                display: 'text',
            },
        },
        {
            name: 'slug',
            label: 'Slug',
            component: 'url',
            settings: {
                showInIndex: true,
                createOnly: true,
            },
        },
        {
            name: 'upload',
            label: 'Media',
            component: 'upload',
        },
        {
            name: 'image',
            label: 'Image',
            component: 'image',
        },
        { name: 'blocks', label: 'Blocks', component: 'items' },
        {
            name: 'color',
            label: 'Color',
            component: 'color',
            defaultValue: { color: '#cc00cc', alpha: 1 },
        },
        {
            name: 'published',
            label: 'Published',
            component: 'toggle',
        },
        {
            name: 'publish_at',
            label: 'Publish at',
            component: 'date',
        },
    ],

    components: {
        'pages.index': 'resource-index',
        'pages.show': {
            component: 'resource-show',
        },
        'pages.create': {
            component: 'resource-create',
        },
        'pages.edit': {
            component: 'resource-edit',
        },
        'pages.delete': {
            component: 'resource-delete',
        },
        'forms.default': 'custom-form',
        'forms.edit': {
            title: 'Edit',
            component: 'normal',
        },
    },

    filters: [
        // {
        //     param: 'category',
        //     name: 'select-filter-chose',
        //     label: 'Catégorie',
        //     // placeholder: 'Sélectionner une catégorie', // optional
        //     component: 'select',
        //     // settings: {
        //     //     hiddenInForm: true,
        //     // },
        //     options: [
        //         { label: 'Cool label 1', value: 1 },
        //         { label: 'Cool label 2', value: 2 },
        //         { label: 'Cool label 3', value: 3 },
        //     ],
        // },

        {
            name: 'featured',
            // name: 'toggle-filter-test',
            // label: 'En vedette',
            component: 'toggle',
        },

        {
            name: 'status',
            // name: 'radios-filter',
            // label: 'Statut',
            component: 'radios',
            
            options: [
                { label: 'Publié', value: 'published' },
                { label: 'Brouillon', value: 2 },
                { label: 'Archivé', value: 3 },
            ],
        },

        {
            name: 'q',
            // name: 'search-filter',
            // label: 'Recherche',
            placeholder: 'Rechercher',
            component: 'search',
            
        },

        {
            name: 'trucs',
            // name: 'select-filter-truc',
            // label: 'Trucs',
            placeholder: 'Sélectionner un truc',
            component: 'select',
            options: [
                { label: 'Truc 1', value: 'truc' },
                { label: 'Truc 2', value: 'machin' },
                { label: 'Truc 3', value: 'paul' },
                { label: 'Truc 4!', value: 'john' },
            ],
        },
    ],

    index: {
        columns: [
            'title',
            'slug',
            {
                id: 'actions',
                actions: ['show', 'edit'],
            },
        ],
    },

    settings: {
        hideInNavbar: false,
        indexIsPaginated: true,
    },

    columns: ['title', 'description', 'slug'],

    routes: {
        'resource.whatever': '/whatever-something-something',
    },
};
