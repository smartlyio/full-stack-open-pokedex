# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## notes

工作流(yaml)

- 工作
  - 步骤
  - 步骤
- 工作
  - 步骤
  - 步骤

工作是并行的，步骤按照顺序执行

## 补充:

### yaml

- 大小写敏感
- 使用缩进表示层级
- 不可以使用 tab ，只能使用空格
- 缩进的空格数不重要，只要相同层级元素左对齐即可
- #表示注释

```yaml
key: child-key:value
  child-key2:value2

# key:{child-key:value,child-key2:value2}

keyComplex:
? - complexKey
  - complexKey2
: - complexValue
  - complexValue2
# keyComplex:{[complexKey,complexKey2]:[complexValue,complexValue2]}

companies:
  - id: 1
    name: company1
    price: 200W
  - id: 2
    name: company2
    price: 500W
# companies: [{id: 1,name: company1,price: 200W},{id: 2,name: company2,price: 500W}]

defaults: &defaults
  adapter: postgres
  host: localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults

# 与下面类似
defaults:
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  adapter:  postgres
  host:     localhost

test:
  database: myapp_test
  adapter:  postgres
  host:     localhost

- &showell Steve
- Clark
- Brian
- Oren
- *showell

# [ 'Steve', 'Clark', 'Brian', 'Oren', 'Steve' ]
```
