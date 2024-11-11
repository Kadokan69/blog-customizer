import clsx from 'clsx';

import { Text } from 'src/ui/text';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';


import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Select } from 'src/ui/select';
import { fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr, defaultArticleState } from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';


export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectFontFamilyOption, setSelectFontFamilyOption] = useState(defaultArticleState.fontFamilyOption);
	const [selectFontSizeOptions, setSelectFontSizeOptions] = useState(defaultArticleState.fontSizeOption);
	const [selectFontColor, setSelectFontColor] = useState(defaultArticleState.fontColor);
	const [selectBackgroundColor, setSelectBackgroundColor] = useState(defaultArticleState.backgroundColor);
	const [selectContentWidth, setSelectContentWidth] = useState(defaultArticleState.contentWidth);
	
	const hendelSubmit = (e?:Event) => { 
		e?.preventDefault();
		defaultArticleState.backgroundColor = selectBackgroundColor;
		defaultArticleState.contentWidth = selectContentWidth;
		defaultArticleState.fontColor = selectFontColor;
		defaultArticleState.fontFamilyOption = selectFontFamilyOption;
		defaultArticleState.fontSizeOption = selectFontSizeOptions
		console.log(defaultArticleState);
		
	};

	const hendelReset = (e?:Event) => { 
		e?.preventDefault();
		setSelectBackgroundColor(backgroundColors[0]);
		setSelectContentWidth(contentWidthArr[0]);
		setSelectFontColor(fontColors[0]);
		setSelectFontFamilyOption(fontFamilyOptions[0]);
		setSelectFontSizeOptions(fontSizeOptions[0])
		console.log(defaultArticleState);
		
	};
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}} />
			<aside className={clsx(styles.container, { [styles.container_open]: isOpen })} >
				<form className={styles.form}>
				<Text as='h2' size={31} weight={800} uppercase dynamicLite>
				Задайте параметры
				</Text>
				<Select options={fontFamilyOptions} selected={selectFontFamilyOption} title='Шрифт' onChange={setSelectFontFamilyOption}/>
				<RadioGroup options={fontSizeOptions} selected={selectFontSizeOptions} title='Размер ширифта' name='radio' onChange={setSelectFontSizeOptions}/>
				<Select options={fontColors} selected={selectFontColor} title='Цвет Шрифт' onChange={setSelectFontColor}/>
				<Separator />
				<Select options={backgroundColors} selected={selectBackgroundColor} title='Цвет фона' onChange={setSelectBackgroundColor}/>
				<Select options={contentWidthArr} selected={selectContentWidth} title='Ширина контента' onChange={setSelectContentWidth}/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' onClick={hendelReset}/>
						<Button title='Применить' htmlType='submit' type='apply' onClick={hendelSubmit}/>
					</div>
				</form>
			</aside>
		</>
	);
};
