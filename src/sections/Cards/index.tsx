import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import cn from 'clsx';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { Section } from 'src/components/Section';

import style from './cards.scss'

export interface IButton {
    href: string;
    caption?: string;
}

export interface IIcon {
    name: string;
    style?: string;
}

export interface ICard {
    title: string;
    subtitle: string;
    description?: string;
    bgColor: string;
    hidden?: boolean;
    button: IButton;
    icon: IIcon;
}

export interface ICards {
    title?: string;
    subtitle?: string;
    cards: ICard[];
    actionBar: IActionBar;
}

export const Card: React.FunctionComponent<ICard> = ({
    title,
    subtitle,
    description,
    bgColor,
    hidden,
    button,
    icon,
    image
}) => {
    return (
        <div className="w-1/2 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10 card_col magic_fade_in">
	    <div className="card d-flex flex-column align-items-center justify-content-start text-center trans_200">
                {image &&
	         <div className="card_icon ml-auto mr-auto">
                     <Image className="svg" src={image} alt="https://www.flaticon.com/authors/freepik"/>
                </div>}

	        <div className="card_title">
                    <h3 dangerouslySetInnerHTML={{ __html: title }}/>
                </div>
                { subtitle && <div className="card_title">
                    <h4 dangerouslySetInnerHTML={{ __html: subtitle }}/>
                </div>}
	        <div className="card_text" dangerouslySetInnerHTML={{ __html: description }}>
	        </div>
                {button && <div className="card_button trans_200"><a href={button.href}>{button.caption}</a></div>}
	    </div>
	</div>
    );
};

export const Cards: React.FunctionComponent<ICards> = ({
    title,
    subtitle,
    description,
    cards,
    actionBar,
}) => {
    if (!cards || !cards.length) {
        return null;
    }

    return (
        <Section id="cards" className={cn("cards", style)}>
            <Container title={title} description={description}>
                <div className="flex flex-wrap -mx-14 sm:mx-0 cards_row">
                    {cards.filter(card => !card.hidden)
                          .map((card, index) => {
                              return <Card key={index} {...card} />;
                          })}
                </div>
            </Container>

            {actionBar && actionBar.enabled ? <ActionBar className="bg-grey-lightest sm:mt-20 mt-32" {...actionBar} /> : null}
        </Section>
    );
};
