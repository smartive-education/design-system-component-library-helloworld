import React, {FC} from 'react';
import IconButton from "../icon-button/icon-button";

export type ProfilePicProps = {
    size?: 'S' | 'M' | 'L' | 'XL' ;
    imageUrl: string;
};

const ProfilePic: FC<ProfilePicProps> = ({  size, imageUrl }) => {
    const defaultClasses = 'object-fill bg-violet-200 rounded-full absolute'
    let sizeClasses;
    switch(size) {
        case 'S':
            sizeClasses = 'h-40 w-40 hover:h-44 hover:w-44 hover:-inset-xxxxs';
            break;
        case 'M':
        sizeClasses = 'w-64 h-64 hover:h-70 hover:w-70 hover:-inset-xxxs';
        break;
        case 'L':
            sizeClasses = 'w-96 h-96';
            break;
        case 'XL':
            sizeClasses = 'w-160 h-160';
            break;
    }

    const image: string = require(`${ imageUrl }`);
    return  <div className={'relative'}><div><img src={image} alt="logo" className={`${ defaultClasses } - ${ sizeClasses }`} /> <div className={size !== 'XL' ? 'invisible' : 'absolute right-s top-s bottom-s'}><IconButton label={'Edit'}/></div></div></div>
};

export default ProfilePic;

