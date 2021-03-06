import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import cn from 'clsx';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { Section } from 'src/components/Section';

import style from './cards.scss'

import { Translate } from "react-localize-redux";

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
    hint?: string;
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
    indexor, 
    show_index, 
    title,
    subtitle,
    description,
    bgColor,
    hidden,
    button,
    icon,
    image,
    hint
}) => {
    const style    = image?{}:{paddingTop: 10, paddingBottom: 10, border: 'none'};
    const index_bg = (show_index==true)?(<div className="card_index_bg"><span>{indexor+1}</span></div>):(null);
    let card_content = 
      ( <div className="card d-flex flex-column align-items-center justify-content-start text-center trans_200" style={style}>
          {index_bg}
          {image &&
              <div className="card_icon ml-auto mr-auto">
                   <Image className="svg" src={image} alt="https://www.flaticon.com/authors/freepik"/>
              </div>}
          <div className="card_title">
              <h3><Translate id={(title||'').trim()} /></h3>
          </div>
          { subtitle && <div className="card_title">
                            <h4><Translate id={(subtitle||'').trim()} /></h4>
                        </div>}
          <div className="card_text"> <Translate id={(hint||'').trim()} /> </div>
          {button && <div className="card_button trans_200"><a href={button.href}> <Translate id={(button.caption||'').trim()} /> </a></div>}
        </div>);
    
    if(image)
        return (
        <div className="w-1/2 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10 card_col magic_fade_in">
    	    {card_content}
    	  </div>
        );
    
    return (
        <div className="w-1/3 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10 card_col magic_fade_in">
            {card_content}
            
        </div>
        );
};

export const Cards: React.FunctionComponent<ICards> = ({
    title,
    subtitle,
    description,
    cards,
    actionBar,
    show_index,
    id,
    className
}) => {
    if (!cards || !cards.length) {
        return null;
    }

    return (
        <Section id={id||"cards"} className={cn("cards", style) + ` ${className}`}>
            <Container title={<Translate id={(title||'').trim()} />} description={description}>
                <div className="flex flex-wrap -mx-14 sm:mx-0 cards_row">
                    {cards.filter(card => !card.hidden)
                          .map((card, index) => {
                              return <Card {...card} key={index} indexor={index} show_index={show_index}/>;
                          })}
                </div>
            </Container>

            {actionBar && actionBar.enabled ? <ActionBar className="bg-grey-lightest sm:mt-20 mt-32" {...actionBar} /> : null}
        </Section>
    );
};
