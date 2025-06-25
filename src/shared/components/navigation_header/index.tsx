import Taro from '@tarojs/taro'
import React from 'react'
import { View } from '@tarojs/components'
import { useNavigationBarInfo, usePageInfo } from '@/utils/hooks'
import './index.scss'

type NavigationHeaderProps = {
	title?: string
}

export default function NavigationHeader(
	props: NavigationHeaderProps
): JSX.Element {
	const { title } = props

	const {
		statusBarHeight,
		navigationBarHeight,
		navigationContentHeight,
		menuButtonHeight,
		navigationPaddding,
		menuButtonWidth,
	} = useNavigationBarInfo()

	const {  isTabbar } = usePageInfo()

	const iconBoxStyle =
		process.env.TARO_ENV === 'weapp'
			? {
					width: menuButtonWidth,
			  }
			: {
					width: Taro.pxTransform(200),
			  }

	return (
		<View
			className='nav-header'
			style={{
				height: navigationBarHeight,
				padding: `0 ${navigationPaddding}px`,
			}}
		>
			<View
				className='nav-header-status-placeholder'
				style={{
					height: statusBarHeight,
				}}
			/>
			<View
				className='nav-header-content'
				style={{
					height: `${navigationContentHeight}px`,
				}}
			>
				<View className='nav-header-content-left' style={iconBoxStyle}>
					{!isTabbar ? (
						<>
							<View
								className='nav-header-content-left-icon-group'
								style={
									process.env.TARO_ENV === 'weapp'
										? {
												height: `${menuButtonHeight}px`,
												borderRadius: `${menuButtonHeight / 2}px`,
										  }
										: {}
								}
							>
								
								<View className='nav-header-content-left-icon-divider' />
								
							</View>
						</>
					) : null}
				</View>
				<View className='nav-header-content-center'>{title || '页面标题'}</View>
				<View className='nav-header-content-right' style={iconBoxStyle} />
			</View>
		</View>
	)
}
