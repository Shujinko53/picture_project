import modals from './modules/modals';
import sliders from './modules/sliders';
import showMoreSlides from './modules/showMoreStyles';
import pictureSize from './modules/pictureSize';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    showMoreSlides('.button-styles', '.styles-2');
    pictureSize('.sizes-block');
    drop();
});