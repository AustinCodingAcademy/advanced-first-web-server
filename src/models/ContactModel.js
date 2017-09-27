import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
  address: {
    required: false,
    type: String
  },
  phone: {
    required: false,
    type: String
  },
  occupation: {
    required: false,
    type: String
  },
  avatar: {
    required: true,
    type: String
  },
  age: {
    required: false,
    type: Number
  },
});

export default mongoose.model('Contact', schema);

// const ContactModel = mongoose.model('Contact',schema);
// export default ContactModel;
