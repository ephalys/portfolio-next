import React from 'react';
import { MAX_DELAY } from '../hooks/useAnimationDelay';
import BulletList from '/components/base/bulletList';
import resumeExperiences from '/data/resume';

const ResumeExperiences = () => {
    return (
        <>
            {resumeExperiences &&
                resumeExperiences.map((experience, i) => {
                    return (
                        <div
                            key={i}
                            className="mb-12 opacity-0 animate-enter"
                            style={{
                                animationDelay: MAX_DELAY + 'ms',
                            }}
                        >
                            <p className="font-medium text-xl">{`${experience.title}, ${experience.company}`}</p>
                            <p className="mb-4 text-gray-400">{`${experience.date}, ${experience.contract}`}</p>
                            <BulletList items={experience.description} />
                        </div>
                    );
                })}
        </>
    );
};

export default ResumeExperiences;
