import { NEW } from '../../constants/status-task';

const answerParcel = {
	conditions: {
		tasks: [{
			name: 'parcel',
			status: NEW
		}]
	},
  forceDisplay: true,
  forceDisplayMessage: 'Нужно имееть задание от Васи!',
	text: 'Я от Васи за поссылкой',
	inventory: {
		object: {
			name: 'parcel',
			description: 'Поссылка для Васи'
		},
		action: 'add'
	},
	task: {
		params: {
      name: 'parcel',
      tip: 'Вы получили поссылку, осталось её вернуть Васе',
		},
		action: 'tip'
	},
	character: {
		text: 'Ааа че ты сразу не сказал? Вот бери...',
		close: true
	}
};

export default {
	name: 'Sokol',
	startDialog: 'default',
	dialogs: {
		getOut: {
			text: 'Я не ясно выразился, проваливай!',
			close: true,
			answers: [
				answerParcel
			]
		},
		default: {
			text: 'Ты кто такой? Я тебя раньше не видел.',
			close: true,
			isTarget: true,
			answers: [
				answerParcel,
				{
					text: 'Я фермер из Стрижовки',
					history: {
						characters: [
							{
								name: 'Sokol',
								startDialog: 'getOut'
							}
						]
					},
					character: {
						text: 'Тебя еще сдесь не хватало, проваливай олух!',
						close: true,
            answers: [{
            		text: 'Я тебе сейчас покажу кто олух!',
								character: {
									text: '...',
									close: true,
									message: 'Вы не сумели показать, кто олух и были убиты!'
								}
            	}
						]
					}
				}
			]
		}
	}
};