const express = require('express')
    , bodyParser = require('body-parser')
    , ctrl = require('./usersCtrl');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/api/users', ctrl.getUsers);
app.get('/api/users/:userId', ctrl.getByID);
app.get('/api/admins', ctrl.getAdmin);
app.get('/api/nonadmins', ctrl.getNonAdmin);
app.get('/api/user_type/:userType', ctrl.getByType);
app.put('/api/users/:userId', ctrl.updateUser);
app.post('/api/users', ctrl.addUser);
app.delete('/api/users/:userId', ctrl.deleteUser);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});