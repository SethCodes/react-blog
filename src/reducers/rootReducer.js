const intialState = {
    url: `http://newsapi.org/v2/everything?q=ai&apiKey=41d85d23b2f640b0892f12ae01b9a373`,
    article: ''
}

function rootReducer(state = intialState, action){
    switch(action.type){
        case 'UPDATE_URL':
            return {...state,
                url: action.url};
        case 'UPDATE_ARTICLE':
            return {...state,
                article: action.article
            }

        default: 
            return state;
    }
}

export default rootReducer;
