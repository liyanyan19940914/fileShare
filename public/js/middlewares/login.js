/**
 * Created by 十九 on 2018/1/21.
 */
import request from 'superagent';

export default store => next => action => {
    console.log(action.type);
    if (action.type === 'LOGIN_SUBMIT') {
        console.log(action.info);
        request.post('/login')
            .send(action.info)
            .end((err, res) => {
                console.log('login middleware',res.body.data);
                next({type:"GET_LOGIN_TIP", data:res.body.data});
            });
    }
    else
        next(action);
};