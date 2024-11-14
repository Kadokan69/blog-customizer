import clsx from 'clsx';

import { Text } from 'src/ui/text';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useState, useRef } from 'react';
import { Select } from 'src/ui/select';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

type TArticleParamsForm = {
	articaleState: ArticleStateType;
	setAtricaleState: (param: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	articaleState,
	setAtricaleState,
}: TArticleParamsForm) => {
	const rootRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectFontFamilyOption, setSelectFontFamilyOption] = useState(
		articaleState.fontFamilyOption
	);
	const [selectFontSizeOptions, setSelectFontSizeOptions] = useState(
		articaleState.fontSizeOption
	);
	const [selectFontColor, setSelectFontColor] = useState(
		articaleState.fontColor
	);
	const [selectBackgroundColor, setSelectBackgroundColor] = useState(
		articaleState.backgroundColor
	);
	const [selectContentWidth, setSelectContentWidth] = useState(
		articaleState.contentWidth
	);

	useOutsideClickClose({
		isOpen: isMenuOpen,
		rootRef,
		onChange: setIsMenuOpen,
	});

	const hendelSubmit = (e?: Event) => {
		e?.preventDefault();
		setAtricaleState({
			backgroundColor: selectBackgroundColor,
			contentWidth: selectContentWidth,
			fontColor: selectFontColor,
			fontFamilyOption: selectFontFamilyOption,
			fontSizeOption: selectFontSizeOptions,
		});
	};

	const hendelReset = (e?: Event) => {
		e?.preventDefault();
		setSelectBackgroundColor(backgroundColors[0]);
		setSelectContentWidth(contentWidthArr[0]);
		setSelectFontColor(fontColors[0]);
		setSelectFontFamilyOption(fontFamilyOptions[0]);
		setSelectFontSizeOptions(fontSizeOptions[0]);
		setAtricaleState({
			backgroundColor: backgroundColors[0],
			contentWidth: contentWidthArr[0],
			fontColor: fontColors[0],
			fontFamilyOption: fontFamilyOptions[0],
			fontSizeOption: fontSizeOptions[0],
		});
	};
	return (
		<>
			<ArrowButton
				isOpen={isMenuOpen}
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, { [styles.container_open]: isMenuOpen })}
				ref={rootRef}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={selectFontFamilyOption}
						title='Шрифт'
						onChange={setSelectFontFamilyOption}
					/>
					<RadioGroup
						options={fontSizeOptions}
						selected={selectFontSizeOptions}
						title='Размер ширифта'
						name='radio'
						onChange={setSelectFontSizeOptions}
					/>
					<Select
						options={fontColors}
						selected={selectFontColor}
						title='Цвет Шрифт'
						onChange={setSelectFontColor}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={selectBackgroundColor}
						title='Цвет фона'
						onChange={setSelectBackgroundColor}
					/>
					<Select
						options={contentWidthArr}
						selected={selectContentWidth}
						title='Ширина контента'
						onChange={setSelectContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={hendelReset}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={hendelSubmit}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
