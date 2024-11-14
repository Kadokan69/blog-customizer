import { CSSProperties, useState } from 'react';

import { Article } from '../components/article/Article';
import { ArticleParamsForm } from '../components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../constants/articleProps';

import styles from './index.module.scss';

export const App = () => {
	const [articaleState, setAtricaleState] = useState(defaultArticleState);
	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articaleState.fontFamilyOption.value,
					'--font-size': articaleState.fontSizeOption.value,
					'--font-color': articaleState.fontColor.value,
					'--container-width': articaleState.contentWidth.value,
					'--bg-color': articaleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articaleState={articaleState}
				setAtricaleState={setAtricaleState}
			/>
			<Article />
		</main>
	);
};
