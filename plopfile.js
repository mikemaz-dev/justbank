export default function (plop) {
	plop.setHelper('camelCase', str => {
		return str
			.replace(/[-\s]+/g, ' ')
			.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
				index === 0 ? match.toLowerCase() : match.toUpperCase()
			)
			.replace(/\s+/g, '')
	})

	plop.setHelper('kebabCase', str => {
		return str
			.replace(/([a-z])([A-Z])/g, '$1-$2')
			.toLowerCase()
			.replace(/\s+/g, '-')
	})

	plop.setGenerator('component', {
		description: 'Create new component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name (camelCase or kebab-case):'
			},
			{
				type: 'input',
				name: 'folder',
				message:
					'Folder where the component should be created (e.g. "src/components/screens/home"):',
				default: 'src/components/'
			}
		],
		actions: data => {
			data.camelName = plop.getHelper('camelCase')(data.name)
			data.kebabName = plop.getHelper('kebabCase')(data.name)

			return [
				{
					type: 'add',
					path: '{{folder}}{{kebabName}}/{{kebabName}}.component.js',
					templateFile: 'plop-templates/component.js.hbs'
				},
				{
					type: 'add',
					path: '{{folder}}{{kebabName}}/{{kebabName}}.template.html',
					templateFile: 'plop-templates/template.html.hbs'
				},
				{
					type: 'add',
					path: '{{folder}}{{kebabName}}/{{kebabName}}.module.scss',
					templateFile: 'plop-templates/styles.scss.hbs'
				}
			]
		}
	})
}
