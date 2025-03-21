import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'

import * as styles from './donut-chart.module.scss'
import template from './donut-chart.template.html'

/**
 * DonutChart class for creating a simple donut chart with customizable options.
 */

export class DonutChart extends ChildComponent {
	gap = 15

	/**
	 * Create a new DonutChart instance
	 * @param {string | HTMLElement} container - The container element (either selector or HTMLElement) where the chart will be appended
	 * @param {object[]} data - An array of data objects to represent each slice of the donut chart
	 * @param {number} data[].value - The value of the slice
	 * @param {string} data[].color - The color of the slice
	 * @param {number} [options.size=250] - The diameter of the donut chart
	 * @param {number} [options.donutWidth=250] - The width of the donut ring
	 */
	constructor(
		data,
		options = {
			size: 250,
			width: 50
		}
	) {
		super()

		this.data = data
		this.size = options.size
		this.donutWidth = options.width
	}

	/**
	 * Calculate the total value of all slices
	 * @returns {number} - The total value
	 */
	#calculateTotalValue() {
		return this.data.reduce((acc, slice) => acc + slice.value, 0)
	}

	/**
	 * Convert polar coordinates to Cartesian coordinates
	 * @param {number} percentage - The percentage of the circle
	 * @param {number} radius - The radius of the circle
	 * @returns {number[]} The Cartesian coordinates [x, y]
	 */
	#polarToCartesian(percentage, radius) {
		const angleInDegrees = percentage * 3.6 - 90
		const angleInRadius = (angleInDegrees * Math.PI) / 180

		const x = radius * Math.cos(angleInRadius)
		const y = radius * Math.sin(angleInRadius)

		return [x, y]
	}

	/**
	 * Create a SVG element and set its attributes
	 * @returns {SVGElement} The created SVG element
	 */
	#createSVGElement() {
		const svg = document.createElementNS(`http://www.w3.org/2000/svg`, 'svg')

		svg.setAttribute('width', this.size)
		svg.setAttribute('height', this.size)
		svg.setAttribute(
			'viewBox',
			`-5 -5 ${this.size + this.gap} ${this.size + this.gap}`
		)

		return svg
	}

	/**
	 * Create a SVG group element and set its attributes
	 * @returns {SVGElement} The created SVG group element
	 */
	#createSVGGroupElement() {
		const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

		g.setAttribute(
			'transform',
			`translate(${this.size / 2 + this.gap / 4}, ${this.size / 2 + this.gap / 4})`
		)

		return g
	}

	#createPathElement(slice, pathData) {
		if (!pathData || pathData.includes('NaN')) return

		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

		path.setAttribute('d', pathData)
		path.setAttribute('fill', 'none')
		path.setAttribute('stroke', slice.color)
		path.setAttribute('stroke-width', this.donutWidth)

		return path
	}

	#createSVGPathElements(g) {
		const totalValue = this.#calculateTotalValue(),
			scale = 0.8,
			newSize = this.size * scale,
			radius = newSize / 2
		let accumulatedPercentage = 0

		this.data.forEach(slice => {
			const percentage = (slice.value / totalValue) * 100
			const [startX, startY] = this.#polarToCartesian(
				accumulatedPercentage,
				radius
			)
			accumulatedPercentage += percentage
			const [endX, endY] = this.#polarToCartesian(accumulatedPercentage, radius)
			const largeArcFlag = percentage > 50 ? 1 : 0
			const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`

			const path = this.#createPathElement(slice, pathData)
			path.classList.add('rotate')
			g.appendChild(path)
		})
	}

	#getSVG() {
		const svg = this.#createSVGElement()
		const g = this.#createSVGGroupElement()

		this.#createSVGPathElements(g)
		svg.appendChild(g)

		return svg
	}

	/**
	 * Render Donut chart
	 */
	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$R(this.element).append(this.#getSVG())

		return this.element
	}
}
