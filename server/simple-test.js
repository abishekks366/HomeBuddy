const mongoose = require('mongoose');

const uri = 'mongodb+srv://dbHomeBuddy:Jai29Abi@homebuddy.ueyclo1.mongodb.net/homebuddy?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('✅ Connected successfully!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log('❌ Error:', err.message);
  });