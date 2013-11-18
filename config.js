var config = { };

config.rootUrl = process.env.ROOT_URL				||  'https://goldfish-casino.local:3000/';

config.facebook = {
	appId: process.env.FACEBOOK_APPID				|| '1411854682381866',
	appSecret: process.env.FACEBOOK_SECRET			|| '77c637ca1dcad889fbedd216ddbff4a7',
	appNamespace: process.env.FACEBOOK_APPNAMESPACE	|| 'jewelthieflocal',
	redirectUri: process.env.FACEBOOK_REDIRECTURI	|| config.rootUrl + 'login/callback'
};

module.exports = config;