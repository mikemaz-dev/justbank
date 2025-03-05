export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHTML = `<header>
			Header
			<nav>
				<a href='/'>Home</a>
				<a href='/auth'>Auth</a>
			</nav>
		</header>`

		return `
			${headerHTML}
			<main>
				${this.children}
			</main>
		`
	}
}
