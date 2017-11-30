const faker = require('faker'),
     lodash = require('lodash');

faker.locale = 'zh_CN';

module.exports = () => {
    return {     
        acty: {
            data: lodash.times(10, function (n) {
                return {
                    id: faker.random.uuid(),
                    city: faker.address.city(),
                    county: faker.address.county(),
                    desc: faker.lorem.paragraph()                
                }
            }),
            msg: '成功获取活动列表'            
        }
    }
}
