const mongoose = require('mongoose');

const formats = [
  'mongodb+srv://dbHomeBuddy:Jai29Abi@homebuddy.ueyclo1.mongodb.net/homebuddy?retryWrites=true&w=majority',
  'mongodb+srv://dbHomeBuddy:Jai29Abi@homebuddy.ueyclo1.mongodb.net/?retryWrites=true&w=majority&appName=HomeBuddy',
  'mongodb+srv://dbHomeBuddy:Jai29Abi@homebuddy.ueyclo1.mongodb.net/test?retryWrites=true&w=majority'
];

async function testFormats() {
  for (let i = 0; i < formats.length; i++) {
    console.log(`\nTesting format ${i + 1}:`);
    try {
      await mongoose.connect(formats[i], { serverSelectionTimeoutMS: 5000 });
      console.log('✅ Connected successfully!');
      await mongoose.connection.close();
      break;
    } catch (err) {
      console.log('❌ Failed:', err.message);
    }
  }
}

testFormats();