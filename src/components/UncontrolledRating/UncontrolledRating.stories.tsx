import { action } from '@storybook/addon-actions';
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
};

const callback = action("reting changing inside component")

export const UncontrolledDefault = () => <UncontrolledRating title={'UncontrolledRatingDemo'} defaultRating={0} onChange={callback} />
export const UncontrolledRating1 = () => <UncontrolledRating title={'UncontrolledRatingDemo'} defaultRating={1} onChange={callback}/>
export const UncontrolledRating2 = () => <UncontrolledRating title={'UncontrolledRatingDemo'} defaultRating={2} onChange={callback}/>
export const UncontrolledRating3 = () => <UncontrolledRating title={'UncontrolledRatingDemo'} defaultRating={3} onChange={callback}/>
export const UncontrolledRating4 = () => <UncontrolledRating title={'UncontrolledRatingDemo'} defaultRating={4} onChange={callback}/>
export const UncontrolledRating5 = () => <UncontrolledRating title={'UncontrolledRatingDemo'} defaultRating={5} onChange={callback}/>
