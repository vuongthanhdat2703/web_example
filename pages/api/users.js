// Fake users data
const users = [
  { id: 1, fullName: 'VTD' },
  { id: 2, fullName: 'VDT' },
  { id: 3, fullName: 'VTH' }, 
  { id: 4, fullName: 'VTP'}]

export default (req, res) => {
  // Get data from your database
  res.status(200).json(users)
}
