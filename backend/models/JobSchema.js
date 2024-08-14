import mongoose from 'mongoose';

const applicantSchema = new mongoose.Schema({
  name: String,
  appliedOn: String,
  resumeLink: String,
  email: String,
  phone: String,
  skills: [String],
});

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  applicants: [applicantSchema],
});

const Job = mongoose.models.Job || mongoose.model('Jobs', jobSchema);

export default Job;
