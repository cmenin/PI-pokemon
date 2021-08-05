const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida:{
      type: DataTypes.INTEGER, //porque es numerico
      allowNull: false
    },
    Fuerza: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    Defensa:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Velocidad:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Altura:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Peso:{
      type: DataTypes.INTEGER,
        allowNull: false
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
