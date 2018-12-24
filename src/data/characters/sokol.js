import { NEW } from '../../constants/status-task';

const answerParcel = {
    conditions: {
      tasks: [{
        name: 'parcel',
        status: NEW
      }],
    },
    text: 'Я от Васи за поссылкой',
    inventory: {
      object: {
        name: 'parcel'
      },
      action: 'add'
    },
    character: {
      text: "Ааа вот бери",
      close: true,
    }
  };

export default {
  name: 'Sokol',
  startDialog: 'default',
  dialogs: {
    getOut: {
      text: 'Я не ясно выразился, проваливай!',
      close: true,
      answers:[
        answerParcel
      ]
    },
    default: {
      text: 'Ты кто такой? Я тебя раньше не видел.',
      close: true,
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
            text: "Да, я тебя где-то видел, проваливай олух!",
            close: true,
          }
        }
      ]
    }
  }
};