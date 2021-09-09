import DBsequelize from '@/db.conifg'

export const User = () => {
  DBsequelize
    .authenticate()
    .then((res) => {
      console.log('User res', res)
    })
    .catch((err) => {
      console.log('User err', err)
    })
}
