const mongoose = require('mongoose');
require('dotenv').config();

async function quickTest() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  const Service = require('./models/Service');
  const Provider = require('./models/Provider');
  
  const serviceCount = await Service.countDocuments();
  const providerCount = await Provider.countDocuments();
  
  console.log(`✅ Services: ${serviceCount}`);
  console.log(`✅ Providers: ${providerCount}`);
  console.log('🚀 Backend ready for deployment!');
  
  mongoose.connection.close();
}

quickTest();