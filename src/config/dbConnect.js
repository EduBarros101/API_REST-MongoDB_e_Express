import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://edubarros101:%23barros101@alura.gxddlcg.mongodb.net/alura-node'
)

let db = mongoose.connection

export default db
