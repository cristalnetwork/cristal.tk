import * as React from 'react';
import { withRouteData } from 'react-static';

import { Hero, IHero } from 'src/components/Hero';

import { Collage, ICollage } from 'src/sections/Collage';
import { Cards, ICards } from 'src/sections/Cards';
import { Cards, ICards } from 'src/sections/Cards';
import { IPanesCallout, PanesCallout } from 'src/sections/PanesCallout';
import { ITestimonials, Testimonials } from 'src/sections/Testimonials';
import { IAuthors, Authors } from 'src/sections/Authors';

import { Container } from 'src/components/Container';

import { Roadmap } from 'src/components/Roadmap';

export interface IHome {
    color: string;
    hero: IHero;
    marketing: Icards;
    services: Icards;
    panesCallout: IPanesCallout;
    collage: ICollage;
    authors: [IAuthors];
}

export const Home: React.FunctionComponent<IHome> = ({ color, hero, marketing, services, roadmap, panesCallout, collage, authors }) => {
    return (
        <React.Fragment>
            <Hero bgColor={color} {...hero} />

            <PanesCallout {...panesCallout} />

            <Cards {...marketing} />

            <Cards {...services} show_index={true} id="services" className="_services"/>

            <Collage id="customers" {...collage} />

            <Authors title="Quem Somos" authors={authors} />

            <Roadmap title="Mapa de Desenvolvimento" items={roadmap.items} do_hero={0} />

        </React.Fragment>
    );
};

export default withRouteData(Home);
