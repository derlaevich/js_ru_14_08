export default store => next => action => {
    //соглашение. Добавляем id в action.payload если action.type начинается с 'ADD_' 
    if (action.type.startsWith('ADD_'))
        action.payload.id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    next(action)
}