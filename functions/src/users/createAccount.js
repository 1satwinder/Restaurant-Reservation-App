import * as functions from 'firebase-functions';
import { createAuthUser } from './createAuthUser';
import { createTemporaryUser } from './createTemporaryUser';

export const createAccount = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    const  newUserInfo  = req.body;
    console.log(req.body);
    console.log(JSON.parse(newUserInfo));
    const result = JSON.parse(newUserInfo);
    console.log(result.newUserInfo);
    const authUid = await createAuthUser(result.newUserInfo);
    await createTemporaryUser(authUid, result.newUserInfo);

    return res.status(200).send('Success!');
});
