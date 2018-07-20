const data = require('./userData.json');

module.exports = {
    getUsers: (req, res) => {
        let {age, lastname, email, favorites} = req.query;

        if(age) res.status(200).send(data.filter(d => d.age < age));
        else if(lastname) res.status(200).send(data.filter(d => d.last_name === lastname));
        else if(email) res.status(200).send(data.filter(d => d.email === email));
        else if(favorites) res.status(200).send(data.filter(d => d.favorites.includes(favorites)));
        else res.status(200).send(data);
    },

    getByID: (req, res) => {
        let ID = +req.params.userId;
        let user = data.filter(d => d.id === ID)[0];

        if(user) res.status(200).send(user);
        res.status(404).send('null');
    },

    getAdmin: (req, res) => {
        res.status(200).send(data.filter(d => d.type === 'admin'));
    },

    getNonAdmin: (req, res) => {
        res.status(200).send(data.filter(d => d.type !== 'admin'));
    },
    
    getByType: (req, res) => {
        let {userType} = req.params;

        res.status(200).send(data.filter(d => d.type === userType));
    },
    
    updateUser: (req, res) => {
        let ID = +req.params.userId;
        let update = data.map(d => {
            if(d.id === ID){
                d = req.body;
            }
            return d;
        })

        res.status(200).send(update);
    },
    
    addUser: (req, res) => {
        let newUser = req.body
        newUser.id = data.length + 1;
        data.push(newUser);

        res.status(200).send(data);
    },
    
    deleteUser: (req, res) => {
        let ID = +req.params.userId;
        let idx = data.findIndex(d => d.id === ID)
        data.splice(idx, 1);

        res.status(200).send(data);
    },
}