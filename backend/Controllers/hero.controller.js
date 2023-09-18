import { Hero } from '../Models/Hero/index.js';
import { validationResult } from 'express-validator';

export const createNewHero = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body;

    const newHero = await Hero.create({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    });

    res.status(201).json(newHero);
  } catch (error) {
    console.error('Error creating hero:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSingleHero = async (req, res) => {
  try {
    const { id } = req.params;
    const hero = await Hero.findByPk(id);

    if (!hero) {
      res.status(404).json({ error: 'Hero not found' });
      return;
    }

    res.json(hero);
  } catch (error) {
    console.error('Error fetching hero:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllHeroes = async (req, res) => {
  try {
    const heroes = await Hero.findAll();

    if (!heroes || heroes.length === 0) {
      res.status(404).json({ error: 'No heroes found' });
      return;
    }

    res.json(heroes);
  } catch (error) {
    console.error('Error fetching heroes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteHero = async (req, res) => {
  try {
    const { id } = req.params;
    const hero = await Hero.findByPk(id);

    if (!hero) {
      res.status(404).json({ error: 'Hero not found' });
      return;
    }

    await hero.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting hero:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateHero = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body;

    const hero = await Hero.findByPk(id);

    if (!hero) {
      res.status(404).json({ error: 'Hero not found' });
      return;
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    hero.nickname = nickname;
    hero.real_name = real_name;
    hero.origin_description = origin_description;
    hero.superpowers = superpowers;
    hero.catch_phrase = catch_phrase;
    hero.images = images;

    await hero.save();
    res.json(hero);
  } catch (error) {
    console.error('Error updating hero:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
