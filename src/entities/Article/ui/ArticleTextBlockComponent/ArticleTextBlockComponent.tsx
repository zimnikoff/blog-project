import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleTextBlock } from '@/entities/Article/model/types/article';
import { Text } from '@/shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}

            {block?.paragraphs?.map((paragraph, index) => (
                <Text
                    key={String(index) + paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </div>
    );
});
