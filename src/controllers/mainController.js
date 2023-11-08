const mainController = {
    home: ( req, res )=> { 
        res.send('Route for Home View');
    },
    contact: ( req, res )=> {  
        res.send('Route for Contact View');
    },
    about:( req, res )=> {
      res.send('Route for About View');
    },
    faqs:( req, res )=>{ 
        res.send('Route for Faqs View');
    },
    shop: ( req, res )=> { 
        res.send('Route for Home shop');
    },
    getShopItemById: ( req, res )=> {          
        // res.send('Route for item id')
        const id = req.params.id;
        res.send( 'Route for item id' +  id );
        // res.send({item});
    },
    postShopItemById:( req, res )=> {  
        const id = req.params.id;
        res.send( 'Route post for item id' +  id );
    },
    getCart:( req, res )=> { 
        res.send('Route for cart view');
    },
    postCart:( req, res )=> { 
        res.send('Route for post cart view');
    },
    getLogin:( req, res )=> {
        res.send('route for login');
    },
    postLogin:( req, res )=> {
        res.send('route for login');
    },
    getRegister:( req, res )=> {
        res.send('route for register');
    },
    postRegister:( req, res )=> {
        res.send('route for post register');
    },
    logout:( req, res )=> {
        res.send('route for logout');
    },
    admin:( req, res )=> { 
        res.send('Route for admin view');
    },
    getAdminCreate:( req, res )=> {
        //const id = req.params.id;
        res.send('route for create admin');
   },
   postAdminCreate:( req, res)=> {
    //const id = req.params.id;
    res.send('route post create id');
   },
   getAdminEditById:( req, res )=> {   
    res.send('Route for admin view by id' + id);
   },
   putAdminEditById:( req, res )=> {   
    res.send('Route for edit admin view by id');
   },
   deleteAdmById:( req, res )=> {   
    res.send('Route for delete admin view by id');
   },




}

module.exports = mainController;