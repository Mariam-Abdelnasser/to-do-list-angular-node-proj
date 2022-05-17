const todoDto = ({title,completed,createdBy,_id}) =>({
    id:_id,
    title,
    completed,
    createdBy,
})
module.exports={todoDto}