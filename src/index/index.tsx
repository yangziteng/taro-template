import React, { useEffect } from 'react'
import PageContainer from '@/components/page_container'
import { Button } from '@nutui/nutui-react-taro'

import './index.scss'
import toast from '@/utils/toast'

const Index = (): JSX.Element => {
	useEffect(() => {
		try {
			console.log('已配置环境变量✅')
			console.log('process.env', process.env.TARO_ENV)
			console.log('TARO_API_BASE', process.env.TARO_API_BASE)
		} catch (error) {
			const msg = '读取环境变量异常，请先阅读 README.md, 配置环境变量后重新启动'
			console.error(msg)
			toast.info(msg)
		}
	}, [])

	return (
		<PageContainer
			title='首页'
			containerClass='index'
		>
			<Button
				block
				size='large'
				type='primary'
			>
				欢迎使用 Taro3 React 模板
			</Button>
		</PageContainer>
	)
}

export default Index
