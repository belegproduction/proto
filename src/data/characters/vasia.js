import { DONE } from '../../constants/status-task';

export default {
	name: 'Vasia',
	startDialog: 'offerTask',
	dialogs: {
		offerTask: {
			text: 'Привет, не хочешь выручить земляка?',
			close: true,
			answers: [
				{
					text: 'Ближе к делу',
					character: {
						text: 'Есть стражник в городе, его зовут Сокол. Он должен мне кое что передать. Поговори с ним, скажи что от Васи. Потом сразу сюда, я тебя буду ждать сдесь. Даже не вздумай убежать с моей поссылкой. Если всё пройдет гладко за мной не заржавеет',
						answers: [
							{
								text: 'Договорились, скоро буду',
								close: true,
								task: {
									name: 'parcel',
									action: 'add'
								},
								history: {
									characters: [
										{
											name: 'Vasia',
											startDialog: 'default'
										}
									]
								}
							}
						]
					}
				},
				{
					text: 'Ух ты, этот комок шерсти может еще разговаривать. Не хочешь меня выручить, есть пару золотых для будущего друга?',
					character: {
						text: 'Есть, подойди поближе',
						close: true,
						message: 'Вы были убиты и изнасилованы!'
					}
				}
			]
		},
		default: {
			text: 'Есть новости для меня?',
			close: true,
			answers: [
				{
					conditions: {
						actions: [],
						inventory: ['parcel']
					},
					text: 'Вот твоя поссылка',
          task: {
            params: {
              name: 'parcel',
              status: DONE
            },
            action: 'change_status'
          },
          inventory: {
            object: {
              name: 'parcel',
            },
            action: 'remove'
          },
					character: {
						text: 'Спасибо земляк, вот тебе 10 золотых',
						close: true,
						message: 'Вы прошли игру поздравляю!'
					}
				}
			]
		}
	}
};