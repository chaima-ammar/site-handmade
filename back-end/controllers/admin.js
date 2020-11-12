const Card = require("../Models/admin")


module.exports={


//the functions of the admin, can add and delete and modify the Card

    getCard: async (req ,res)=>{
      console.log(res.body)
       const card = await  Card.find()
       res.send(card)
        
    },
  

    postCard :  (req,res)=>{
     
        const newCard = new Card(req.body);
        newCard.save()
                      .then(()=> res.json(newCard))
                      .catch(err=> console.log(err))
    },
    


    deleteCard:  (req,res)=>{
       const prod = Card.findByIdAndDelete(req.params.id).then(()=>res.send(prod))
           .catch(err=>
               console.log(err)
           
           )
    },
   
    patchCard: async (req,res)=>{
        try {
          
            card = await Card.findByIdAndUpdate(req.params.id, req.body, {
              new: true
            });
            res.send(card);
          } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');
          }
    },





  













    
}