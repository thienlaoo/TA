import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('test', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

export const Hero = sequelize.define('Hero', {
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    real_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    origin_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    superpowers: {
        type: DataTypes.STRING,
        allowNull: false
    },
    catch_phrase: {
        type: DataTypes.STRING,
        allowNull: false
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
}, {
    tableName: 'heroes',
    timestamps: false
});
