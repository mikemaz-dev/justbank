import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mode = process.env.NODE_ENV || 'development'
const isDev = mode === 'development'

const plugins = [
	new webpack.DefinePlugin({
		'process.env': JSON.stringify(process.env)
	}),
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
		template: 'index.html',
		minify: {
			collapseWhitespace: !isDev,
			removeComments: !isDev
		}
	}),
	new MiniCssExtractPlugin({
		filename: isDev ? '[name].css' : '[name].[contenthash].css',
		chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css'
	}),
	new CopyPlugin({
		patterns: [
			{
				from: path.resolve(__dirname, 'public'),
				to: path.resolve(__dirname, 'dist/public')
			}
		]
	})
]

export default {
	context: path.resolve(__dirname, 'src'),
	mode,
	entry: ['./index.js'],
	output: {
		filename: isDev ? '[name].js' : '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'public/[name].[contenthash][ext][query]'
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
		alias: {
			'@': path.resolve(__dirname, 'src/')
		}
	},
	devtool: isDev ? 'source-map' : false,
	devServer: {
		port: 3000,
		hot: true,
		static: {
			directory: path.join(__dirname, 'public')
		},
		historyApiFallback: true
	},
	optimization: {
		minimize: !isDev,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					format: {
						comments: false
					}
				}
			})
		]
	},
	plugins,
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.module\.s[ac]ss$/i,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]_[hash:base64:7]'
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /^((?!\.module).)*s[ac]ss$/i,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/i,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/i,
				type: 'asset/resource'
			}
		]
	}
}
