'use strict';
module.exports = (sequelize, DataTypes) => {
	const Business = sequelize.define(
		'Business',
		{
			name: { type: DataTypes.STRING(100), allowNull: false },
			address: { type: DataTypes.STRING(150), allowNull: false },
			lat: { type: DataTypes.STRING(18), allowNull: false },
			lon: { type: DataTypes.STRING(18), allowNull: false },
			phoneNum: DataTypes.STRING(15),
			hours: DataTypes.STRING(100),
			description: DataTypes.TEXT,
			photoContent: DataTypes.TEXT,
			ownerId: DataTypes.INTEGER,
			categoryId: { type: DataTypes.INTEGER, AllowNull: false }
		},
		{}
	);
	Business.associate = function(models) {
		Business.belongsTo(models.User, { foreignKey: 'ownerId' });
		Business.hasMany(models.Review, { foreignKey: 'businessId' });
		Business.belongsTo(models.Tag, { foreignKey: 'categoryId' });
	};
	return Business;
};
