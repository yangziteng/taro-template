// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
	plugins: [
		// 转换async/await语法
		["@babel/plugin-transform-runtime", {
			"regenerator": true,
			"corejs": false,
			"helpers": true,
			"useESModules": false
		}],
		[
			"import",
			{
				"libraryName": "@nutui/nutui-react-taro",
				"libraryDirectory": "dist/esm",
				"style": true,
				"camel2DashComponentName": false
			},
			'nutui-react-taro'
		]
	]
}
