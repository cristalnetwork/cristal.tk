import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { withRouteData } from 'react-static';
import cn from 'clsx';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { Section } from 'src/components/Section';

import './roadmap.scss'

export interface IButton {
    href: string;
    caption?: string;
}

export interface IIcon {
    name: string;
    style?: string;
}

export interface IMilestone {
    title: string;
    subtitle: string;
    description?: string;
    bgColor: string;
    hidden?: boolean;
    button: IButton;
    icon: IIcon;
}

export interface IRoadmap {
    title?: string;
    subtitle?: string;
    items: IMilestone[];
    actionBar: IActionBar;
}

export const Milestone: React.FunctionComponent<IMilestone> = ({
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
        <div className="sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10 milestone_col magic_fade_in">
	    <div className="milestone d-flex flex-column align-items-center justify-content-start text-center trans_200">
                {image &&
                 <div className="milestone_icon_container">
	             <div className="milestone_icon ml-auto mr-auto">
                         <Image className="svg" src={image} alt="https://www.flaticon.com/authors/freepik"/>
                     </div>
                 </div>}

	        <div className="milestone_title">
                    <h3 dangerouslySetInnerHTML={{ __html: title }}/>
                </div>
                { subtitle && <div className="milestone_title">
                    <h4 dangerouslySetInnerHTML={{ __html: subtitle }}/>
                </div>}
	        <div className="milestone_text" dangerouslySetInnerHTML={{ __html: description }}>
	        </div>
                {button && <div className="milestone_button trans_200"><a href={button.href}>{button.caption}</a></div>}
	    </div>
	</div>
    );
};


export const Roadmap: React.FunctionComponent<IRoadmap> = ({
    title,
    subtitle,
    description,
    items,
    actionBar,
}) => {
    if (!items || !items.length) {
        return null;
    }

    return (
        <Section id="roadmap" className={cn("roadmap")}>
            <Container title={title} description={description}>
                <div className="row">
	            <div className="col magic_fade_in">
	                <div className="section_title text-center">
                            <h2 dangerouslySetInnerHTML={{__html: subtitle}}/>
                        </div>
	            </div>
	        </div>
                <div className="row roadmap_row">
	            <div className="roadmap_dots magic_fade_in">
                        <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
                        </svg>
                    </div>
	        </div>
                <div className="flex flex-wrap -mx-14 sm:mx-0 roadmap_row">
                    {items.filter(milestone => !milestone.hidden)
                          .map((milestone, index) => {
                              return <Milestone key={index} {...milestone} />;
                          })}
                </div>
            </Container>

            {actionBar && actionBar.enabled ? <ActionBar className="bg-grey-lightest sm:mt-20 mt-32" {...actionBar} /> : null}
        </Section>
    );
};

export default withRouteData(Roadmap)
