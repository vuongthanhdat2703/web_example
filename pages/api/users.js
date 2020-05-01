// Fake users data
const users = [
  { id: 1, fullName: 'VTD' },
  { id: 2, fullName: 'VTD' },
  { id: 3, fullName: 'VTD' }, 
  { id: 4, fullName: 'VTD'}]

export default (req, res) => {
  // Get data from your database
  res.status(200).json(users)
}
