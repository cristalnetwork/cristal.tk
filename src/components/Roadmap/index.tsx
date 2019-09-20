import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { withRouteData } from 'react-static';
import cn from 'clsx';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { Section } from 'src/components/Section';

import { Hero } from 'src/components/Hero';

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
    active?: boolean;
}

export interface IRoadmap {
    title?: string;
    subtitle?: string;
    items: IMilestone[];
    actionBar: IActionBar;
    currentMilestone?: integer;
}

export const Milestone: React.FunctionComponent<IMilestone> = ({
    title,
    subtitle,
    description,
    bgColor,
    hidden,
    button,
    icon,
    image,
    active
}) => {
    return (
        <div className={cn("sm:w-full flex px-4 pb-20 sm:px-0 sm:px-1 milestone_col magic_fade_in", {active} )}>
	    <div className="milestone d-flex flex-column align-items-center justify-content-start text-center trans_200">
                {image &&
                 <div className="milestone_icon_container mx-auto">
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
    currentMilestone = 0,
    do_hero=1
}) => {
    if (!items || !items.length) {
        return null;
    }

    if(do_hero)
        return (
            <React.Fragment>
                <Hero title={title} subtitle={subtitle} className="small"/>
                <Section id="roadmap" className={cn("roadmap")}>
                    <Container>
                        <div className="row">
    	                <div className="roadmap_dots magic_fade_in">
                                <Image src="/images/bezier.svg"/>
                            </div>
    	            </div>
                        <div className="flex flex-wrap -mx-14 sm:mx-0 roadmap_row">
                            {items.filter(milestone => !milestone.hidden)
                                  .map((milestone, index) => {
                                      return <Milestone key={index} active={index === currentMilestone} {...milestone} />;
                                  })}
                        </div>
                    </Container>

                    {actionBar && actionBar.enabled ? <ActionBar className="bg-grey-lightest sm:mt-20 mt-32" {...actionBar} /> : null}
                </Section>
            </React.Fragment>
        );

    return (
                <Section id="roadmap" className={cn("roadmap_component_only")}>
                    <Container title={title}>
                        <div className="flex flex-wrap -mx-14 sm:mx-0 roadmap_row">
                            {items.filter(milestone => !milestone.hidden)
                                  .map((milestone, index) => {
                                      return <Milestone key={index} active={index === currentMilestone} {...milestone} />;
                                  })}
                        </div>
                    </Container>

                    {actionBar && actionBar.enabled ? <ActionBar className="bg-grey-lightest sm:mt-20 mt-32" {...actionBar} /> : null}
                </Section>
            
        );
};

export default withRouteData(Roadmap)
