import {createStore} from 'redux'

const INITIAL_STATE = {
  // isLogged: false,
  username: '',
  videos: [
    {
      id: 'b874a41f-36c6-44ed-85cc-1fb301b86693',
      title:
        'Bebê Tubarão Dança | Cante e dance! | Canções animais | PINKFONG Songs for Children',
      channel: 'Pinkfong!',
      views: 7430625603,
      date: '2020-11-10T03:00:00.000Z',
      avatar: 'https://yt3.ggpht.com/a-/AOh14Gj4lYuYwHIdGfoQELJPV6Va7DtvuafJGpijPA=s68-c-k-c0x00ffffff-no-rj-mo',
      thumb: 'https://i.ytimg.com/vi/rlYHL_VpTBc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBmMWiWKhZjiL9SMBGt6ki0eR0tcQ',
    },
    {
      id: '421793e6-547c-4767-b33b-5a9462bc1a96',
      title:
        'DESPICABLE ME 3 All Trailer + Movie Clips (2017) Minions',
      channel: 'Entertainment Access',
      views: 36566602,
      date: '2020-11-17T03:00:00.000Z',
      avatar: 'https://yt3.ggpht.com/a-/AOh14GjcEY4G_iCIxVk-jgHNvraOcewkf3BW5bjH5g=s68-c-k-c0x00ffffff-no-rj-mo',
      thumb: 'https://i.ytimg.com/vi/EKbWvGLC97Q/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDG3FBTpc_N_PoZR0c2yVosmkVYvw',
    },
    {
      id: '9434a653-6a92-4160-9b4e-d5cb4e79076b',
      title:
        'Qual teclado o Diego usa? Adonis V5 + Typescript? Sequelize ou TypeORM? O que é Hermes? | #PR 03',
      channel: 'Rocketseat',
      views: 32220,
      date: '2020-05-16T03:00:00.000Z',
      avatar: 'https://yt3.ggpht.com/a-/AOh14GgbOmDuYedIuzTFdGU9vGA1AwQsr2Cp8GJ_Hg=s68-c-k-c0x00ffffff-no-rj-mo',
      thumb: 'https://i.ytimg.com/vi/f7jMO95AHmA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDvM8sh5_I-qJY60ms1ls4OCMLFeQ',
    },
    {
      id: '512b8ab8-514e-4e85-8195-944a69b3c7cd',
      title:
        'UM SABADÃO DESSE UMA LUA DESSA - HOJE É BAILÃO EMENDADO NA RAVE - MC 3L e MC Talibã',
      channel: 'Funk 24por48',
      views: 13897777,
      date: '2020-09-07T03:00:00.000Z',
      avatar: 'https://yt3.ggpht.com/a-/AOh14GiVjVzZm1qxs8-eHEkZ08W6noOwrt2IRqx2Cg=s68-c-k-c0x00ffffff-no-rj-mo',
      thumb: 'https://i.ytimg.com/vi/ZESPGdfm9gg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKcY5lRxa0FC2vPcWAvcwqpWhoHQ',
    },
    {
      id: 'e74a5ffd-fc8b-433b-9d18-f105bc85b014',
      title:
        'MEU LABORATÓRIO DE CRIAÇÕES NOJENTAS E EXPERIMENTOS!',
      channel: 'LUCCAS NETO',
      views: 16946855,
      date: '2017-06-21T03:00:00.000Z',
      avatar: 'https://yt3.ggpht.com/a-/AOh14Ggvgwpmn1_jttxJB9kg5jmnmnEaPuy2j4GzrA=s68-c-k-c0x00ffffff-no-rj-mo',
      thumb: 'https://i.ytimg.com/vi/zl67lEIykJ0/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBObn8aWvOolSDS8E1WVxnms4ZiDg',
    },
    {
      id: 'f6d98a80-3307-4053-a227-449339079b0c',
      title: 'Canções De Rock Acústico Anos 80 90 2000 | Melhor Playlist De Rock De Todos Os Tempos',
      channel: 'Acoustic Music Collection',
      views: 2441678,
      date: '2020-07-11T03:00:00.000Z',
      avatar: 'https://yt3.ggpht.com/a-/AOh14GgAmUOPLo0v2nPL48dab4WTYqGRjNYsspWaBQ=s68-c-k-c0x00ffffff-no-rj-mo',
      thumb: 'https://i.ytimg.com/vi/KS2oecN-aVU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCZiY2hM7BZQaOoAoALxr6y59JIXw',
    },
    {
      id: '937f9ef6-ad51-4e4e-95d6-a8cf5ddd5f32',
      title:
        'Ed Sheeran, Kygo, Avicii, Martin Garrix, The Chainsmokers, Dua Lipa Styles - Feeling Me #26',
      channel: 'Deep Musicas',
      views: 2268075,
      date: '2020-11-11T15:49:15.376Z',
      avatar: 'https://yt3.ggpht.com/a-/AOh14GjO4SDa_zEknVeSKXxANieJk8xR5qCTHwyqYA=s68-c-k-c0x00ffffff-no-rj-mo',
      thumb: 'https://i.ytimg.com/vi/R0mmvJasAf8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5HwBPfLYCm_jg6KWbsejmtSwoaA',
    },
    {
      id: '600c12bc-173f-40d0-9847-3f31c36a1a9e',
      title:
        'BIU DO PISEIRO DEZEMBRO 2020 - 12 MÚSICAS NOVAS (REPERTÓRIO NOVO) CD AO VIVO PISADINHA ATUALIZADO',
      channel: 'BujidoCavaco',
      views: 1499562,
      date: '2020-10-06T15:49:15.376Z',
      avatar: 'https://yt3.ggpht.com/a-/AOh14Gjb3qcPDEESgW1aEBX1MXIqp3W4u5yBX3Uc9Q=s68-c-k-c0x00ffffff-no-rj-mo',
      thumb: 'https://i.ytimg.com/vi/BYRDeDHH7a8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDq31a3am22PZllxGRP33lGiZM4hg',
    }
]
}

function reducer(state = INITIAL_STATE, action){
  console.log(action)

  if(action.type === 'TOGGLE_LOGIN'){
    return (
      {
        ...state,
        username: action.username
      }
    )
  }

  return state
}

const store = createStore(reducer)

export default store