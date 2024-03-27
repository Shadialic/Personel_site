import './Skills.css';
import {useMemo} from "react";
import SkillsList from './SkillsList.tsx';

export const Skills = () => {

    const skillsGroups = useMemo(() => {
        const firstArray = SkillsList.slice(0, 13).concat(SkillsList.slice(0, 7));
        const secondArray = SkillsList.slice(13, 24).concat(SkillsList.slice(13, 20));
        return [
            <div className={'skills__group'} key={0}>
                {firstArray.map((skill, index) => <div className={'skills__item slideFirst'} key={index}>
                    {skill}
                </div>)}
            </div>,
            <div className={'skills__group'} key={1}>
                {secondArray.map((skill, index) => <div className={'skills__item slideSecond'} key={index}>
                    {skill}
                </div>)}
            </div>
        ];
    }, []);

    return (<section id={'skills'} className={'skills container'}>
        <div className={'skills__header'}>
            <p className={'skills__heading'}>Skills</p>
            <p className={'skills__subheading'}>Capabilities, I'm most proficient in</p>
        </div>
        <div className={'skills__list'}>
            {skillsGroups.map((skillsGroup) => skillsGroup)}
        </div>
    </section>);
};