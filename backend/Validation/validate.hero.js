import { check } from 'express-validator';

export const validateCreateHero = [
    check('nickname').notEmpty(),
    check('real_name').notEmpty(),
    check('origin_description').notEmpty(),
    check('superpowers').notEmpty(),
    check('catch_phrase').notEmpty(),
    check('imageToShow').notEmpty(),
    check('images').notEmpty(),
];