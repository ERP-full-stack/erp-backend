const data = [{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '周杰伦',
    age: '18',
    gender: '1',
},
{
    name: '张学友',
    age: '18',
    gender: '2',
},
{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '周杰伦',
    age: '18',
    gender: '1',
},
{
    name: '张学友',
    age: '18',
    gender: '2',
},
{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '周杰伦',
    age: '18',
    gender: '1',
},
{
    name: '张学友',
    age: '18',
    gender: '2',
},
{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '周杰伦',
    age: '18',
    gender: '1',
},
{
    name: '张学友',
    age: '18',
    gender: '2',
},
{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '周杰伦',
    age: '18',
    gender: '1',
},
{
    name: '张学友',
    age: '18',
    gender: '2',
},
{
    name: '刘岂宇',
    age: '18',
    gender: '1',
},
{
    name: '周杰伦',
    age: '18',
    gender: '1',
},
{
    name: '张学友',
    age: '18',
    gender: '2',
}];

const list = (req, res) => {
    return res.send({
        code: 200,
        message: '',
        data: {
            page: 1,
            pageSize: 10,
            rowTotal: 100,
            rows: data,
        },
    });
};

export default list;
